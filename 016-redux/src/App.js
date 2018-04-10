import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'


/*
* 这是一个reducer，形式为 (state,action) => state 的纯函数。
* 描述了 action 如何把 state 变成了 下一个 state
* */
function counter(state=0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return ++state;
    case 'DECREMENT':
      return --state;
    default:
      return state;
  }
}


/*
* 创建Redux store 来存放应用的状态
* API 是 {subscribe,dispatch,getState}
* */
let store = createStore(counter)


// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe( () => {
  console.log(store.getState())
} )


/*
* 改变state的唯一方式是 dispatch一个action.
* action 可以被序列化，用日记记录和存储下来，后期还可以以回放的形式执行
* */
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"INCREMENT"})




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
