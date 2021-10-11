import React, { useRef, useState, Fragment } from 'react'
import useAnimes from './useAnimes'
import AnimeItem from './AnimeItem'
import useIntersectionObserver from 'libs/useIntersecctionObserver'
import useInput from 'libs/useInput'
import useDebounce from 'libs/useDebounce'
import Input from 'components/Input'
import Options from 'components/Options'
import useGenres from './useGenres'
import cn from 'classnames'
import SelectOption from 'components/SelectOption'
import Times from 'icons/Times'
import Sliders from 'icons/Sliders'
import Loader from 'components/Loader'
import SelectMany from 'components/SelectMany'
import { initialFormats, statuses, seasons } from './data'

function AnimeList() {
  // Search
  const { value: searchValue, bind: bindSearch } = useInput('')
  const debouncedTitle = useDebounce(searchValue, 200)

  // Year
  const { value: yearValue, bind: bindYear } = useInput('')
  const debouncedYear = useDebounce(yearValue, 200)

  // Formats
  const [formats, setFormats] = useState<
    {
      title: string
      id: string | number
      selected: boolean
    }[]
  >(initialFormats)

  // Status
  const [status, setStatus] = useState(undefined)

  // Season
  const [season, setSeason] = useState(undefined)

  // fetching Genres
  const { data: genres } = useGenres()
  const [selectedGenres, setGenres] = useState([])

  // fetching Animes
  const { data, isSuccess, fetchNextPage, hasNextPage } = useAnimes({
    page: 1,
    title: debouncedTitle,
    formats: formats
      .filter(({ selected }) => selected === true)
      .map(({ id }) => id)
      .join(','),
    status,
    season,
    year: debouncedYear,
    genres: selectedGenres.join(','),
  })

  // Filter modal
  const [open, setOpen] = useState(false)

  // create genres options
  const optionGenres =
    genres &&
    genres.data.genres.map((genre) => ({
      value: genre,
      label: genre,
    }))

  // Load more
  const loader = useRef()
  useIntersectionObserver({
    target: loader,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <div className="flex flex-col md:flex-row">
      <div
        onClick={() => setOpen(true)}
        className="flex justify-center items-center rounded-md py-2 px-5 text-lg bg-gray-900 w-fit self-end mt-5 mr-8 md:hidden">
        <Sliders className="w-5 mr-3" />
        Filter
      </div>
      <div className="grid grid-cols-4 gap-1">
        <div
          className={cn(
            open ? 'fixed' : 'hidden ',
            'md:max-h-[calc(100vh-5rem)] w-full md:block md:sticky h-screen md:col-span-1 left-0 top-0 md:top-20 md:bottom-0 py-5 px-4 z-50 md:z-0 bg-gray-800'
          )}>
          <h3 className="md:hidden my-5">Filter</h3>
          <div
            className="absolute top-11 right-5 md:hidden"
            onClick={() => setOpen(false)}>
            <Times />
          </div>
          <Input {...bindSearch} id="search" hasReset={true} label="Search" />
          <Input
            {...bindYear}
            id="season_year"
            hasReset={true}
            label="Season Year"
            type="number"
            className="mt-4"
          />
          <div className="flex flex-col mt-4">
            <span className="mb-1">Genres</span>
            <SelectMany
              options={optionGenres}
              placeholder="Genres"
              onSelect={(value: { value: string; label: string }[]) => {
                setGenres([...value.map((option) => option.value)])
                window.scrollTo(0, 0)
              }}
            />
          </div>
          <Options
            className="mt-4"
            title="Formats"
            options={formats}
            setOptions={setFormats}
          />
          <div className="flex flex-col mt-4">
            <span>Season</span>
            <div className="grid grid-cols-3 gap-1 mt-2">
              {Object.entries(seasons).map(([key, value], id) => (
                <SelectOption
                  key={id}
                  selected={value === season}
                  onSelect={() => setSeason(value)}
                  label={key}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-4 md:col-span-3 py-5">
          <div className="flex pl-8 py-4 gap-2 mb-4 sticky top-20 z-20 bg-gray-800 w-full bg-opacity-75  backdrop-filter backdrop-blur-lg overflow-x-auto">
            {Object.entries(statuses).map(([key, value], id) => (
              <SelectOption
                key={id}
                selected={value === status}
                onSelect={() => {
                  setStatus(value)
                  window.scrollTo(0, 0)
                }}
                label={key}
                size="large"
              />
            ))}
          </div>

          <div className="flex justify-center flex-wrap gap-5">
            {isSuccess &&
              data.pages.map((animes, id) => (
                <Fragment key={id}>
                  {animes.status_code !== 404 &&
                    animes.data.documents.map(({ id, ...props }) => (
                      <AnimeItem key={id} id={id} {...props} />
                    ))}
                </Fragment>
              ))}
            <div className="flex justify-center w-full" ref={loader}>
              <Loader />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeList
