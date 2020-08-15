import React, { Component } from 'react'
import { connect } from "react-redux";
import { increment } from './store/actionCreators';
class Counter extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.counter}
                </p>
                <button onClick={this.props.increment}>click</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        counter: state.counter,
    };
};

export default connect(mapStateToProps, { increment })(Counter);