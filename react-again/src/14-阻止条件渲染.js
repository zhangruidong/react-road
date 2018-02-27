import React from 'react';
import ReactDOM from 'react-dom';

/*
* 阻止条件渲染
* */
function Warning(props) {
  if(!props.warn)return null;
  return <h1>warning</h1>
}

class Page extends React.Component {
  constructor() {
    super();
    this.state= {warn:true}
  }
  
  handleClick=() => {
    this.setState( pre => ({warn: !pre.warn}) )
  }
  
  render() {
    return (
        <div>
          <button onClick={this.handleClick}>{this.state.warn?'hide':'show'} warnning</button>
          <Warning warn={this.state.warn}/>
        </div>
    )
  }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);