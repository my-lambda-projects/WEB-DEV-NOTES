import { useEffect, useState } from 'react';

function Cleanup({ message }) {
  useEffect(() => {
    const text = setInterval(() => {
      console.log(message);
    }, 3000);

    return () => {
      console.log('cleanup ran: ', message);
      clearInterval(text);
    };
  }, [message]);

  return <div className='message'>Logging to console "{message}"</div>;
}

export default function Message() {
  const [message, setMessage] = useState('Hello, World!');

  return (
    <div className='App'>
      {console.log('render')}
      <h3>Type the message to log to console</h3>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Cleanup message={message} />
    </div>
  );
}
