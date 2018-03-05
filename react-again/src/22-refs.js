import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
/*
* refs
*
* React 组件在加载时将 DOM 元素传入 ref 的回调函数，在卸载时则会传入 null。ref 回调会在componentDidMount 或 componentDidUpdate 这些生命周期回调之前执行。
*
* */
class CustomTextInput extends React.Component {
  constructor(props) {
    super()
  }
  focus = ()=>{
    console.log(this.textInput);
    this.textInput.focus()
  }
  render() {
    return (
        <div>
          <input type="text" ref={ (input) => {this.textInput = input} }/>
          <input type="button" onClick={this.focus} value={'focus'}/>
        </div>
    )
  }
}



ReactDOM.render(
    <CustomTextInput/>,
    document.getElementById('root')
);
