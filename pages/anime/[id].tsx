import useAnime from 'features/Anime/useAnime'
import Star from 'icons/Star'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { getLayout } from 'components/Layout'
import Image from 'next/image'
import cn from 'classnames'

function Anime() {
  const router = useRouter()
  const { id }: ParsedUrlQuery = router.query
  const { data: anime, isSuccess } = useAnime(id)

  if (anime?.status_code === 404) {
    return (
      <div className="flex justify-center items-center w-full h-40">
        <span className="text-lg md:text-xl">Anime is not found </span>
      </div>
    )
  }

  if (!isSuccess) return <div></div>

  return (
    <div className="w-full">
      {anime.data.banner_image && (
        <div className="w-full h-80 relative">
          <Image
            src={anime.data.banner_image}
            alt={anime.data.titles?.en}
            className="w-full object-cover"
            quality="100"
            layout="fill"
          />
        </div>
      )}
      <div
        className={cn('container py-4 px-4', {
          '-mt-44 z-10 md:mt-0': anime.data.banner_image,
        })}>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <img
            src={anime.data.cover_image}
            alt={anime.data.titles?.en}
            className="aspect-10-16 object-cover self-center w-48 rounded-md z-10"
          />
          <ul className="flex flex-col px-4 space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-gray-400">title: </span>
              <h1 className="text-lg leading-none">{anime.data.titles?.en}</h1>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-400">rating: </span>
              <div className="flex">
                <Star className="w-5 text-yellow-400 mr-1" />
                {anime.data.score}/100
              </div>
            </li>
            {anime.data.descriptions.en && (
              <li className="flex items-start space-x-2">
                <span className="text-gray-400">description: </span>
                <p className="text-gray-200">{anime.data.descriptions.en}</p>
              </li>
            )}
            <li className="flex items-start space-x-2">
              <span className="text-gray-400">year: </span>
              <p className="text-gray-200">{anime.data.season_year}</p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-400">episodes: </span>
              <p className="text-gray-200">{anime.data.episodes_count}</p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-400">duration: </span>
              <p className="text-gray-200">{anime.data.episode_duration} min</p>
            </li>
            <li className="flex flex-col items-start space-y-2 pt-4">
              <h4 className="">Trailer</h4>
              <iframe
                src={anime.data.trailer_url}
                title="YouTube video player"
                className="aspect-16-10 w-full md:w-auto md:h-80"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Anime

Anime.getLayout = getLayout
