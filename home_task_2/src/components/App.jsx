import React from 'react';

import laugh from '../assets/laughing.svg'

function App() {
  console.log(process.env.API);

  return (
    <div>
      <h3 className='title'>Webpack App</h3>
      <p className='paragraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos provident suscipit voluptatibus est! Laboriosam facilis, in est fuga quaerat optio unde voluptates natus perferendis, amet consequuntur, rerum commodi explicabo dolorem!
      </p>
      <div className='container-img'>
        <img className='laugh' src={laugh} alt='laugh' />
      </div>
    </div>
  )
}

export default App;
