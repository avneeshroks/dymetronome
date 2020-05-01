import React from 'react';
import './planner.css'
import { Link } from 'react-router-dom';

export default class Planner extends React.Component {
    render() {
        return (
            <div className="plannerWrapper">
                <div className="plannerRow">
                    <div className="plInputWrapper">
                        <input className="plInput" type="text" placeholder="Bpm" />
                    </div>
                    <div className="plInputWrapper">
                        <input className="plInput" type="number" placeholder="Mins" />
                    </div>
                    <div className="plInputWrapper delPlan">
                        <button className="delPlanBtn">
                            X
                        </button>
                    </div>
                </div>
                <div className="plannerRow">
                    <div className="plInputWrapper">
                        <input className="plInput" type="text" placeholder="Bpm" />
                    </div>
                    <div className="plInputWrapper">
                        <input className="plInput" type="number" placeholder="Mins" />
                    </div>
                    <div className="plInputWrapper delPlan">
                        <button className="delPlanBtn">
                            X
                        </button>
                    </div>
                </div>
                <div className="plannerRow">
                    <div className="plInputWrapper">
                        <input className="plInput" type="text" placeholder="Bpm" />
                    </div>
                    <div className="plInputWrapper">
                        <input className="plInput" type="number" placeholder="Mins" />
                    </div>
                    <div className="plInputWrapper delPlan">
                        <button className="delPlanBtn">
                            X
                        </button>
                    </div>
                </div>
                <div className="plannerRow">
                    <div className="plInputWrapper">
                        <input className="plInput" type="text" placeholder="Bpm" />
                    </div>
                    <div className="plInputWrapper">
                        <input className="plInput" type="number" placeholder="Mins" />
                    </div>
                    <div className="plInputWrapper delPlan">
                        <button className="delPlanBtn">
                            X
                        </button>
                    </div>
                </div>

                <div className="plannerRow">
                    <div>
                        Add New
                    </div>
                </div>

                <div className="plannerRow">
                    <div>
                        <Link to="/play">Play...</Link>
                    </div>
                </div>
            </div>
        )
    }
}