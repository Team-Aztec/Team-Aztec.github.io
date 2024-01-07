(() => {
	const style = document.createElement('style')
	document.head.appendChild(style)
	style.sheet.insertRule(`
		canvas {
			position: fixed;
			height: 100vh !important;
			width: 100vw !important;
			top: 0;
			left: 0;
			z-index: 9999;

			filter: brightness(1.4) contrast(1.35) brightness(1.6);
			background: #222;
		}`, 0)

	const canvas = document.querySelector('canvas')
})()