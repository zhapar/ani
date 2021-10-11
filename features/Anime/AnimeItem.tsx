import Link from 'next/link'
import Image from 'next/image'
import Star from 'icons/Star'

function AnimeItem({ id, cover_image, titles, score, season_year }) {
  return (
    <Link href={`/anime/${id}`}>
      <a className="flex flex-col w-36 cursor-pointer hover:transform hover:scale-105 hover:z-10 transition duration-200">
        <div className="w-36 aspect-10-16 relative overflow-hidden rounded-md">
          <Image
            src={cover_image}
            alt={titles.en}
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="flex justify-between my-1 items-center">
          <span className="text-sm text-gray-400 flex items-center">
            <Star className="w-4 text-yellow-400 mr-1" />
            {score}/100
          </span>
          <span className="text-sm text-gray-400">{season_year}</span>
        </div>
        <h3 className="text-[14px] font-normal leading-none text-gray-dark">
          {titles.en}
        </h3>
      </a>
    </Link>
  )
}

export default AnimeItem
