import React from 'react';
import ReactDOM from 'react-dom';

function User() {
  return (
      <h1>hello user!</h1>
  )
}
function Guest() {
  return (
      <h1>hello guest!</h1>
  )
}
function Greeting(props) {
  if(props.type){
    return <User/>
  }else{
    return <Guest/>
  }
}

function LoginButton(props) {
  return (
      <button onClick={props.onClick}>
        Login
      </button>
  )
}

function LogoutButton(props) {
  return (
      <button onClick={props.onClick}>
        Logout
      </button>
  )
}

class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      isLogin:false,
      handleClick:this.handleClick.bind(this)
    }
  }
  
  handleClick(){
    this.setState( prevState => ({isLogin:!prevState.isLogin}))
  }
  
  render(){
    const isLogin = this.state.isLogin;
    let button = null;
    if(!isLogin){
      button= <LoginButton onClick={this.state.handleClick}/>
    }else{
      button= <LogoutButton onClick={this.state.handleClick}/>
    }
    return(
        <div>
          <Greeting type={this.state.isLogin}/>
          {button}
        </div>
    )
  }
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
);