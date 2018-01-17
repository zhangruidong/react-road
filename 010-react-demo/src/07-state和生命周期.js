import React from 'react';
import ReactDOM from 'react-dom';

/*function Clock(props) {
  return (
      <h1>It is {props.date.toLocaleTimeString()}!</h1>
  )
}*/

/*
* Clock 现在被定义为一个类而不是一个函数
* 使用类就允许我们使用其他特性，例如局部状态、生命周期钩子
* */

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state={date:new Date()}
  }
  
  componentDidMount(){   // 组件输出到DOM
    this.timerId= setInterval(() => this.tick(),1000)
  }
  
  componentWillUnmount() {  //  组件将要被卸载
    clearInterval(this.timerId)
  }
  
  tick() {
    // this.setState({date:new Date()})
    this.setState( (prevState, props) => {
      // console.log(prevState);
      console.log(props);
      return {date: new Date()}
    })
  }
  
  render() {
    return(
      <h1>It is {this.state.date.toLocaleTimeString()}!</h1>
    )
  }
}

ReactDOM.render(
    <Clock name='zrd'/>,
    document.getElementById('root')
);

