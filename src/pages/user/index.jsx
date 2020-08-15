import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUser } from './store/actionCreators';

class User extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.fetchUser}>获取数据</button>
            </div>
        )
    }
}

export default connect(null, { fetchUser })(User);