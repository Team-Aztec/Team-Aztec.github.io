import axios from 'axios'
import { Tournament } from '../../types/types'

export const useFaceit = () => {
  const getTournament = async (): Promise<any> => {
    return await axios
      .get('https://open.faceit.com/data/v4/tournaments/5284bce2-b0d0-4b9c-b66d-39ffc91881a3"', {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_FACEIT_API_KEY}` },
      })
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error)
      })
  }

  const getFutureTournaments = async (): Promise<Tournament[]> => {
    return await axios
      .get('https://open.faceit.com/data/v4/organizers/4a01f2c0-66f1-4958-944c-e67076dc9f41/championships', {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_FACEIT_API_KEY}` },
      })
      .then((resp) =>
        resp.data.items.filter((tournament: Tournament) => tournament.status === 'upcoming' || tournament.status === 'started')
      )
      .catch((error) => {
        console.log(error)
      })
  }

  return {
    getTournament,
    getFutureTournaments,
  }
}
