import React from 'react';
import './planRow.css';
import Slider from '@material-ui/core/Slider';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import InputNumber from '../../core/inputNumber/inputNumber';


export default class PlanRow extends React.Component {

    bpmValue = 40;

    constructor(props) {
        super(props);
        this.valuetext = this.valuetext.bind(this);
        this.handleBpmSliderVauleChange = this.handleBpmSliderVauleChange.bind(this);
    }

    valuetext(value) {
        this.bpmValue = value;
        return `${value} Bpm`;
    }

    handleBpmSliderVauleChange(e) {
        this.setState({});
    }

    render() {
        return (
            <div className="plannerRow">
                <div className="plInputWrapper">
                <Slider
                    defaultValue={40}
                    getAriaValueText={this.valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={40}
                    max={220}
                    onChangeCommitted={this.handleBpmSliderVauleChange}
                />
                </div>
                <div className="plSubRowWarpper">
                    <div className="subRowItem bpmLabel">
                        { `${this.bpmValue} Bpm` }
                    </div>

                    <div className="subRowItem timePicker"> 
                        <InputNumber min={0} max={10} />
                    </div>

                    <div className="subRowItem delPlanBtn">
                        <span>
                            <DeleteOutlineIcon></DeleteOutlineIcon>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}