import React from 'react';
import './planner.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PlanRow from './planRow/planRow';


export default class Planner extends React.Component {

    planRows = [];

    constructor(props) {
        super(props);
        this.handleAddRowClicked = this.handleAddRowClicked.bind(this);
        this.planRows.push(<PlanRow key={Math.random()}></PlanRow>);
    }
    
    handleAddRowClicked(e) {
        this.planRows.push(<PlanRow key={Math.random()}></PlanRow>);
        this.setState({});
    }

    render() {
        return (
            <div className="plannerWrapper">
                <div>
                    { this.planRows }
                </div>
                <Fab color="primary" aria-label="add" >
                    <AddIcon onClick={this.handleAddRowClicked}/>
                </Fab>
            </div>
        )
    }
}