import React from 'react';
import ReactDOM from 'react-dom';
/*
* shouldComponentUpdate 应用
*
* */
class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
  }
  
  render() {
    return (
        <div>
          <button  onClick={this.handleClick}>{this.props.words}</button>
          <ListOfWords words={this.state.words} />
        </div>
    );
  }
}

ReactDOM.render(
    <WordAdder words={'zzzrd'}/>,
    document.getElementById('root')
);