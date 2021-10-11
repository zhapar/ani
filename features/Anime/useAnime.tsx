import { useQuery } from 'react-query'
import { request } from 'libs/fetcher'
import { Anime } from 'interfaces/anime'

export default function useAnime(id) {
  return useQuery<{ status_code: number; data: Anime }>(
    ['animes', { id }],
    () => request(`/anime/${id}`),
    {
      enabled: Boolean(id),
    }
  )
}
