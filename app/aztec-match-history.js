import { RENCONTRES } from './aztec-data.js'

const DTF = new Intl.DateTimeFormat('fr-FR', { day:'2-digit', month:'long', hour:'2-digit', minute:'2-digit' })
const DTFDay = new Intl.DateTimeFormat('fr-FR', { day:'2-digit', month:'long' })
const DTFMonth = new Intl.DateTimeFormat('fr-FR', { month:'long' })

const teamsData = {
	'teamaztec': { name:'Team Aztec', logo:''},
	'aztectalent': { name:'Aztec Talent', logo:'--stroke-width:1; --inner-fill:#f6b84e;' }
}

const template = /*html*/`
	<svg style="display:none" viewBox="0 0 1000 1000" preserveaspectratio="xMidYMid slice">
	<defs>
		<g id="logo-aztec">
			<path fill="#000F"
				d="M290,53L290,143L310,138V278L220,300V340L60,660
					C 225,1075 775,1076 940,660
					L 780,340 V 300 L 690,278 V 138 L710,143 710,53 L 500,0 Z"></path>
			<path style="
					fill: var(--inner-fill, none);
					stroke-width: var(--stroke-width, 6);
					stroke: #f6b84e;"
				d="M300,60V130L500,80L700,130V60L500,10Z
					M320,150V260L350,252.5V170L460,142.5V225L490,217.5V107.5Z
					M365,180V248.75L385,243.75V195L425,185V233.75L445,228.75V160Z
					M680,150V260L650,252.5V170L540,142.5V225L510,217.5V107.5Z
					M635,180V248.75L615,243.75V195L575,185V233.75L555,228.75V160Z
					M230,307V340L200,400H250L270,360L500,302.5L730,360L750,400H800L770,340V307.5L500,240Z M500,240V302.5
					M190,420L120,560H170L240,420Z
					M110,580L70,660L95,710L160,580Z
					M290,380L100,760L275,920L470,335Z
					M500,370L470,460H530Z
					M455,490L425,580L500,570L575,580L545,490Z
					M410,610L380,700L500,710L620,700L590,610L500,600Z
					M365,730L335,820L500,840L665,820L635,730L500,740Z
					M320,850L295,925L500,980L705,925L680,850L500,870Z
					M530,335L725,920L900,760L710,380Z
					M760,420L830,560H880L810,420Z
					M840,580L905,710L930,660L890,580Z"></path>
			<path style="fill: #f6b84e"
				d=" M285,80.30 A485,485 0,1,0 715,80.30 V133.33 A438.2,438.2 0,1,1 285,133.33 Z"></path>
		</g>
	</defs>
	</svg>
	<style>
		:host {
			z-index: 10;
			position: fixed;
			left: 0;
			right: 0;
			top: -32px;
			bottom: 0;
			overflow: hidden scroll;
			background: #000C;
			animation: open ease-out 250ms;
		}

		@keyframes open {
			from { background:#0000; opacity:0; }
			to { background:#000A; opacity:1; }
		}
		
		:host(.close) {
			opacity: 0;
			transition: opacity ease-in 250ms;
		}

		.close {
			position: fixed;
			top: 16px;
			right: 32px;
			height: 64px;
			width: 64px;
			border-radius: 50%;
			cursor: pointer;
			stroke-linecap: round;
			stroke: #FFF;
			stroke-width: 10;
		}
		.close:hover {
			background: #444A;
		}

		.container {
			max-width: 1000px;
			margin: 64px auto;
			display: flex;
			flex-wrap: wrap;
			gap: 32px;
			align-content: start;
			justify-content: center;
		}

		.year {
			width: 100%;
		}
		.month {
			width: 100%;
		}
		.year,
		.month {
			display: grid;
			align-items: center;
			grid-template-columns: 1fr max-content 1fr;
		}
		.year::before, .year::after,
		.month::before, .month::after {
			content: '';
			display: block;
			border-bottom: solid 1px #CCC;
			margin: 0 64px;
		}
		.year {
			font-size: 1.6em;
			font-weight: bold;
			margin: 16px 0;
		}
		.year::before, .year::after {
			border-bottom: solid 2px #FFF;
			margin: 0 32px;
		}

		.card {
			text-decoration: none;
			color: inherit;
			box-sizing: border-box;
			padding: 8px;
			flex: 0 0 auto;
			position: relative;
			width: 450px;
			max-width: 100%;
			aspect-ratio: 16/9;
			border: solid 2px #444;
			background: #111;
			overflow: hidden;

			display: grid;
			grid-template: auto auto 1fr / 1fr;
		}
		.card[href=*] {
			cursor: pointer;
		}

		.card.soon {
			/* #F6B84E #684e25 #140f07 */
			border-color: #684e25;
			background: #140f07;
		}
		.win-score { color:#3BC030; }
		.card.win {
			/* #3BC030 #3BC03060 #3bc03015 */
			border-color: #1c5119;
			background: #050f05;
		}
		.lose-score { color:#DD1F0E; }
		.card.lose {
			/* #DD1F0E #DD1F0E60 #DD1F0E15 */
			border-color: #5d1415;
			background: #120202;
		}
		.card-bg-logo {
			grid-area: 1/1/4/2;
			margin: -8px;
			width: 70%;
			aspect-ratio: 1/1;
			opacity: 0.1;
		}

		.time {
			grid-area: 1/1/2/2;
			text-align: center;
			font-size: 0.8em;
			line-height: 1.1em;
			opacity: 0.6;
		}
		.time.soon {
			font-size: 1.2em;
			line-height: 1.2em;
			opacity: 1;
			color: #F6B84E;
		}

		.title {
			text-align: center;
			grid-area: 2/1/3/2;
		}

		.match {
			grid-area: 3/1/4/2;
			display: grid;
			grid-template-columns: 1fr min-content 1fr;
			grid-auto-rows: 1em;
			text-align: center;
			grid-gap: 0 16px;
			align-content: center;
			font-size: 1.2em;
		}
		.winner {
			color: #ffd700;
			font-weight: bold;
		}

		.left { text-align: left; }
		.right { text-align: right; }

	</style>
	<section class="container">
	</section>
	<svg class="close" data-action="close" viewBox="-20 -20 140 140" data-action="close">
		<path d="M10,10L90,90 M10,90L90,10"></path>
	</svg>`

export default class AztecMatchHistory extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode:'open' })
		this.shadowRoot.innerHTML = template
		this.container = this.shadowRoot.querySelector('.container')

		this.matches = []
		this.nextRenderIndex = 0
		this.renderCount = 8
		this.currentYear = new Date().getFullYear().toString()
		this.currentMonth = null

		this.init()
	}

	init() {
		this.shadowRoot.addEventListener('click', (e) => this.dispatchAction(e))
		this.onScroll = this.onScroll.bind(this)
		this.addEventListener('scroll', this.onScroll, { passive:true })

		this.matches = RENCONTRES
			.sort((a, b) => (a[0]<b[0])-(a[0]>b[0]))
			.map(([ time, vs, _, result, title, link ]) => {
				let [ aztec, against ] = vs.split('vs')
				aztec = aztec.toLowerCase().replace(/ /g, '')
				const [ match, win, lose ] = result ? (/(\d+)w.*(\d+)l/i).exec(result) : [0,0,0]
				return { time, aztec, against, win, lose, title, link }
			})

		this.renderNextRange()
	}

	onScroll(e) {
		if (this.scrollHeight - this.offsetHeight - this.scrollTop < 200) {
			if (!this.renderNextRange())
				this.removeEventListener('scroll', this.onScroll)
		}
	}

	dispatchAction(e) {
		let target = e.target.closest('[data-action]')
		switch (target?.dataset.action) {
		case 'display-details': break
		case 'close': this.close(); break
		default: return
		}

		e.preventDefault()
	}

	async close() {
		this.classList.add('close')
		await new Promise(r => setTimeout(r, 250))
		this.remove()
		this.classList.remove('close')
	}

	renderNextRange() {
		if (this.nextRenderIndex === this.matches.length)
			return false

		const cards = []
		for (let i=0; i<this.renderCount && this.nextRenderIndex<this.matches.length; ++i) {
			const match = this.matches[this.nextRenderIndex++]

			if (this.currentYear !== match.time.slice(0,4))
				cards.push(this.buildYear(match.time))
			if (this.currentMonth !== match.time.slice(5,7))
				cards.push(this.buildMonth(match.time))

			cards.push(this.buildCard(match))
		}
		this.container.insertAdjacentHTML('beforeend', cards.join(''))

		return true
	}

	buildYear(time) {
		this.currentYear = time.slice(0,4)
		return /*html*/`<div class="year"><span>${this.currentYear}</span></div>`
	}

	buildMonth(time) {
		this.currentMonth = time.slice(5,7)
		const month = this.parseTime(`1970-${this.currentMonth}-15`, DTFMonth)
		return /*html*/`<div class="month"><span>${month}</span></div>`
	}

	buildCard({ time, aztec, against, win, lose, title, link }) {
		this.currentYear
		this.currentMonth
		const aztecData = teamsData[aztec]
		const today = new Date().toISOString().slice(0,10)

		return /*html*/`
			<a target="_blank"
					${link ? `href="${link}"` : ''}
					class="card
						${ win>lose ? 'win' :
							lose>win ? 'lose' :
							time>today ? 'soon' : ''}">
				<svg class="card-bg-logo" viewBox="300 100 700 700" preserveaspectratio="xMidYMid slice">
					<use style="${aztecData.logo}"
							xlink:href="#logo-aztec"></use>
				</svg>
				<span class="time ${!win&&!lose&&time>today ? 'soon':''}"> ${this.parseTime(time, time>today ? DTF : DTFDay)} </span>
				${ title ? `<span class="title"> ${title} </span>` : '' }
				<div class="match">
					<span class="right ${win>lose?'winner':''}"> ${aztecData.name} </span> VS <span class="left ${win<lose?'winner':''}"> ${against} </span>
					<span class="right ${win>lose?'win-score':''}"> ${win}W </span> - <span class="left ${win<lose?'lose-score':''}"> ${lose}L </span>
				</div>
			</a>`
	}

	parseTime(date, type=DTF) {
		return type.format(new Date(date)).replace(',', '')
	}
}

customElements.define('aztec-match-history', AztecMatchHistory)
