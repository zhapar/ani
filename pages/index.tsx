import { getLayout } from 'components/Layout'
import AnimeList from 'features/Anime'
import { dehydrate, QueryClient } from 'react-query'
import { request } from 'libs/fetcher'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery(
    ['animes', { formats: '', genres: '', title: '', year: '' }],
    () => request('/anime')
  )

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  }
}
function HomePage() {
  return (
    <div className="container">
      <AnimeList />
    </div>
  )
}

export default HomePage

HomePage.getLayout = getLayout
