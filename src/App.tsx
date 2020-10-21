import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
// import Example from './Example'
import Map from './Map'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className={"container"}>
      <ParentSize>{({ width, height }) => 
  <Map width={width} height={height} />}
  </ParentSize>,
  </div>
    </div>
  );
}

export default App;
