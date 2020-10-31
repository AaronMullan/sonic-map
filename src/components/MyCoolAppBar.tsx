// eslint-disable-next-line
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import InfoDialog from './InfoDialog';

const StyledButton = styled(Button)`
  background-color: #8AAAC3;
  color: #F2EBE3;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  text-decoration: none;
  float: right;
  // &:hover {
  //   background-color: #5469d4;
  // }
`;
const Title = styled.h3`
  color: #F2EBE3;
  text-shadow: 0 1px 0 rgba(0, 0, 0, .3);
  flex-grow: 1;
`;
const StyledAppBar = styled(AppBar)`
  background-color: #8AAAC3;
  color: #F2EBE3;
`;

export default function MyCoolAppBar() {

  return (
    <div className={"root"}>
      <StylesProvider injectFirst>
      <StyledAppBar position="static">
        <Toolbar>
          <InfoDialog />
          <Title>Portland, OR / Mesa, AZ Twitter Trend Comparison</Title>
          <StyledButton 
          as="a" href="https://github.com/AaronMullan/twitter-viz"
          >SOURCE</StyledButton>
        </Toolbar>
      </StyledAppBar>
    </StylesProvider>
    </div>
  );
}