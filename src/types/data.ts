export type APIResponse = {
  name: string,
  url: string,
  query: string,
  tweet_volume: any,
  promoted_content?: any,
}

export type APIObject = {
  name: string,
  url: string,
  promoted_content?: any,
  query: string,
  tweet_volume: any,
  cityATweetVolume: number,
  cityAPercentage: number,
  cityBTweetVolume: number,
  cityBPercentage: number,
  USATweetVolume: number,
  USAPercentage: number,
  partisanship: number,
  location: string
}

export type APIData = [{
  trends: APIObject[]
  as_of: string,
  created_at: string,
  locations: [
    {
      name: string,
      woeid: number
    }]
  }
]

export type RawAPIData = [{
  trends: APIResponse[]
  as_of: string,
  created_at: string,
  locations: [
    {
      name: string,
      woeid: number
    }]
  }
]