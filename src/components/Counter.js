import React, { Component } from 'react'
import { AMOUNT_INCREMENT, AMOUNT_DECREMENT } from '../constants/constants'
import { Button, Space } from 'antd';
import {
    PlusOutlined,
    MinusOutlined,
  } from '@ant-design/icons';

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
        this.setState((prevState) => ({ value: prevState.value + AMOUNT_INCREMENT }), 
        this.props.onCalculate(AMOUNT_INCREMENT));
    }

    onDecrease() {
        this.setState((prevState) => ({ value: prevState.value - AMOUNT_INCREMENT }), 
        this.props.onCalculate(AMOUNT_DECREMENT));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.size !== this.props.size) {
            this.setState({ value: AMOUNT_INCREMENT });
        }
    }

    componentWillUnmount() {
        if (this.state.value > 0) {
            this.props.onCalculate(-this.state.value);
        }
    }

    render() {
        return (
            <div>
                <Space size={18}>
                <Button type="primary" shape="round" icon={<PlusOutlined />} size="Default" onClick={this.onIncrease} />
                <span>{this.state.value}</span>
                <Button type="primary" shape="round" icon={<MinusOutlined />} size="Default" onClick={this.onDecrease} />
                </Space>
            </div>
        )
    }
}

export default Counter