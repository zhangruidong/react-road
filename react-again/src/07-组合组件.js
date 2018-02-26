import React from 'react';
import ReactDOM from 'react-dom';


/*组合组件
*   通常，一个新的React应用程序的顶部是一个App组件。但是，如果要将React集成到现有应用程序中，则可以从下而上使用像Button这样的小组件作为开始，并逐渐运用到视图层的顶部。
* */

function Welcome(props) {
  return <h1>hello,{props.name}</h1>
}

function App() {
  return (
      <div>
        <Welcome name='Sina'/>
        <Welcome name='Tom'/>
        <Welcome name='Jack'/>
        <Welcome name='Zet'/>
      </div>
  )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);