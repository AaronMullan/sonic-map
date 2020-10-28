export default async function getTrends(WOEID: number) 
{
  let response = await fetch(`https://api.twitter.com/1.1/trends/place.json?id=${name}`);
  let data = await response.json()
  return data;
}

getTrends(4444)
  .then(data => console.log(data)); 