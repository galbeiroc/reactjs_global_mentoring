import React from 'react';
import './App.css';
import CreateElementCounter from './components/CreateElement/Counter';
import FunctionalSearch from './components/Functional/Search';
import PureComponentToggle from './components/PureComponent/Toogle';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <CreateElementCounter />
        <FunctionalSearch />
        <PureComponentToggle />
      </div>
    )
  }
}

export default App;
