import React from 'react';
import './App.scss';
import { CreateElementCounter } from './components/CreateElement/Counter';
import { FunctionalSearch } from './components/Functional/Search';
import { PureComponentToggle } from './components/PureComponent/Toogle';

export class App extends React.Component {
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
