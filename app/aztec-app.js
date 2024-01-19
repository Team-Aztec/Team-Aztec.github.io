import { RENCONTRES, TEAMS } from './aztec-data.js'

class AztecApp {
	constructor() {
		this.backgroundLogo = document.querySelector('.bg-logo')
		this.joinVideo = document.querySelector('.video-background')
		this.activeMatchHistory = null

		this.logoScale = 180

		let teamNode = document.getElementById('equipe')
		this.team = {
			index: -1,
			running: false,
			isIntersecting: false,
			section: teamNode,
			nameNode: equipe.querySelector('.roster-name span'),
			playersNodes: [...equipe.querySelectorAll('.player')],
			staffNodes: [...equipe.querySelectorAll('.staff')],
			nextAutoDisplayId: -1,
		 }

		 this.wasPlaying = {
			running: false,
			section: document.querySelector('.was-playing'),
			names: document.querySelector('.wp-role'),
			isIntersecting: false,
			nextAutoDisplayId: -1,
			activeNode: document.querySelector('.wp-slide-in'),
		 }

		this.bind()
		this.init()
	}

	bind() {
		document.body.addEventListener('hash', e => this.onScroll(e))
		document.body.addEventListener('click', e => this.dispatchAction(e))
		document.querySelector('.preview')
			.addEventListener('mouseenter', e => this.loadJoinVideo(e), { once:true })
		document.body.addEventListener('scroll', e => this.onScroll(e), { passive:true })

		this.team.section.addEventListener('mousemove', e => {
			if (e.target.closest('.player, .staff'))
				this.scheduleNextDisplayTeam()
		})

		this.intersectionObserver = new IntersectionObserver(event => {
			for (let intersection of event)
				switch (intersection.target) {
				case this.team.section:
					this.team.isIntersecting = intersection.isIntersecting
					this.scheduleNextDisplayTeam()
				break; case this.wasPlaying.section:
					this.wasPlaying.isIntersecting = intersection.isIntersecting
					this.scheduleNextWasPlaying()
				}
			}, {
				root: document.body,
				threshold: 0.2,
			})

		this.intersectionObserver.observe(this.team.section)
		this.intersectionObserver.observe(this.wasPlaying.section)
	}

	init() {
		if (location.hash)
			this.scrollTo(location.hash)
		this.renderMatches()
		this.moveBackgroundTargets()
		this.displayTeam(1)
	}

	renderMatches() {
		const teamsData = {
			'team': { name:'Team Aztec', logo:'--stroke-width:16;'},
			'talent': { name:'Aztec Talent', logo:'--stroke-width:1; --inner-fill:url(#innerGradient);' },
		}

		const today = new Date().toISOString().slice(0, 10).replace('T', ' ')
		const yesterday = new Date(Date.now() - 24*3600*1000).toISOString().slice(0, 10).replace('T', ' ')
		const dtf = new Intl.DateTimeFormat('fr-FR', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
		const parseTime = (date) => dtf.format(new Date(date)).replace(',', '')

		const matches = RENCONTRES
			.filter(match => today<match[0] || match[3] && yesterday<match[0])
			.sort((a,b) => (a[0]>b[0])-(a[0]<b[0]))

		let nodes = [...document.querySelector(".rencontres").children]
		for (const [ time, title, stream, result ] of matches) {
			const teamData = /team.*aztec/i.test(title) ? teamsData.team : teamsData.talent
			const node = nodes.shift()
			if (!node)
				break;

			const [ team, against ] = title.split('vs')
			let [ _, w, l ] = result ? /(\d+).*?(\d+)/i.exec(result) : [0,0,0]
			w = Number(w)
			l = Number(l)

			const isToday = time.startsWith(today)
			if (isToday && !result)
				node.classList.add('active')

			node.innerHTML  = /*html*/`
				<svg class="r-tag" viewBox="0 0 1000 1000">
					<title> ${teamData.name} </title>
					<use style="${teamData.logo}"
							xlink:href="#logo-aztec"></use>
				</svg>
				<span class="r-time"> ${parseTime(time)} </span>
				<div class="r-title">
					<span ${w>l?'class="r-victory"':''}>${team}</span>
						<span>VS</span>
					<span ${l>w?'class="r-victory"':''}>${against}</span>
					${ result ? /*html*/`
						<span class="r-count ${w>l?'win':''}">${w}</span>
						<span>-</span>
						<span class="r-count ${l>w?'lose':''}">${l}</span>
						` : '' }
				</div>
				${ (!result && stream && isToday) ? /*html*/`<a href="${stream}" target="_blank" class="r-stream"></a>` : '' } `
		}
	}

	moveBackgroundTargets() {
		const targets = [...document.querySelectorAll('#background .bg-moving-target')]
		let index = 0
		function moveTarget() {
			const scaleX = index&1 ? 1 : -1
			const scaleY = index&2 ? 1 : -1

			const screenRatio = window.innerWidth/window.innerHeight

			const offset = 40
			const sizeX = Math.min(screenRatio, 1) * 500 - offset*2
			const sizeY = (1/Math.max(screenRatio, 1)) * 500 - offset*2

			const x = scaleX * (sizeX * Math.random() + offset)
			const y = scaleY * (sizeY * Math.random() + offset)

			targets[index%targets.length].style.transform = `translate(${x}px, ${y}px)`
			index++
		}

		setTimeout(() => {
			moveTarget()
			moveTarget()
			moveTarget()
			moveTarget()
		})
		setInterval(moveTarget, 3000)
	}

	onScroll(e) {
		const { scrollTop, scrollHeight, offsetHeight, } = document.body
		let style = this.backgroundLogo.style

		let offset = scrollHeight - offsetHeight - scrollTop
		let scale = 85 + (offset - 300) / 20
		scale = Math.min(Math.max(85, scale), 160)

		if (scale !== this.logoScale) {
			this.logoScale = scale
			style.maxHeight = `${scale}vmin`
			style.maxWidth = `${scale}vmin`

			style.filter = `grayscale(${(scale-85)/95}) blur(0.7px)`

			if (scale === 180) {
				style.zIndex = -1
				style.opacity = 0.1
			} else if (scale === 85)
				style.zIndex = 1
		}

		style.opacity = Math.min(Math.max(0.1, 0.1+(800-offset)/800 ), 1)
	}

	dispatchAction(e) {
		const target = e.target.closest('[data-action]')
		switch (target?.dataset.action) {
		case 'scroll-to': return this.scrollTo(target.getAttribute('href'), e)
		case 'prev-team': return this.displayTeam(-1, target)
		case 'next-team': return this.displayTeam(1, target)
		case 'display-history': return this.displayHistory()
		}
	}

	async displayHistory() {
		if (!this.activeMatchHistory) {
			const AztecMatchHistory = (await import('./aztec-match-history.js')).default
			this.activeMatchHistory = new AztecMatchHistory()
		}

		if (!this.activeMatchHistory.isConnected)
			document.body.appendChild(this.activeMatchHistory)
	}

	/**
	 * @param {string} id
	 * @param {MouseEvent} e
	 */
	scrollTo(id, e) {
		e?.preventDefault()
		history.replaceState(undefined, undefined, id)
		document.querySelector(id)
			.scrollIntoView({ behavior:'smooth' })
	}

	async displayTeam(offset, node) {
		if (this.team.running)
			return
		this.team.running = true

		try {
			node?.classList.add('active')

			this.team.index = (this.team.index + offset + TEAMS.length) % TEAMS.length

			const teamData = TEAMS[this.team.index]
			const wasHiden = this.team.section.classList.contains('hiden')

			if (!wasHiden)
				this.team.section.classList.add('hiden')
			await Promise.all([
				...teamData.roster.map(([ _a, bg]) =>this.awaitImg(`./app/players/${bg}`)),
				wasHiden ? null : this.wait(750)
			])

			this.team.nameNode.innerHTML = teamData.name
			for (let [ i, node ] of this.team.playersNodes.entries()) {
				const [ name, background, ...links ] = teamData.roster[i] ?? []

				if (!name) {
					node.style.display = 'none'
					continue
				}
				node.style.display = ''

				node.children[0].textContent = name
				node.children[1].children[0].setAttribute('style', `--bg:url(./app/players/${background})`)
				node.children[2].innerHTML = links
					.map(link => `<a href="https://www.${link}" target="_blank"></a>`)
					.join('')
			}

			for (let [ i, node ] of this.team.staffNodes.entries()) {
				const [ name, role ] = teamData.staff[i] ?? []

				if (!name) {
					node.style.display = 'none'
					continue
				}
				node.style.display = ''
				node.children[0].textContent = name
				node.children[1].textContent = role
			}
			this.team.section.classList.remove('hiden')
			await this.wait(350)
			node?.classList.remove('active')

		} finally {
			this.team.running = false
			this.team.section.classList.remove('hiden')
			this.scheduleNextDisplayTeam()
		}
	}

	scheduleNextDisplayTeam() {
		clearTimeout(this.team.nextAutoDisplayId)
		if (!this.team.isIntersecting)
			return
		this.team.nextAutoDisplayId = setTimeout(() => this.displayTeam(1), 6000)
	}

	async displayWasPlaying() {
		if (this.wasPlaying.running)
			return
		this.wasPlaying.running = true

		try {

			for (let i=0 ; i<5; i++) {
				let active = this.wasPlaying.activeNode
				let next = active.nextElementSibling || this.wasPlaying.names.firstElementChild

				active.classList.add('wp-slide-out')
				next.classList.add('wp-slide-in')
				this.wasPlaying.activeNode = next
				await this.wait(280)

				setTimeout(() => active.classList.remove('wp-slide-in', 'wp-slide-out'), 500)
			}

			//await this.wait(500)
			//active.classList.remove('wp-slide-in', 'wp-slide-out')

		} finally {
			this.wasPlaying.running = false
			this.scheduleNextWasPlaying()
		}
	}

	scheduleNextWasPlaying() {
		clearTimeout(this.wasPlaying.nextAutoDisplayId)
		if (!this.wasPlaying.isIntersecting)
			return
		this.wasPlaying.nextAutoDisplayId = setTimeout(() => this.displayWasPlaying(), 5000)
	}

	wait(delay) {
		return new Promise(resolve => setTimeout(resolve, delay))
	}

	awaitImg(src) {
		return new Promise(resolve => {
			const img = new Image()
			img.onload = resolve
			img.onerror = resolve
			img.src = src
		})
	}

	loadJoinVideo() {
		this.joinVideo.setAttribute('src', './app/media/join-preview.webm')
	}
}

window.app = new AztecApp()
