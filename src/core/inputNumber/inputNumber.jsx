import React from 'react';
import './inputNumber.css';

export default class InputNumber extends React.Component {
    
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.state = {
            value : !!this.props.min ? this.props.min : 0
        };
    }

    get value() {
        return this.state.value;
    }

    increment() {
        const { max } = this.props;

        if (typeof max === 'number' && this.value >= max) return;

        this.setState({ value: this.value + 1 });
    }

    decrement() {
        const { min } = this.props;

        if (typeof min === 'number' && this.value <= min) return;

        this.setState({ value: this.value - 1 });
    }

    render() {
        return (
            <div className="input-number">
                <button type="button" onClick={this.decrement}>&minus;</button>
                <span>{this.value}</span>
                <button type="button" onClick={this.increment}>&#43;</button>
            </div>
        )
    }
}