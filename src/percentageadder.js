import { forEachChild } from 'typescript'
import { portlandData, mesaData, usaData }from './sampledata.js'

const percentageAdder = (data) => {
  // const trends = data[0].trends
  const totals = data[0].trends.reduce((acc, current) => acc + current.tweet_volume, 0)
  const trendsWithBenefits = data[0].trends;
  trendsWithBenefits.forEach(
    e => e.location = data[0].locations[0].name);
  trendsWithBenefits.forEach(
    e => e.percentage = e.tweet_volume / totals);
  return trendsWithBenefits;

}

const totalPortlandTweets = percentageAdder(portlandData);
const totalMesaTweets = percentageAdder(mesaData);
const totalUsaTweets = percentageAdder(usaData);
console.log(totalPortlandTweets)

const usaStadiaPercentage = 0.005353113204683215
const mesaStadiaPercentage = 0.00345543938054644
const portlandStadiaPercentage = 0.00541385751631853

