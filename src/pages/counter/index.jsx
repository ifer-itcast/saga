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