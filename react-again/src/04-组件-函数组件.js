import React from 'react';
import ReactDOM from 'react-dom';


/*组件
*   组件可以将UI切分成一些独立的、可复用的部件，这样你就只需要专注构建每一个组件。
*   函数定义组件/类定义组件
* */

function Welcome(props) {
  return <h1>hello,{props.name}</h1>
}


const element = <h1>hello</h1>;

ReactDOM.render(
    <Welcome name='Sina'/>,
    document.getElementById('root')
);