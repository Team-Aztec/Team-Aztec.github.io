export interface Tournament {
  id: string
  status?: string
  faceit_url?: string
  championship_start?: string
  image?: string
  name?: string
  arena: boolean
}

export interface History {
  title: string
  url: string
  image: {
    url: string
    alt: string
  }
  winner?: string
}

export interface TournamentPage {
  actual: Tournament[]
  future: Tournament[]
}

export interface LeagueSwissRound {
  name: string
  score: string
  matchs: {
    round1?: {
      name: string
      win: boolean
    }
    round2?: {
      name: string
      win: boolean
    }
    round3?: {
      name: string
      win: boolean
    }
    round4?: {
      name: string
      win: boolean
    }
    round5?: {
      name: string
      win: boolean
    }
  }
}
