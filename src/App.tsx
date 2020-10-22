import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
// import Example from './Example'
import Map from './Map'
import './App.css';
import BarGraph from './Bargraph';
import MyBarGroup from './MyBarGroup'
import ButtonAppBar from './ButtonAppBar';
import ResponsiveDrawer from './Drawer';

function App() {
  return (
    <div className="App">
    //   <div className={"container"}>
    {/* //   <ParentSize>{({ width, height }) => <MyBarGroup width={width} height={height} />}</ParentSize> */}
{/* <ButtonAppBar />
<ResponsiveDrawer /> */}
      {/* <div className={"container"}>
      <ParentSize>{({ width, height }) => 
  <Map width={width} height={height} />}
  </ParentSize>,
  </div> */}
  <BarGraph />
   </div>
    </div>
  );
}

export default App;
