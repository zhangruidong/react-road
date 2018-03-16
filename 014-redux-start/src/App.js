import { Component } from 'react';
import $ from 'jquery';
import {createStore} from 'redux';

class App extends Component {
  render() {
    function counter(state={value:0}, action) {
      let {type} = action;
    
      switch (type) {
        case 'INCREMENT':
          return Object.assign({},state,{value:state.value+6});
        default:
          return state;
      }
    }
  
    let store = createStore(counter);
    let current = store.getState();
  
    $(document).click(()=>{
      store.dispatch({ type: 'INCREMENT' });
    });
  
    store.subscribe( ()=>{
      let pre =current;
      current = store.getState();
      console.log(pre,current,pre===current);
    } );
    return true;
  }
}

export default App;
