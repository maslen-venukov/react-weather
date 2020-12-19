import React, { useState } from 'react';

const Form = ({ setLocation }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setLocation(inputValue);
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input onChange={e => setInputValue(e.target.value)} value={inputValue} type="text" name="city" placeholder="Город" />
      <button>Узнать погоду</button>
    </form>
  );
};

export default Form;