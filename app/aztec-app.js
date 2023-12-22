const RENCONTRES = [
	//[ "AAAA-MM-JJ hh:mm", "Text affiché", "https://www.twitch.tv/ironpol33" ]
	[ "2023-11-27 21:30", "vs N1GHT Esports", "https://www.twitch.tv/the_pp5" ],
	[ "2023-11-29 21:00", "vs dunderhonung", "https://www.twitch.tv/the_pp5" ],
	[ "2023-11-15 20:30", "vs EWAVE", "https://www.twitch.tv/ironpol33" ],

];










////
//
//

class AztecApp {
	constructor() {
		/**@type {HTMLElement} */
		this.background = document.getElementById('background')

		this.backgroundLogo = this.background.querySelector('.bg-logo')

		/**@type {HTMLElement} */
		this.sponsors = document.getElementById('sponsors')
		/**@type {HTMLElement} */
		this.propos = document.getElementById('a-propos')
		/**@type {HTMLElement} */
		this.joinVideo = document.querySelector('.video-background')
		/**@type {HTMLDivElement} */
		this.activePlayer = null
		this.logoScale = 180

		document.body.addEventListener('hash', e => this.onScroll(e))
		document.body.addEventListener('click', e => this.dispatchAction(e))
		document.querySelector('.preview')
			.addEventListener('mouseenter', e => this.loadJoinVideo(e), { once:true })
		document.body.addEventListener('scroll', e => this.onScroll(e), { passive:true })

		this.init()
	}

	init() {
		if (location.hash)
			this.scrollTo(location.hash)
		this.renderMatches()
		this.moveBackgroundTargets()
	}

	renderMatches() {
		const today = new Date().toISOString().slice(0, 10).replace('T', ' ')
		const dtf = new Intl.DateTimeFormat('fr-FR', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
		const parseTime = (date) => dtf.format(new Date(date)).replace(',', '')

		const matches = RENCONTRES
			.filter(match => today < match[0])
			.sort((a,b) => (a[0]>b[0])-(a[0]<b[0]))

		let nodes = [...document.querySelector(".rencontres").children]
		for (const [ time, title, stream ] of matches) {
			const node = nodes.shift()
			if (!node)
				break;

			const isToday = time.startsWith(today)
			if (isToday)
				node.classList.add('active')

			node.innerHTML  = /*html*/`
				<span class="r-tag" style="--x:2;--y:0"></span>
				<span class="r-time"> ${parseTime(time)} </span>
				<span class="r-title"> ${title} </span>
				${ stream && isToday && /*html*/`<a href="${stream}" class="r-stream"></a>` || '' } `
		}
	}

	moveBackgroundTargets() {
		const targets = [...this.background.querySelectorAll('.bg-moving-target')]
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

			style.filter = `grayscale(${(scale-85)/95})`

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
		}
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

	loadJoinVideo() {
		this.joinVideo.setAttribute('src', './app/join-preview.webm')
	}
}

window.app = new AztecApp()
