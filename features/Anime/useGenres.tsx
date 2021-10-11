import { Genres } from 'interfaces/anime'
import { request } from 'libs/fetcher'
import { useQuery } from 'react-query'

function useGenres() {
  return useQuery<Genres>('genres', () => request('/resources/1.0/0'))
}

export default useGenres
