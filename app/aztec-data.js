export const RENCONTRES = [
	//[ "AAAA-MM-JJ hh:mm", "Team/Talent", "Text affiché", "https://www.twitch.tv/teamaztec_tv" ],
	[ "2024-01-05 21:00", "Team", "L'Echauffement BEHOP", "https://www.twitch.tv/djiimy" ],
	[ "2024-01-16 20:00", "Talent", "Aztec Talent vs mYinsanity", "https://www.twitch.tv/djiimy" ],
	[ "2024-01-17 20:30", "Team", "Team Aztec vs ZAKAT", "https://www.twitch.tv/djiimy" ],
]



export const TEAMS = [
	{
		name: /*html*/`Counter-Strike 2 :
			<span class="roster-logo-container">
				<svg class="roster-logo" viewBox="0 0 1000 1000">
					<use style="--stroke-width:9;"
							xlink:href="#logo-aztec"></use>
				</svg>
				Team Aztec
			</span>`,
		roster: [
			[ 'ImVaal', 'team-aztec/ImVaal.png',
				'twitter.com/ImVaal_', 'twitch.tv/imvaal_', 'youtube.com/@ImVaal' ],
			[ 'm0nstrGG', 'team-aztec/M0nstrGG.webp',
				'twitter.com/m0nstrGG' ],
			[ 'Arno3K', 'team-aztec/Arno3K.png',
				'twitter.com/arno3K', 'twitch.tv/arno3k', 'youtube.com/@manilefuret219' ],
			[ 'Sparta', 'team-aztec/Sparta.png',
				'twitter.com/SpartaCSGO', 'twitch.tv/spartacsgo' ],
			[ 'Sye', 'team-aztec/Sye.png',
				'twitter.com/Sye_Cs' ],
		],
		staff: [
			[ 'Ironpol', 'Manager' ],
			[ 'Riggow', 'Coach' ],
		],
	},
	{
		name: /*html*/`Counter-Strike 2 :
			<span class="roster-logo-container">
				<svg class="roster-logo" viewBox="0 0 1000 1000">
					<use style="--stroke-width:1; --inner-fill:url(#innerGradient);"
							xlink:href="#logo-aztec"></use>
				</svg>
				Aztec Talent
			</span>`,
		roster: [
			[ 'Ay0k', 'aztec-talent/Ay0k.webp',
				'twitter.com/Ay0kcs' ],
			[ 'DeeN', 'aztec-talent/DeeN.webp',
				'twitter.com/deeN_cs' ],
			[ 'Bond1e', 'aztec-talent/Bond1e.webp',
				'twitter.com/bond1e_cs' ],
			[ 'Kodak', 'aztec-talent/Kodak.webp',
				'twitter.com/kodak444' ],
			[ 'T3zisswes', 'aztec-talent/T3zisswes.webp',
				'twitter.com/t3zisswes' ],
		],
		staff: [
			[ 'E1mantas', 'Manager',
				'twitter.com/E1mantasCS2' ],
		],
	},
]
