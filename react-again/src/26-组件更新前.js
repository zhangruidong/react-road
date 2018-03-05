import React from 'react';
import ReactDOM from 'react-dom';
/*
* shouldComponentUpdate 应用
*
* */
class CounterButton extends React.Component {
  constructor(props) {
    super();
    this.state= {counter:0}
  };
  
  clickHandle= () => {
    this.setState( pre => ({counter:pre.counter+1}) )
  };
  
  shouldComponentUpdate(nextProps,nextState) {
    if(this.props.color !== nextState.counter){
      return true;
    }
    return false;
  };
  
  render() {
    return (
        <button onClick={this.clickHandle}>counter:{this.state.counter}</button>
    )
  }
}

ReactDOM.render(
    <CounterButton color={3}/>,
    document.getElementById('root')
);