import React, { Component } from 'react'
import { COUNTER_INIT_VALUE, COUNTER_INIT_MINUS_VALUE } from '../constants/constants'

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);

        this.state = {
            value: 0,
        };
    }

    onIncrease() {
        this.setState((prevState) => ({ value: prevState.value + COUNTER_INIT_VALUE }));
    }

    onDecrease() {
        this.setState((prevState) => ({ value: prevState.value - COUNTER_INIT_VALUE }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.number !== this.props.number) {
            this.setState({ value: COUNTER_INIT_VALUE });
        }
        if (this.state.value > prevState.value) {
            this.props.onCalculate(COUNTER_INIT_VALUE);
        } else if (this.state.value < prevState.value) {
            this.props.onCalculate(COUNTER_INIT_MINUS_VALUE);
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.onIncrease}>+</button>
                <span>{this.state.value}</span>
                <button onClick={this.onDecrease}>-</button>
            </div>
        )
    }
}

export default Counter