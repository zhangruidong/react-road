import React from 'react';
import ReactDOM from 'react-dom';
/*
* 非受控组件
*
* */
class NameForm extends React.Component {
  constructor(props) {
    super(props);
  }
  submitHandle = (e) => {
    console.log(this.nameInput.value);
    e.preventDefault();
  }
  render() {
    return (
        <form onSubmit={this.submitHandle}>
          <label>
            name:
            <input type="text" defaultValue={'zzzrd'} ref={ input => this.nameInput=input}/>
          </label>
          <input type="submit" value={'submit'}/>
        </form>
    )
  }
}

ReactDOM.render(
    <NameForm/>,
    document.getElementById('root')
)