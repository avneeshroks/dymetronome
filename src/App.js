import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ScheduleIcon from '@material-ui/icons/Schedule';
import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Planner from './planner/planner';
import Metronome from './metronome/metronome';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
  }
 
  return (
    <div className="App">
      {
        value === 0 
        ? <Planner ></Planner>
        : <Metronome ></Metronome>
      }
      <BottomNavigation
        value={value}
        onChange={handleNavigationChange.bind(this)}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Plan" icon={<ScheduleIcon />} />
        <BottomNavigationAction label="Play" icon={<PlayCircleOutlineIcon />} />
      </BottomNavigation>
    </div>
  );
}



export default App;
