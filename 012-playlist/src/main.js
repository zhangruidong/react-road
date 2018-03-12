import React from 'react';
import Item from './item';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <table style={ {display: this.props.data.length>0?'table':'none'} }>
          <thead>
            <tr>
              <th>
                <input type="checkbox" checked={this.props.checkAll} onChange={this.props.handleCheckAll}/>全选
              </th>
              <th>歌曲</th>
              <th>歌手</th>
              <th>收藏</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map( (item,index) => {
                return (<tr key={index}>
                  <Item
                      index={index}
                      data={item}
                      handleCheck = {this.props.handleCheck}
                      handleLike = {this.props.handleLike}
                      handleDelete = {this.props.handleDelete}
                  />
                </tr>)
              })
            }
          </tbody>
        </table>
    )
  }
}