import axios from 'axios'
import { Tournament } from '../../types/types'
import { tournamentStatistiques } from '../../../data/stats'

export const useFaceit = () => {
  const getTournament = async (tournamentId: string): Promise<Tournament> => {
    return await axios
      .get(`https://open.faceit.com/data/v4/championships/${tournamentId}`, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_FACEIT_API_KEY}` },
      })
      .then((resp) => ({ ...resp.data, faceit_url: resp.data.faceit_url.replace('{lang}', 'fr') }))
      .catch((error) => {
        console.log(error)
      })
  }

  const getStatistiquesTournaments = async (): Promise<Tournament[]> => {
    const promises: Promise<Tournament>[] = []

    tournamentStatistiques.forEach((tournament: Tournament) => {
      promises.push(getTournament(tournament.id))
    })

    return await Promise.all(promises)
  }

  const getHomeTournaments = async (): Promise<Tournament[]> => {
    return await axios
      .get('https://open.faceit.com/data/v4/organizers/4a01f2c0-66f1-4958-944c-e67076dc9f41/championships?limit=100', {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_FACEIT_API_KEY}` },
      })
      .then((resp) =>
        resp.data.items.filter(
          (tournament: Tournament) =>
            tournament.status === 'upcoming' || tournament.status === 'started' || tournament.status === 'join'
        )
      )
      .catch((error) => {
        console.log(error)
      })
  }

  const getFutureTournaments = async (): Promise<Tournament[]> => {
    return await axios
      .get('https://open.faceit.com/data/v4/organizers/4a01f2c0-66f1-4958-944c-e67076dc9f41/championships?limit=100', {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_FACEIT_API_KEY}` },
      })
      .then((resp) => resp.data.items.filter((tournament: Tournament) => tournament.status === 'join'))
      .catch((error) => {
        console.log(error)
      })
  }

  return {
    getTournament,
    getHomeTournaments,
    getFutureTournaments,
    getStatistiquesTournaments,
  }
}
