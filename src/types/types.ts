export interface New {
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
  faceit_url?: string
}
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
}

export interface TournamentPage {
  actual: Tournament[]
  future: Tournament[]
}
