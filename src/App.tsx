// eslint-disable-next-line
import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import TwitterBar from './components/TwitterBar';
import './App.css';
import MyCoolAppBar from './components/MyCoolAppBar';
import styled from 'styled-components';

const StyledParentSize = styled(ParentSize)`
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
margin-top: 1vh;
border-radius: 1em;
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
