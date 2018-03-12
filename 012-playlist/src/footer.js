import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  lookLikeList= ()=> {
    this.props.change_like_list()
  };
  have_select() {
    return (this.props.data.filter( item => item.selected)).length;
  }
  render() {
    return (
        <footer>
          <div className={'info'}>
            <span>共{this.props.data.length}首歌曲</span>
            <span>当前选中{this.have_select()}首歌曲</span>
          </div>
          <input type="button" value={'删除选中歌曲'} onClick={this.props.delete_select}/>
          <input type="button" value={'收藏选中歌曲'} onClick={this.props.like_select}/>
          <input type="button" value={'取消收藏选中歌曲'} onClick={this.props.dislike_select}/>
          <input type="button" value={this.props.like_list? '查看全部清单' : '查看收藏清单'} onClick={this.lookLikeList}/>
        </footer>
    )
  }
}