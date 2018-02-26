import React from 'react';
import ReactDOM from 'react-dom';


/*提取组件
* */

const obj = {
  info: {innerInfo:'zzzrd',ad:{age:'22'}},
  date: '02-27'
}

function Bottom(props) {
  return <h3>这是底线{props.attr}</h3>
}

function Cent(props) {
  return (
      <div>
        <h2>这是底层{props.att.age}</h2>
        <Bottom attr='zzzzzzzrd'/>
      </div>
  )
}

function Top(props) {
  return (
      <div>
        <h2>这是center{props.att.innerInfo}</h2>
        <Cent att={props.att.ad}/>
      </div>
  )
}

function App(props) {
  return (
      <div>
        <h1>这是顶层{props.att.date}</h1>
        <Top att={props.att.info}/>
      </div>
  )
}

ReactDOM.render(
    <App att={obj}/>,
    document.getElementById('root')
);

