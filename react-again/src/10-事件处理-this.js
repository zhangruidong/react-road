import React from 'react';
import ReactDOM from 'react-dom';


class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {onOff: true}
  }
  
  /*handleClick(){
    this.setState( (preState)=>{
      return {onOff:!preState.onOff}
    })
  }*/
  
  handleClick=()=> {
    this.setState( preState => ({onOff:!preState.onOff}) )
  }
  
  render(){
    return (
        <button onClick={this.handleClick}>{this.state.onOff?'on':'off'}</button>
    )
  }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)