import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'
import Main from './main'
import Footer from './footer'
import './App.css'

let DATA = [
  {
    id: 0,
    title: "空白格",
    singer: "蔡健雅",
    selected: true,
    like: false
  },
  {
    id: 1,
    title: "空白格222",
    singer: "蔡健雅222",
    selected: true,
    like: true
  },
  {
    id: 2,
    title: "空白格3333",
    singer: "蔡健雅3333",
    selected: true,
    like: true
  },
  {
    id: 3,
    title: "空白格333",
    singer: "蔡健雅333",
    selected: true,
    like: false
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: DATA}
  }
  maxId(){
    return Math.max(...this.props.data.map( (item) => item.id ));
  };
  addList= (item) => {
    let newItem = {
      id: this.maxId()+1,
      title: item.title,
      singer: item.singer,
      selected: false,
      like: false
    };
    console.log(this.props.data);
    this.setState( {data:[...this.state.data,newItem]} );
    
    // this.props.data = this.props.data.concat([newItem]);
    
  }
  render() {
    return (
        <div className={'app'}>
          <Header addList={this.addList}/>
          <Main data={this.state.data}/>
          <Footer/>
        </div>
    )
  }
}

ReactDOM.render(
    <App data={DATA}/>,
    document.getElementById('root')
);
