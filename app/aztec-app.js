const RENCONTRES = [
	//[ "AAAA-MM-JJ hh:mm", "Text affiché", "https://www.twitch.tv/ironpol33" ]
	[ "2023-11-08 20:30", "vs cs2Ctonjeu", "https://www.twitch.tv/djiimy" ],
	[ "2023-11-13 20:30", "vs Carte Blanche", "https://www.twitch.tv/ironpol33" ],
	[ "2023-11-15 20:30", "vs EWAVE", "https://www.twitch.tv/ironpol33" ],

];










////
//
//

class AztecApp {
	constructor() {
		/**@type {HTMLElement} */
		this.background = document.getElementById('background')
		/**@type {HTMLElement} */
		this.sponsors = document.getElementById('sponsors')
		/**@type {HTMLElement} */
		this.propos = document.getElementById('a-propos')
		/**@type {HTMLElement} */
		this.joinVideo = document.querySelector('.video-background')
		/**@type {HTMLDivElement} */
		this.activePlayer = null
		this.currentOpacity = -1

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

	onScroll(e) {
		const { scrollTop, scrollHeight, offsetHeight, } = document.body

		let opacity = 0.0
		if (scrollTop > scrollHeight-offsetHeight-100)
			opacity = 1.0

		if (opacity != this.currentOpacity) {
			this.currentOpacity = opacity
			this.background.style.opacity = opacity
		}
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
