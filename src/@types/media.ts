export type MediaType = {
  id: string
  name: string
  link?: string
  imgLink?: string
  hasTotalEpisodes: boolean
  episodesTotalCount?: number
  currentEpisode: number
  isWatching?: boolean
  isComplete?: boolean
}
