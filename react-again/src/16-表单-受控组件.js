import React from 'react';
import ReactDOM from 'react-dom';

/*
* 受控组件
* */
class NameForm extends React.Component {
  constructor(){
    super();
    this.state={num:0}
  }
  
  changeHandle= (e)=> {
    this.setState( {num:e.target.value} )
  }
  clickHandle= (e)=> {
    console.log(this.state.num);
    e.preventDefault();
  }
  render(){
    return (
        <form>
          <label>age:</label>
          <input onChange={this.changeHandle} value={this.state.num} type="number" name="age"/>
          <button onClick={this.clickHandle} type="submit">提交</button>
        </form>
    )
  }
}
ReactDOM.render(
    <NameForm/>,
    document.getElementById('root')
);