import React, { Component } from 'react'
import Counter from './Counter'
import { INIT_COUNTER_NUM } from '../constants/constants'

export default class CounterGroup extends Component {
    constructor(props) {
        super(props);

        this.initArray = this.initArray.bind(this);
        this.numChange = this.numChange.bind(this);

        this.state = {
            size: INIT_COUNTER_NUM,
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

    render() {
        let counters = this.initArray(this.state.size);
        return (
            <div>
                <form>
                    <label>Number of Counter:  </label>
                    <input type="text" onChange={this.numChange} value={this.state.size} />
                </form>
                {counters.map((value) => (<Counter key={value} />))} 
            </div>
        )
    }
}
