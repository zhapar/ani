export enum Format {
  TV,
  TV_SHORT,
  MOVIE,
  SPECIAL,
  OVA,
  ONA,
  MUSIC,
}

export enum Status {
  FINISHED,
  RELEASING,
  NOT_YET_RELEASEAD,
  CANCELLED,
}

export enum SeasonPeriod {
  WINTER,
  SPRING,
  SUMMER,
  FALL,
  UNKNOWN,
}

export interface Anime {
  id: number
  anilist_id: number
  mal_id: number
  format: 0 | 1 | 2 | 3 | 4 | 5 | 6
  status: Status
  titles: {
    [key: string]: string
  }
  descriptions: {
    [key: string]: string
  }
  start_date: Date
  end_date: Date
  season_period: 0 | 1 | 2 | 3 | 4
  season_year: number
  episodes_count: number
  episode_duration: number | null
  trailer_url: string | null
  cover_image: string
  cover_color: string
  banner_image: string
  genres: string[]
  score: number
}

export interface Animes {
  status_code: number
  message: string
  data: {
    current_page: number
    count: number
    documents: Anime[]
    last_page: number
  }
  version: string
}

export interface Genres {
  status_code: number
  message: string
  data: {
    genres: string[]
  }
  version: string
}
