import React from 'react';
import Item from './item';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox"/>全选
              </th>
              <th>歌曲</th>
              <th>歌手</th>
              <th>收藏</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map( (item,index) => <tr key={index}>
                <Item data={item}/>
              </tr> )
            }
          </tbody>
        </table>
    )
  }
}