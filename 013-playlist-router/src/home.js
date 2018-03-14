import React from 'react';
import {Link,Route,Switch,Redirect} from 'react-router-dom';
import Table from './table';
import Footer from './footer';
class Home extends React.Component {
  render() {
    let like_data = this.props.data.filter( item => item.like)
    return (
        <div>
          <Link className={'add'} to="/add">添加歌曲</Link>
          <h2 className={'center'}>{this.props.pathname==='/'?'所有歌曲':'已收藏歌曲'}</h2>
          <Switch>
            <Route path={'/like'} render={ (e) => {
              if(like_data.length<1){
                return <Redirect to={'/'}/>
              }
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
                        like={true}
                        data={like_data}
                        router={e}
                        delete_select = {this.props.delete_select}
                        like_select = {this.props.like_select}
                        dislike_select = {this.props.dislike_select}
                    />
                  </div>
              )
            }}/>
            <Route path={'/'} render={ (e) => {
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
                        like={false}
                        data={this.props.data}
                        router={e}
                        like_length={like_data.length}
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