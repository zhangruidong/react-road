import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from './redux.auth'

@connect(
    state => state.auth,
    {login}
)

class Auth extends React.Component {
  render() {
    return (
        <div>
          {this.props.isAuth? <Redirect to={'./dashboard'}/> : null}
          <p>登录获取访问权限</p>
          <button onClick={this.props.login}>login</button>
        </div>
    )
  }
}

export default Auth