import { portlandData, mesaData, usaData }from './sampledata';
export default function dataMunger (portlandData, usaData, mesaData){

const percentageAdder = (data) => {
  const totals = data[0].trends.reduce((acc, current) => acc + current.tweet_volume, 0);
  const trendsWithBenefits = data[0].trends;
  const location = data[0].locations[0].name;
  trendsWithBenefits.forEach(
    e => e[location.replace(/ /g,'').toLowerCase() + 'TweetVolume'] = e.tweet_volume > 0 ? e.tweet_volume : 0);

  trendsWithBenefits.forEach(
    e =>  e[location.replace(/ /g,'').toLowerCase() + 'Percentage'] = e.tweet_volume > 0 ? e.tweet_volume / totals : 0);

  return trendsWithBenefits;
}

const totalPortlandTrends = percentageAdder(portlandData).sort(function(a, b) {return (b.portlandPercentage - a.portlandPercentage)});
const totalMesaTrends = percentageAdder(mesaData).sort(function(a, b) {return (b.mesaPercentage - a.mesaPercentage)});
const totalUsaTrends = percentageAdder(usaData);
// console.log(totalPortlandTrends)

const totalTrends = [...totalPortlandTrends, ...totalUsaTrends, ...totalMesaTrends];
const trendSet = new Set((totalTrends.filter(e => e.tweet_volume !== null)).map(e => e.name));

const trendsLocationAdder = (d) => {
  let output =[]
    d.forEach(p => 
      output.push(totalTrends.filter(e => e.name === p))
      )
    return output;
};

const trendyLocations = (trendsLocationAdder(trendSet)).filter(e => e[0]);

const flatLocations = trendyLocations.map(e => 
  Object.assign(e[0], e[1], e[2]));

flatLocations.forEach(e =>{
  if(!e.portlandPercentage) e.portlandPercentage = 0;
  if(!e.unitedstatesPercentage) e.unitedstatesPercentage = 0;
  if(!e.mesaPercentage) e.mesaPercentage = 0;
  e.partisanship = (e.mesaPercentage / e.portlandPercentage) *10;
});

const completeLocations = flatLocations.sort(function(a, b) {return (a.partisanship - b.partisanship)});

const extremeFinder = (arr) => {
  let output = [];
  for(let i = 0; i < (arr.length/2); i++)
    output.push(arr[i], arr[arr.length - (i+1)])
    return output;
};

const extremeLocations = extremeFinder(completeLocations);

return extremeLocations;
};