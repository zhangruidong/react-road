import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
/*
* refs
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
