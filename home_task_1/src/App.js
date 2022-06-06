import React from 'react';
import './App.css';
import CreateElementCounter from './components/CreateElement/Counter';
import FunctionalSearch from './components/Functional/Search';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <CreateElementCounter />
        <FunctionalSearch />
      </div>
    )
  }
}

export default App;
