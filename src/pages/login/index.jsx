import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from './store'

class Login extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    login = () => {
        let username = this.usernameRef.current.value;
        let password = this.passwordRef.current.value;
        this.props.login(username, password);
    }
    render() {
        let loginForm = (<>
            <label>用户名</label><input ref={this.usernameRef}/>
            <label>密码</label><input ref={this.passwordRef}/>
            <button onClick={this.login}>登录</button>
            <button onClick={this.props.logout}>退出</button>
        </>);
        let logoutForm = (<>
            <label>用户名</label>{this.props.token}
            <button onClick={this.props.logout}>退出</button>
        </>);
        return (
            <div>
                {
                    this.props.token
                    ?
                    logoutForm
                    :
                    loginForm
                }
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         loginData: state.login
//     }
// };
export default connect(state => state.login, loginActionCreators)(Login);