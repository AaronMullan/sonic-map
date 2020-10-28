// eslint-disable-next-line
import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import TwitterBar from './components/TwitterBar';
import './App.css';
import MyCoolAppBar from './components/MyCoolAppBar';
import styled from 'styled-components';

const StyledParentSize = styled(ParentSize)`
box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
margin-top: 1vh;
`

function App() {
  return (
    <div className="App">
  <div className={"container"}>
    <MyCoolAppBar />
    <StyledParentSize>{({ width, height }) => 
      <TwitterBar width={width} height={height}/>}
    </StyledParentSize>
  </div>
 </div>
  );
}

export default App;
