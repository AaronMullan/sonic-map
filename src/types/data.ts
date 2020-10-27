export interface APIObject {
  name: string,
  url: string,
  promoted_content: any,
  query: string,
  tweet_volume: number,
  portlandTweetVolume?: number,
  portlandPercentage: number,
  mesaTweetVolume?: number,
  mesaPercentage?: number,
  unitedstatesTweetVolume?: number,
  unitedstatesPercentage?: number,
  partisanship?: number
}

export type APIData = [
  {
    trends: APIObject[]
    as_of: string,
    created_at: string,
    locations: [
      {
        name: string,
        woeid: number
      }
    ]
  }
]