import React, { useState, useEffect } from 'react';

function Timer() {
  const [numero, setNumero] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumero(numero => numero + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <div>{numero}</div>;
}

export default Timer;