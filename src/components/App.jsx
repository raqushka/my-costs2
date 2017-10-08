import React, { Component } from 'react';
// import './App.css';

// import MoneyState from './components/MoneyState.jsx';
// import MoneyList from './components/MoneyList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header App-row">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <i className="fa fa-credit-card-alt" />
          <span className="App-title">Money pal</span>
        </div>
        {/*<div className="App-body">*/}
          <div className="App-row">
            {/* <MoneyState className="App-row"></MoneyState> */}
          </div>
          <div className="App-row">
            {/* <MoneyList></MoneyList>*/}
          </div>
        {/* </div> */}
        <div></div>
      </div>
    );
  }
}

export default App;
