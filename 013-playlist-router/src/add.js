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
    if(this.state.title && this.state.singer){
      this.props.addList(this.state);
      this.setState({
        title:'',
        singer:''
      });
      this.props.history.push('/');
    }
    
  };
  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
        <React.Fragment>
          {this.props.length>0  && <div className={'back'} onClick={this.handleBack}>返回</div>}
          <h1>添加歌曲</h1>
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
