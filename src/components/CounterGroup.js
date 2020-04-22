import React, { Component } from 'react'
import Counter from './Counter'
import { INIT_COUNTER_NUM } from '../constants/constants'

export default class CounterGroup extends Component {
    constructor(props) {
        super(props);

        this.initArray = this.initArray.bind(this);
        this.numChange = this.numChange.bind(this);
        this.onCalculate = this.onCalculate.bind(this);

        this.state = {
            size: INIT_COUNTER_NUM,
            sum: 0,
        }
    }

    initArray(size) {
        const array = Array.from(Array(size));
        return array;
    }

    numChange(event) {
        const value = event.target.value;
        this.setState({
            size: value.length > 0 ? parseInt(value) : 0,
        })
    }

    onCalculate(changeAmount) {
        this.setState((prevState) => ({sum: prevState.sum + changeAmount}));
    }

    render() {
        let counters = this.initArray(this.state.size);
        return (
            <div>
                <form>
                    <label>Number of Counter:  </label>
                    <input type="text" onChange={this.numChange} value={this.state.size} />
                </form>
                <span>So of all counters value: {this.state.sum}</span>
                {counters.map((value) => (<Counter key={value} onCalculate={this.onCalculate} />))}
            </div>
        )
    }
}
