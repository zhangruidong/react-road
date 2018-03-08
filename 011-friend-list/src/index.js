import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import DATA from './data.js';

/*
* Element.scrollHeight 这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。没有垂直滚动条的情况下，scrollHeight值与元素视图填充所有内容所需要的最小值clientHeight相同。包括元素的padding，但不包括元素的border和margin。scrollHeight也包括 ::before 和 ::after这样的伪元素。
* */

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
  animateShow(isShow) {
    let list = this.refs.list;
    if(isShow){
      list.style.height = list.scrollHeight +'px';
    }else{
      list.style.height = '0'
    }
  };
  shouldComponentUpdate(nextProps) {
    this.animateShow(nextProps.show);
    return true;
  };
  componentDidMount() {
    this.animateShow(this.props.show);
  }
  handleClick = () => {
    this.props.changeShow(this.props.index);
  };
  render() {
    return (
        <div className={'group'}>
          <h2 className={'title'} onClick={this.handleClick}>{this.props.data.name}</h2>
          <ul ref={'list'} className={'list hide'}>
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
