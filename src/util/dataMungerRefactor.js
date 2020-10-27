export default function dataMunger (cityAData, usaData, cityBData){

  const percentageAdder = (data, n) => {
    const totals = data[0].trends.reduce((acc, current) => acc + current.tweet_volume, 0);
    const trendsWithBenefits = data[0].trends;
    
    trendsWithBenefits.cityAPercentage = 0;
    trendsWithBenefits.usaPercentage = 0;
    trendsWithBenefits.cityBPercentage = 0;
  
    trendsWithBenefits.forEach(
      e => {
      // const argument = Object.keys(data)[0];
      
      const volume = e.tweet_volume > 0 ? e.tweet_volume : 0;
      const percentage = e.tweet_volume > 0 ? e.tweet_volume / totals : 0;
     
     
        // if(n === 0) {
        //   trendsWithBenefits.cityAVolume = volume;
        //   trendsWithBenefits.cityAPercentage = percentage;
        // }
        // if(n === 1) {
        //   trendsWithBenefits.usaVolume = volume;
        //   trendsWithBenefits.usaPercentage = percentage;
        // }
        // if(n === 2) {
        //   trendsWithBenefits.cityBVolume = volume;
        //   trendsWithBenefits.cityBPercentage = percentage;
        // }
      // switch (true) {
      //   case (argument === cityAData): trendsWithBenefits.cityAPercentage = percentage;
      //   case (argument === usaData): trendsWithBenefits.usaPercentage = percentage;
      //   case (argument === cityBData): trendsWithBenefits.cityBPercentage = percentage;
      // }
  
      // switch (true) {
      //   case (argument === cityAData): trendsWithBenefits.cityAVolume = volume;
      //   case (argument === usaData): trendsWithBenefits.usaVolume = volume;
      //   case (argument === cityBData): trendsWithBenefits.cityBVolume = volume;
      // }
      // switch (true) {
      //   case (argument === cityAData): trendsWithBenefits.cityAPercentage = percentage;
      //   case (argument === usaData): trendsWithBenefits.usaPercentage = percentage;
      //   case (argument === cityBData): trendsWithBenefits.cityBPercentage = percentage;
      // }
  
    // trendsWithBenefits.forEach(
    //   e =>  e[location.replace(/ /g,'').toLowerCase() + 'Percentage'] = e.tweet_volume > 0 ? e.tweet_volume / totals : 0);
  
    return trendsWithBenefits;
  })};
  console.log(percentageAdder(cityAData));
  
  const totalCityATrends = percentageAdder(cityAData, 0)
  // .sort(function(a, b) {return (b.cityAPercentage - a.cityAPercentage)});
  
  const totalCityBTrends = percentageAdder(cityBData, 1)
  // .sort(function(a, b) {return (b.cityBPercentage - a.cityBPercentage)});
  
  const totalUsaTrends = percentageAdder(usaData, 2);
  console.log(totalCityATrends)
  
  const totalTrends = [...totalCityATrends, ...totalUsaTrends, ...totalCityBTrends];
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
    // if(!e.cityAPercentage) e.cityAPercentage = 0;
    // if(!e.unitedstatesPercentage) e.unitedstatesPercentage = 0;
    // if(!e.cityBPercentage) e.cityBPercentage = 0;
    e.partisanship = (e.cityBPercentage / e.cityAPercentage) * 10;
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