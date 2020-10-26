// eslint-disable-next-line
import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import TwitterBar from './components/TwitterBar';
import './App.css';
import MyCoolAppBar from './components/MyCoolAppBar';

function App() {
  return (
    <div className="App">
  <div className={"container"}>
    <MyCoolAppBar />
    <ParentSize>{({ width, height }) => 
      <TwitterBar width={width} height={height}/>}
    </ParentSize>
  </div>
 </div>
  );
}

export default App;
