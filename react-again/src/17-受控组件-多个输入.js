import React from 'react';
import ReactDOM from 'react-dom';

/*
* 受控组件
*   多个输入的解决方案
* */

class MixInput extends React.Component {
  constructor() {
    super();
    this.state={
      check:true,
      num:666
    }
  }
  changeHandle= (e) => {
    if(e.target.name==='check'){
      this.setState( {[e.target.name]:e.target.checked})
    }else{
      this.setState( {[e.target.name]:e.target.value} )
    }
  }
  render(){
    return (
        <form>
          <label>
            checkbox:
            <input type="checkbox" name='check' checked={this.state.check} onChange={this.changeHandle}/>
          </label>
          <br/>
          <label>
            number:
            <input type="number" name='num' value={this.state.num} onChange={this.changeHandle}/>
          </label>
        </form>
    )
  }
}

ReactDOM.render(
    <MixInput/>,
    document.getElementById('root')
)