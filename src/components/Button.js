import React, {useState} from 'react';
import '../assets/css/Button.css';

export default function Button({title="default"}) {
  let [count, setCount] = useState(0);

  const handleClick = () => () => {
    console.log(count);
    setCount(count+1);
  }
  return (
    <button onClick={handleClick()}>{title}: {count}</button>
  );
}

