import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Board from './board/board';
import Panel from './teams/panel';
import reducer from './reducers/all';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Board />
          <Panel />
        </div>
      </Provider>
    );
  }
}

export default App;
