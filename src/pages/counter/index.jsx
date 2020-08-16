import React, { Component } from 'react'
import { connect } from "react-redux";
import { incrementAsync } from './store/actionCreators';
class Counter extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.counter}
                </p>
                {/* 这里直接执行的是一个 actionCreator，无需手动进行 dispatch 的操作 */}
                <button onClick={this.props.incrementAsync}>click</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        counter: state.counter,
    };
};

export default connect(mapStateToProps, { incrementAsync })(Counter);