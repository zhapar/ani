import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query'
import { request } from 'libs/fetcher'
import { Animes } from 'interfaces/anime'

export default function useAnimes({
  page = 1,
  title,
  formats,
  status,
  year,
  season,
  genres,
}: {
  page?: number
  title?: string
  formats?: string
  status?: string | undefined
  year?: string
  season?: string | undefined
  genres?: string
}) {
  return useInfiniteQuery<Animes>(
    ['animes', { title, formats, status, year, season, genres }],
    () =>
      request('/anime', { page, title, formats, status, year, season, genres }),
    {
      getNextPageParam: (page) =>
        page.data.current_page === page.data.last_page
          ? undefined
          : page.data.current_page + 1,
    }
  )
}

// Update anime
// export function updateAnime() {
//   const queryClient = useQueryClient()
//   return useMutation(postRefillBalance, {
//     onSuccess: () => {
//     },
//     onError: (error) => {
//       throw error
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries('anime')
//     },
//   })
// }
