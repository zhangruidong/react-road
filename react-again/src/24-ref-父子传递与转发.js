import React from 'react';
import ReactDOM from 'react-dom';
/*
* refs
* 对父组件暴露 DOM 节点
*   适用于类组件和函数式组件。
*
* */
function CustomTextInput(props) {
  return (
      <div>
        <input type="text" ref={props.inputref}/>
      </div>
  )
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick= () => {
    console.log(this.textInput);
    this.textInput.focus();
  };
  render() {
    return (
        <div>
          <CustomTextInput inputref={el => this.textInput = el}/>
          <input type="button"  value={'确认'} onClick={this.handleClick}/>
        </div>
    )
  }
}



ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
);
