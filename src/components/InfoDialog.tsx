// eslint-disable-next-line
import React from 'react';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: white;
    width: 60vw;
    position: absolute;
    top: 3vh;
    left: 20vw;
    padding: 3%;
    :focus: {
      outline: none
    }
`

export default function SimpleModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <StyledDiv>
      <h2 id="simple-modal-title">About this Visualization</h2>
      <p>Portland, Oregon is regarded as one of the most liberal cities in the USA, while  Mesa, AZ is often considered the most conservative. This visualization is made with data from the Twitter API for trends in those two cites.</p>
      <p>Each bar chart indicates the percentage of the trending tweets for a city for a specific trend. Subjects exclusive to Portland are on the left, and subjects exclusive to Mesa are on the right. In the center, they converge.  Where applicable, national trends are included as a benchmark.</p>
      </StyledDiv>
    // </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        // className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleOpen}
      >
        <InfoOutlinedIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}