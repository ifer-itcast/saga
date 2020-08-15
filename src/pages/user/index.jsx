import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUser } from './store/actionCreators';

class User extends Component {
    render() {
        const { isFetching, error, user } = this.props.user;
        let data;
        if(error) {
            data = error;
        } else if(isFetching) {
            data = "Loading...";
        } else {
            data = user && user.data;
        }
        return (
            <div>
                <p>{data}</p>
                <button onClick={this.props.fetchUser}>获取数据</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, { fetchUser })(User);