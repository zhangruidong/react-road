import React from 'react';

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      title:'',
      singer:''
    }
  }
  handleTitleChange= (e) => {
    this.setState( {title: e.target.value} )
  };
  handleSingerChange= (e) => {
    this.setState( {singer:e.target.value} )
  };
  handleSubmit= (e) => {
    e.preventDefault();
    this.props.addList(this.state);
    this.setState({
      title:'',
      singer:''
    });
    this.props.router.history.push('/');
  }
  render() {
    return (
        <React.Fragment>
          <h1>播放列表</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" placeholder={'输入歌曲名称'} value={this.state.title} onChange={this.handleTitleChange}/>
            </label>
            <label>
              <input type="text" placeholder={'输入歌手名字'} value={this.state.singer} onChange={this.handleSingerChange}/>
            </label>
            <label>
              <input type="submit" value={'添加音乐'}/>
            </label>
          </form>
        </React.Fragment>
    
    
    )
  }
}
