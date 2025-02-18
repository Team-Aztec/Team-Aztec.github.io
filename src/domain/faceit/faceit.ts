import axios from 'axios'

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

  const getOrganizedDetails = async (): Promise<any> => {
    return await axios
      .get('https://open.faceit.com/data/v4/organizers/4a01f2c0-66f1-4958-944c-e67076dc9f41', {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_FACEIT_API_KEY}` },
      })
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error)
      })
  }

  return {
    getTournament,
    getOrganizedDetails,
  }
}
