import React from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import Table from './table';
import Footer from './footer';
class Home extends React.Component {
  render() {
    let like_data = this.props.data.filter( item => item.like)
    return (
        <div>
          <Link className={'add'} to="/add">添加歌曲</Link>
          <h2 className={'center'}>{this.props.pathname==='/'?'所有歌曲':'已收藏歌曲'}</h2>
          <nav>
            <Link to="/">所有歌曲</Link>
            <span> | </span>
            <Link to="/like">已收藏歌曲</Link>
          </nav>
          <Switch>
            <Route path={'/like'} render={ () => {
              return (
                  <div>
                    <Table
                        data={like_data}
                        checkAll={this.props.checkAll}
                        handleCheckAll={this.props.handleCheckAll}
                        handleCheck = {this.props.handleCheck}
                        handleLike = {this.props.handleLike}
                        handleDelete = {this.props.handleDelete}
                    />
                    <Footer
                        data={like_data}
                        delete_select = {this.props.delete_select}
                        like_select = {this.props.like_select}
                        dislike_select = {this.props.dislike_select}
                    />
                  </div>
              )
            }}/>
            <Route path={'/'} render={ () => {
              return (
                  <div>
                    <Table
                        data={this.props.data}
                        checkAll={this.props.checkAll}
                        handleCheckAll={this.props.handleCheckAll}
                        handleCheck = {this.props.handleCheck}
                        handleLike = {this.props.handleLike}
                        handleDelete = {this.props.handleDelete}
                    />
                    <Footer
                        data={this.props.data}
                        delete_select = {this.props.delete_select}
                        like_select = {this.props.like_select}
                        dislike_select = {this.props.dislike_select}
                    />
                  </div>
              )
            }}/>
          </Switch>
        </div>
    )
  }
}

export default Home;