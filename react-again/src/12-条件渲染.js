import React from 'react';
import ReactDOM from 'react-dom';

/*
* 条件渲染
* */

function UserGreet() {
  return <h1>hello user!!!</h1>
}

function GuestGreet() {
  return <h1>hello guest!!!</h1>
}

function Greet(props) {
  if(props.isLogin){
    return <UserGreet/>;
  }
  return <GuestGreet/>;
}

class LoginControl extends React.Component {
  constructor() {
    super()
    this.state= {isLogin: false}
  };
  
  handleClick= () => {
    this.setState( (preState) => ({isLogin:!preState.isLogin}) )
  };
  
  render(){
    return (
        <div>
          <Greet isLogin={this.state.isLogin}/>
          <button onClick={this.handleClick}>{this.state.isLogin?'logout':'login'}</button>
        </div>
    )
  }
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
)