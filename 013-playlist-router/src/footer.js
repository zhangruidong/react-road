import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  delete_select= () => {
    this.props.delete_select(this.props.like)
  };
  like_select= () => {
    this.props.like_select(this.props.like)
  };
  dislike_select= () => {
    this.props.dislike_select(this.props.like)
  };
  have_select() {
    return (this.props.data.filter( item => item.selected)).length;
  }
  render() {
    return (
        <footer>
          <div className={'info'}>
            <span className={'bold'}>共{this.props.data.length}首歌曲</span>
            <span>当前选中{this.have_select()}首歌曲</span>
          </div>
          <input type="button" value={'删除选中歌曲'} onClick={this.delete_select}/>
          <input type="button" value={'收藏选中歌曲'} onClick={this.like_select}/>
          <input type="button" value={'取消收藏选中歌曲'} onClick={this.dislike_select}/>
          {this.props.router.location.pathname ==='/' && this.props.like_length>0 && <Link to="/like" className='switch'>查看收藏清单</Link>}
          {this.props.router.location.pathname ==='/like' && <Link to="/" className='switch'>查看全部清单</Link>}
        </footer>
    )
  }
}