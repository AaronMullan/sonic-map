// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import TwitterBar from './components/TwitterBar';
import { portlandData, mesaData, usaData } from './util/sampledata'
import { RawAPIData } from './types/data'
import './App.css';
import MyCoolAppBar from './components/MyCoolAppBar';
import styled from 'styled-components';

const StyledParentSize = styled(ParentSize)`
box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
margin-top: 1vh;
`

function App() {

  const [livePortlandData, setLivePortlandData] = useState<RawAPIData>(portlandData);
  const [liveUSAData, setLiveUSAData] = useState<RawAPIData>(usaData);
  const [liveMesaData, setLiveMesaData] = useState<RawAPIData>(mesaData);

  useEffect(() => {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", process.env.REACT_APP_TOKEN as string);

    const requestOptions: object = {
      method: 'GET',
      mode: 'cors',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/trends/place.json?id=2475687", requestOptions)
    .then(response => response.json())
    .then(result => setLivePortlandData(result))
    .catch(error => console.log('error', error));

    fetch("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/trends/place.json?id=23424977", requestOptions)
    .then(response => response.json())
    // .then(results => console.log(results))
    .then(result => setLiveUSAData(result))
    .catch(error => console.log('error', error));

    fetch("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/trends/place.json?id=2449808", requestOptions)
    .then(response => response.json())
    .then(result => setLiveMesaData(result))
    .catch(error => console.log('error', error));
  }, [])

  return (
    <div className="App">
  <div className={"container"}>
    <MyCoolAppBar />
    <StyledParentSize>{({ width, height }) => 
      <TwitterBar width={width} height={height} cityAData={livePortlandData} USAData={liveUSAData} cityBData={liveMesaData}/>}
    </StyledParentSize>
  </div>
 </div>
  );
}

export default App;
