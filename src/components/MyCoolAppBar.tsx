import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
// import IconButton from '@material-ui/core/IconButton';
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import InfoDialog from './InfoDialog';

const StyledButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#8AAAC3",
      color: "#F2EBE3"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);




export default function MyCoolAppBar() {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const handleClick = () => {
    console.log('clicked')
    setDialogOpen(true);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <InfoDialog />
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            >
            <InfoOutlinedIcon />
          </IconButton> */}
          
          <Typography variant="h6" className={classes.title}>
            Portland, OR / Mesa, AZ Twitter Trend Comparison
          </Typography>
          <Button color="inherit">Push Me!</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}