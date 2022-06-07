import { Component, createElement} from 'react';
import './Counter.scss';

export class CreateElementCounter extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  decrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  render() {
    return createElement(
      'div',
      null,
        createElement(
          'h2',
          { className: 'title' },
          'Counter'
        ),
        createElement(
          'div',
          null,
            createElement('span', { className: 'counter' }, this.state.counter)
        ),
        createElement(
          'div',
          { className: 'content-btn' },
          createElement(
            'button', 
            { className: 'btn-increment', onClick: () => this.increment() },
            'Increment'
          ),
          createElement(
            'button',
            { className: 'btn-decrement', onClick: () => this.decrement()},
            'Decrement'
          ),
      ),
    )
  }
}
