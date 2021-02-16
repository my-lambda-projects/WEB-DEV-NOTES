import { useState } from 'react';
import './UseState.css';

const UseState = () => {
  const [theme, setTheme] = useState('dark');
  const [count, setCount] = useState(0);

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <hr />
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      {count}
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
};
export default UseState;
