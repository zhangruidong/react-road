import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import DATA from './data.js';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <li>
          <dl>
            <dt style={ {color: this.props.data.vip?'red':'black'} }>{this.props.data.username}</dt>
            <dd>{this.props.data.message}</dd>
          </dl>
        </li>
    )
  }
}

class Group extends React.Component {
  constructor(props) {
    super(props);
  };
  handleClick = () => {
    this.props.changeShow(this.props.index);
  };
  render() {
    return (
        <div className={'group'}>
          <h2 className={'title'} onClick={this.handleClick}>{this.props.data.name}</h2>
          <ul style={ {display: this.props.show?'block':'none'} }>
            {this.props.data.list.map( (item,index) => <Item key={index} data={item}/> )}
          </ul>
        </div>
    )
  }
}

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show:[true,false,false]}
  }
  changeShow = (index) => {
    console.log(index);
    if(this.state.show[index]){ //打开
      this.state.show[index] = false;
      this.setState( {show:[...this.state.show]} )
    }else{
      let newShow = [false,false,false];
      newShow[index] = true;
      this.setState( {show: [...newShow]} )
      
    }
  };
  render() {
    return (
        <div className={'panel'}>
          {Object.keys(DATA).map( (item,index) => <Group
              data={DATA[item]}
              show={this.state.show[index]}
              key={index}
              index={index}
              changeShow={this.changeShow}
          /> )}
        </div>
    )
  }
}

ReactDOM.render(
    <Panel/>,
    document.getElementById('root')
);
