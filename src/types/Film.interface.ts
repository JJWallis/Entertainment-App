export interface FilmData {
   title: string
   thumbnail: {
      trending?: Thumbnail
      regular: Regular
   }
   year: number
   category: string
   rating: string
   isBookmarked: boolean
   isTrending: boolean
}

interface Thumbnail {
   small: string
   medium?: string
}

interface Regular {
   small: string
   medium: string
   large: string
}
