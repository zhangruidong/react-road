import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor (props) {
    super(props);
    this.state= {isToggle:true}
    // this.handleClick=this.handleClick.bind(this)
  }
  handleClick= () => {
    this.setState( prevState => ({isToggle: !prevState.isToggle}))
  };
  render (){
    return (
        <button onClick={this.handleClick}>{this.state.isToggle?'on':'off'}</button>
    )
  }
}


ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)