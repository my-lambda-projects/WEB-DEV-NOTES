import { useState, useEffect } from 'react';

const UseEffect = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);

  // useEffect(() => {
  //   console.log('API CAll was Made');
  //   const url = `https://randomuser.me/api/?seed=fred`;
  //   const call = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     console.log(data.results[0]);
  //   };
  //   call();
  // }, []);

  useEffect(() => {
    console.log('useEffect ran');
    document.title = 'Use Effect';
    if (toggle) console.log('Toggle is true, Doing something: ', toggle);
  }, [toggle]);

  useEffect(() => {
    console.log('useEffect Two ran', toggleTwo);

    return () => {
      console.log('cleanup ran', toggleTwo);
    };
  }, [toggleTwo]);

  return (
    <div>
      {console.log('render')}
      <h1>UseEffect Component</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>
    </div>
  );
};
export default UseEffect;
