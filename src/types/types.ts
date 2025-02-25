export interface New {
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
}

export interface Tournament {
  id: string
  status: string
  faceit_url: string
  championship_start: string
}
