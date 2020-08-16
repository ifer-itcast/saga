import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUser } from './store/actionCreators';

class User extends Component {
    render() {
        const { isFetching, error, user } = this.props.user;
        let data = null;
        if(error) {
            data = error;
        } else if(isFetching) {
            data = "Loading...";
        } else {
            data = user && <ul>{
                user.jokes.map((item,index) => <li key={index}>{item}</li>)
            }</ul>;
        }
        return (
            <div>
                <div>{data}</div>
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