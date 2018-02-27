import React from 'react';
import ReactDOM from 'react-dom';

/*
* 向时间处理程序传递参数
*   通过箭头函数的方式，事件对象必须显式的进行传递
*   通过bind的方式，事件对象及更多的参数将会被隐式的进行传递
*   **** 通过bind方式监听函数传参，在类组件中定义的监听函数，事件对象e要排在所传递参数的后面
* */


class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {onOff: true}
  }
  
  /*handleClick(){
    this.setState( (preState)=>{
      return {onOff:!preState.onOff}
    })
  }*/
  
  handleClick=(name,e)=> {
    console.log(name);
    console.log(e.target);
    this.setState( preState => ({onOff:!preState.onOff}) )
  }
  
  render(){
    return (
        <button onClick={this.handleClick.bind(this,'zrd')}>{this.state.onOff?'on':'off'}</button>
    )
  }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)