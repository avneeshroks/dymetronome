import React from "react";
import { ScheduledMetronome } from "../utils/scheduledMetronome";

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

        const currentTempo = this.metronome && !!this.metronome.playing && this.currentTempo ? this.currentTempo : null;

        return (
            <div>
                <div>
                    <button
                        onClick={this.handleMetronomeStartClick}
                    >
                        Start
                    </button>
                    <button
                        onClick={this.handleMetronomeStopClick}
                    >
                        Stop
                    </button>
                </div>
                <div>
                    {
                        currentTempo
                        && <div>
                            {`Currently playing @ : ${this.currentTempo} Bpm...`}
                        </div>
                    }
                </div>
            </div>
        )
    }
}