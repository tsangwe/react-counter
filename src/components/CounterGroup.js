import React, { Component } from 'react'
import Counter from './Counter'
import CounterApi from '../apis/CounterApi'
import { INIT_COUNTER_NUM } from '../constants/constants'
import { Card, Input, Empty } from 'antd';

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
        CounterApi.putCounterSize({ size: value.length > 0 ? parseInt(value) : 0 }).then((response) => {
            const newSize = response.data.size;
            this.setState({ size: newSize });
        });
    }

    onCalculate(changeAmount) {
        this.setState((prevState) => ({ sum: prevState.sum + changeAmount }));
    }

    componentDidMount() {
        CounterApi.getCounterSize().then((response) => {
            const newSize = response.data.size;
            this.setState({ size: newSize });
        });
    }

    render() {
        let counters = this.initArray(this.state.size);
        return (
            <div>
                <Card style={{ width: 300 }}>
                <form>
                    <label>Number of Counter:  </label>
                    <Input type="text" onChange={this.numChange} value={this.state.size} />
                </form>
                <br />
                <span>So of all counters value: {this.state.sum}</span>
                </Card>
                <br />
                { this.state.size  == 0 ? <Empty description={ <span>No counter</span> } /> : null }
                {counters.map((value) => (<Counter key={value} onCalculate={this.onCalculate} />))}
            </div>
        )
    }
}
