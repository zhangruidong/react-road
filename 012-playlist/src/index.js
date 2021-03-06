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
    this.state = {data: DATA,like_list:false}
  }
  maxId(){
    return Math.max(...this.props.data.map( (item) => item.id ));
  };
  checkAll() {
    for (let i = 0; i < this.props.data.length; i++) {
        if(!this.props.data[i].selected){
          return false;
        }
    }
    return true;
  }
  addList= (item) => {
    let newItem = {
      id: this.maxId()+1,
      title: item.title,
      singer: item.singer,
      selected: false,
      like: false
    };
    let data = this.state.data;
    data.push(newItem);
    this.setState( {data} );
  };
  handleCheckAll = (e) => {
    let data = this.state.data;
    data.forEach( item => {
      item.selected = e.target.checked;
    })
    this.setState( {data} )
  };
  handleCheck = (id,e) => {
    let data = this.state.data;
    data.forEach( item => {
      if(item.id===id){
        item.selected = e.target.checked;
      }
    });
    this.setState( {data} )
  };
  handleLike = (id,e) => {
    let data = this.state.data;
    data.forEach( item => {
      if(item.id===id){
        item.like = e.target.checked;
      }
    });
    this.setState( {data} )
  };
  handleDelete = (id) => {
    let data = this.state.data;
    data = data.filter( item => {
      if(item.id===id){
        return false;
      }
      return true;
    });
    console.log(data);
    this.setState( {data} )
  };
  computedData = (data,like_list) => {
    if(!like_list){
      return data;
    }else {
      return data.filter( item => item.like)
    }
  };
  change_like_list = () => {
    this.setState( {like_list:!this.state.like_list} )
  };
  delete_select = () => {
    let new_data=this.state.data.filter( item => {
      if(this.state.like_list){
        return !(item.selected && item.like)
      }else{
        return !item.selected
      }
    });
    this.setState( {data:new_data} )
  };
  
  like_select = () => {
    let new_data=this.state.data.map( item => {
      if(item.selected){
        item.like = true;
      }
      return item;
    });
    this.setState( {data:new_data} )
  };
  
  dislike_select = () => {
    let new_data=this.state.data.map( item => {
      if(item.selected){
        item.like = false;
      }
      return item;
    });
    this.setState( {data:new_data} )
  };
  
  render() {
    return (
        <div className={'app'}>
          <Header addList={this.addList}/>
          <Main
              data={this.computedData(this.state.data,this.state.like_list)}
              checkAll={this.checkAll()}
              handleCheckAll={this.handleCheckAll}
              handleCheck = {this.handleCheck}
              handleLike = {this.handleLike}
              handleDelete = {this.handleDelete}
          />
          <Footer
              data={this.computedData(this.state.data,this.state.like_list)}
              change_like_list = {this.change_like_list}
              like_list = {this.state.like_list}
              delete_select = {this.delete_select}
              like_select = {this.like_select}
              dislike_select = {this.dislike_select}
          />
        </div>
    )
  }
}

ReactDOM.render(
    <App data={DATA}/>,
    document.getElementById('root')
);
