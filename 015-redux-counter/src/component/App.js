import React, {Component} from 'react';

class App extends Component {
  render(){
    return (
        <div className="counterBox"  style={{margin:'40px auto'}}>
          <div className="panel">
            <button className="addCounter"></button>
            <div className="counterPanel">
              <div className="counter">
                <button className="sub"></button>
                <span>0</span>
                <button className="add"></button>
                <button className="addIfOdd"></button>
                <button className="addAsync"></button>
              </div>
        
            </div>
          </div>
      
          <div className="dashboard">
            <div className="allSel line"><span className="key">HasAll:</span> <span className="val">false</span></div>
            <div className="maximum line"><span className="key">Maximum:</span> <span className="val">null</span></div>
            <div className="allCount line"><span className="key">AllCount:</span> <span className="val">0</span></div>
          </div>
        </div>
    )
  }
}

export default App;