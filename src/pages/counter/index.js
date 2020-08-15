import React, { Component } from 'react'
import { connect } from "react-redux";
import { increment, incrementAsync } from './store/actionCreators';
class Counter extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.counter}
                </p>
                <button onClick={this.props.increment}>add</button>
                {/* 这里派发的 action 能被 saga 监听到，然后做对应的处理 */}
                <button onClick={this.props.incrementAsync}>add async</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        counter: state.counter,
    };
};

export default connect(mapStateToProps, { increment, incrementAsync })(Counter);