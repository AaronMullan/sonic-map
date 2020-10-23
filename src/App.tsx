import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import TwitterBar from './TwitterBar';
import './App.css';

function App() {
  return (
    <div className="App">
  <div className={"container"}>
    <ParentSize>{({ width, height }) => 
      <TwitterBar width={width} height={height}/>}
    </ParentSize>
  </div>
 </div>
  );
}

export default App;
