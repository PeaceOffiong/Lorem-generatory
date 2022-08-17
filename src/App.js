import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length - 1) {
      amount = data.length -1;
    }
    setText(data.slice(0, amount)); 
  }
  return (
    <main>
      <section className='section'>
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={handleClick}>
          <label htmlFor='amount'>paragraph :</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)} />
          <button type="submit" className='btn'>Generate</button>
        </form>
      </section>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{ item}</p>
        })}
      </article>
  </main>
    )
}

export default App;
