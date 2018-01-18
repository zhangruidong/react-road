import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:'zzz'.toUpperCase()
    }
  }
  
  changeHandle=(event)=>{
    console.log(event.target.value);
    this.setState( {value: event.target.value.toUpperCase()} )
  }
  submitHandle=(event) => {
    alert(this.state.value)
    event.preventDefault();
  }
  
  render() {
    return (
        <form action="" onSubmit={this.submitHandle}>
          <label htmlFor="">
            Name:
            <input onChange={this.changeHandle} type="text" value={this.state.value} />
          </label>
          <input type="submit" value="submit"/>
        </form>
    )
  }
}

ReactDOM.render(
    <NameForm/>,
    document.getElementById('root')
);