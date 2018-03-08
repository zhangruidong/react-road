import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
        <footer>
          <input type="button" value={'删除选中歌曲'}/>
          <input type="button" value={'收藏选中歌曲'}/>
          <input type="button" value={'取消收藏选中歌曲'}/>
          <input type="button" value={'查看收藏清单'}/>
        </footer>
    )
  }
}