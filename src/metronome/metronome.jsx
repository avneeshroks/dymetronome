import React from 'react';
import { ScheduledMetronome } from '../utils/scheduledMetronome';
import './metronome.css';

export class Metronome extends React.Component {

    metronome;
    currentTempo = null;

    constructor(props) {
        super(props);
        this.plan = this.formatPlan(props.plan);
        this.handleMetronomeStartClick = this.handleMetronomeStartClick.bind(this);
        this.handleMetronomeStopClick = this.handleMetronomeStopClick.bind(this);
        this.handleTick = this.handleTick.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }

    formatPlan(plan) {
        plan.map(item => {
            item["ticks"] = item.tempo * item.duration;
            return item;
        });
        return plan;
    }

    handleMetronomeStartClick(e){
        this.metronome = new ScheduledMetronome(this.plan);
        this.metronome.start(this.handleTick);
        this.setState({});
    }
    
    handleMetronomeStopClick(e){
        this.metronome.stopM(this.handleStop);
        this.metronome = null;
        this.setState({});
    }

    handleTick(time, currentTempo) {
        console.log(`tick @ ${time}`);
        this.currentTempo = currentTempo;
        this.setState({});
    }
    
    handleStop(time) {
        console.log(`Metronome Stopped`);
    }

    render() {
        const playing = this.metronome && !!this.metronome.playing;
        const currentTempo = playing && this.currentTempo ? this.currentTempo : null;

        return (
            <div className="mWrapper">
                <div className="btnWrapper">
                    {
                        !playing
                        ? <button
                            className="startBtn"
                            onClick={this.handleMetronomeStartClick}
                        >
                            <span className="btnText">
                                Start
                            </span>
                        </button>
                        :<button
                            className="endBtn"
                            onClick={this.handleMetronomeStopClick}
                        >
                            <span className="btnText">
                                Stop
                            </span>
                        </button>
                    }
                </div>
                <div className="playingMsg">
                    {
                        currentTempo
                        ? <div>
                            {`Currently playing @ : ${this.currentTempo} Bpm...`}
                        </div>
                        : <div>
                            {`It'll play as per plan selected`}
                        </div>
                    }
                </div>
            </div>
        )
    }
}