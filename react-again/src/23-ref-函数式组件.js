import React from 'react';
import ReactDOM from 'react-dom';
/*
* refs
* React 组件在加载时将 DOM 元素传入 ref 的回调函数，在卸载时则会传入 null。ref 回调会在componentDidMount 或 componentDidUpdate 这些生命周期回调之前执行。
*
* */
function CustomTextInput() {
  let textInput = null;
  function handleClick() {
    textInput.focus();
  }
  return (
      <div>
        <input type="text" ref={ input => textInput = input}/>
        <input type="button" value={'确认'} onClick={handleClick}/>
      </div>
  )
}



ReactDOM.render(
    <CustomTextInput/>,
    document.getElementById('root')
);
