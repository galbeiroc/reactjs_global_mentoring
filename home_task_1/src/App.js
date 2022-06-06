import React from 'react';
import './App.css';
import CreateElementCounter from './components/CreateElement/Counter';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <CreateElementCounter />
      </div>
    )
  }
}

export default App;
