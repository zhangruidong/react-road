import React from 'react';
import ReactDOM from 'react-dom';


/*state & 生命周期
  为了实现组件的实时更新，需要为组件添加状态
  状态与属性十分相似，但是状态是私有的，完全受控于当前组件
  定义为类的组件有一些特性，局部状态就是如此：局部状态只适用于类
* */

/*
* 函数组件 =>  类组件
* 1. 创建一个名称扩展为React.Component的ES6类
* 2. 创建一个叫做render()的方法
* 3. 将函数体移动到render()方法中
* 4. 在render()方法中，使用this.props替换props
* 5. 删除剩余的空函数声明
* */

/*
* 将生命周期方法添加到类中
*   在具有许多组件的应用程序中，在销毁时释放组件所占用的资源非常重要
* */

/*
* 数据自顶向下流动
*
* 父组件或子组件都不能知道某个组件是有状态还是无状态，并且他们不应该关心某组件是被定义为一个函数还是一个类。
* 这就是为什么状态通常被称为局部或封装。除了拥有并设置他的组件外，其他组件不可访问。
* 组件可以选择将其状态作为属性传递给其子组件
*
* 这通常成为自顶向下或单向数据流。任何状态始终由某些特定的组件所特有，并且从该状态导出的任何数据或UI只能影响树下方的组件。
* 如果你想象一个组件树作为属性的瀑布，每个组件的状态就像一个额外的水源，他连接在一个任意点，但也留下来
* */

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }
  tick(){
    this.setState({
      date:new Date()
    })
  }
  componentDidMount(){
    const this_this =this;
    this.timerId= setInterval(this_this.tick.bind(this),1000)
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  render(){
    return (
        <div>
          <h1>hello zzzrd!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    )
  }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)