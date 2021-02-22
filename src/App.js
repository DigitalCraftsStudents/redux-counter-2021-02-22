import { useState } from 'react';
import './App.css';

import Counter from './Counter';

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <Counter
        count={count}
        decrement={decrement}
        increment={increment}
      />
    </div>
  );
}

export default App;
