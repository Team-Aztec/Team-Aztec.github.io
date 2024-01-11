export const RENCONTRES = [
	//[ "AAAA-MM-JJ hh:mm", "Team/Talent", "Text affiché", "https://www.twitch.tv/teamaztec_tv" ],
	[ "2024-01-05 21:00", "Team", "L'Echauffement BEHOP", "https://www.twitch.tv/djiimy" ],
	[ "2024-01-05 20:30", "Talent", "ESEA Saison 48 Main", "https://www.twitch.tv/teamaztec_tv" ],
	[ "2024-01-15 20:30", "Team", "ESEA Saison 48 Intermediate", "https://www.twitch.tv/teamaztec_tv" ],
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
			[ 'Arno3K', 'team-aztec/Arno3K.png',
				'twitter.com/arno3K', 'twitch.tv/arno3k', 'youtube.com/@manilefuret219' ],
			[ 'ImVaal', 'team-aztec/ImVaal.png',
				'twitter.com/ImVaal_', 'twitch.tv/imvaal_', 'youtube.com/@ImVaal' ],
			[ 'm0nstrGG', 'default.webp',
				'twitter.com/m0nstrGG' ],
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
			[ 'Bond1e', 'aztec-talent/Bond1e.webp',
				],
			[ 'Ay0k', 'aztec-talent/Ay0k.webp',
				],
			[ 'DeeN', 'aztec-talent/DeeN.webp',
				],
			[ 'Kodak', 'default.webp',
				],
			[ 'T3zisswes', 'default.webp',
				],
		],
		staff: [
			[ 'E1mantas', 'Manager' ],
		],
	},
]
