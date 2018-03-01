import React from 'react';
import ReactDOM from 'react-dom';

/*
* React理念
*
* 拆分组件
* 1. FilterableProductTable (橙色): 包含了整个例子
  2. SearchBar (蓝色): 接受所有的用户输入
  3. ProductTable (绿色): 根据用户输入过滤并展示数据集合
  4. ProductCategoryRow (绿松石色): 展示每个分类的标题
  5. ProductRow (红色): 用行来展示每个产品
*
* */

class ProductCategoryRow extends React.Component {  // 商品分类行
  constructor(props) {
    super(props)
  }
  
  render(){
    return (
        <tr>
          <td>{this.props.category}</td>
        </tr>
    )
  }
  
}

class ProductRow extends React.Component {    // 商品行
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
        <tr>
          <td style={{color:this.props.product.stocked ? 'green':'red'}}>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
    )
  }
}

class ProductTable extends React.Component {  // 表格
  constructor(props) {
    super(props);
  }
  render() {
    let lastCategory = null;
    let eleArr = [];
    const data = this.props.product.filter( (item) => {
      if( !((!item.stocked && this.props.checkInput) || item.name.indexOf(this.props.textInput) === -1) ){
        return true;
      }
    } );
    
    
    
    data.forEach( (item) => {
      if(lastCategory=== null || item.category !== lastCategory){
        lastCategory = item.category;
        eleArr.push( <ProductCategoryRow category={item.category} key= {item.category}/> )
      }
      eleArr.push( <ProductRow product={item} key={item.name}/> )
    } )
    
    return (
        <table>
          <thead>
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>
          </thead>
          <tbody>
          {eleArr}
          </tbody>
        </table>
    )
  }
}

class SearchBar extends React.Component {  // 表单  筛选条件
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <label>
            <input type="text" placeholder="search…" value={this.props.textInput} onChange={this.props.textChangeHandle}/>
          </label>
          <br/>
          <label>
            <input type="checkbox" value={this.props.checkInput} onChange={this.props.checkChangeHandle}/>
            Only show product in stock
          </label>
        </div>
    )
  }
}

class FilterableProductTable extends React.Component {   // 大盒子
  constructor(props) {
    super(props);
    this.state = {
      textInput:'',
      checkInput: false
    }
  }
  
  textChangeHandle= (e) => {
    this.setState( {textInput:e.target.value} )
  }
  
  checkChangeHandle= (e) => {
    this.setState( {checkInput:e.target.checked} )
  }
  
  render() {
    return (
        <div>
          <SearchBar
              textInput={this.state.textInput}
              checkInput={this.state.checkInput}
              textChangeHandle={this.textChangeHandle}
              checkChangeHandle={this.checkChangeHandle}
          />
          <ProductTable
              textInput={this.state.textInput}
              checkInput={this.state.checkInput}
              product={this.props.product}
          />
        </div>
    )
  }
  
}


const product = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <FilterableProductTable product={product} />,
    document.getElementById('root')
);


