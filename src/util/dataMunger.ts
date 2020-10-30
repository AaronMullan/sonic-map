import { APIData, APIObject, RawAPIData } from '../types/data'

export default function dataMunger(cityAData: RawAPIData, usaData: RawAPIData, cityBData: RawAPIData) {

  const percentageAdder = (data: RawAPIData, index: number): APIObject => {
    const trends = data[0].trends;
    const location = data[0].locations[0].name.replace(/ /g, '').toLowerCase();
    const totals = trends.reduce((acc, current) => acc + current.tweet_volume, 0);
    const trendsWithBenefits: APIObject[] = []
    
    trends.forEach(e => trendsWithBenefits.push(e as unknown as APIObject))
   
    trendsWithBenefits.forEach(e => e.location = location)
    switch (true) {
      case index === 0:
        trendsWithBenefits.forEach(
          e => e.cityATweetVolume = e.tweet_volume > 0 ? e.tweet_volume : 0);
        trendsWithBenefits.forEach(
          e => e.cityAPercentage = e.tweet_volume > 0 ? e.tweet_volume / totals : 0);
        break;
      case index === 1:
        trendsWithBenefits.forEach(
          e => e.USATweetVolume = e.tweet_volume > 0 ? e.tweet_volume : 0);
        trendsWithBenefits.forEach(
          e => e.USAPercentage = e.tweet_volume > 0 ? e.tweet_volume / totals : 0);
        break;
      case index === 2:
        trendsWithBenefits.forEach(
          e => e.cityBTweetVolume = e.tweet_volume > 0 ? e.tweet_volume : 0);
        trendsWithBenefits.forEach(
          e => e.cityBPercentage = e.tweet_volume > 0 ? e.tweet_volume / totals : 0);
        break;
    }

    return trendsWithBenefits;
  }

  const totalCityATrends = percentageAdder(cityAData, 0)
    .sort((a, b) => b.cityAPercentage - a.cityAPercentage);
    
  const totalUsaTrends = percentageAdder(usaData, 1);
  const totalCityBTrends = percentageAdder(cityBData, 2)
  // .sort(function (a, b) { return (b.cityBPercentage - a.cityBPercentage) });


  const totalTrends = [...totalCityATrends, ...totalUsaTrends, ...totalCityBTrends];
  const trendSet = new Set((totalTrends.filter(e => e.tweet_volume !== null)).map(e => e.name));

  const trendsLocationAdder = (d: Set<string>) => {
    let output: APIObject[][] = []
    d.forEach(p =>
      output.push(totalTrends.filter(e => e.name === p))
    )
    return output;
  };

  const trendyLocations = (trendsLocationAdder(trendSet))
    .filter((e) => e[0]);

  const flatLocations: APIObject[] = trendyLocations.map((e) =>
    Object.assign(e[0], e[1], e[2]));

  flatLocations.forEach(e => {
    if (!e.cityAPercentage) e.cityAPercentage = 0;
    if (!e.USAPercentage) e.USAPercentage = 0;
    if (!e.cityBPercentage) e.cityBPercentage = 0;
    e.partisanship = (e.cityBPercentage / e.cityAPercentage) * 10;
  });

  const completeLocations: APIObject[] = flatLocations
  // .sort(function (a, b) { return (a.partisanship - b.partisanship) });

  const extremeFinder = (arr: APIObject[]) => {
    let output: APIObject[] = [];
    for (let i = 0; i < (arr.length / 2); i++)
      output.push(arr[i], arr[arr.length - (i + 1)])
    return output;
  };

  const extremeLocations = extremeFinder(completeLocations);

  return extremeLocations;
};