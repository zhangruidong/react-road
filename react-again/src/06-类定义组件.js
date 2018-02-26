import React from 'react';
import ReactDOM from 'react-dom';


/*组件
*   组件可以将UI切分成一些独立的、可复用的部件，这样你就只需要专注构建每一个组件。
*   函数定义组件/类定义组件
* */

/*function Welcome(props) {
  return <h1>hello,{props.name}</h1>
}*/

class Welcome extends React.Component {
  render(){
    return <h2>hello {this.props.name}!</h2>
  }
}


ReactDOM.render(
    <Welcome name='Sina'/>,
    document.getElementById('root')
);