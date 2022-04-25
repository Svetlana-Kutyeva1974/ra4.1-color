import React, { useState } from 'react';
import RGB from './RGB';

export default function Converter() {

const [form, setForm] = useState({
hex: '',
endOfInput: false
});

const handleSubmit = evt => {
  evt.preventDefault();
  console.log(evt.type);
  console.dir(evt.target);
  }

const handleNameChange = evt => {
  console.log('evt.target.value.length', evt.target.value.length);
  if (evt.target.value.length<7 ) {
    setForm(prevForm => ({hex: evt.target.value, endOfInput: false}));
  } else {
    setForm(prevForm => ({hex: evt.target.value, endOfInput: true}));
  }
};

// (form.hex) ? document.body.style.backgroundColor = `${form.hex}` : document.body.style.backgroundColor = 'rgb(255,255,255)';

return (
  <form onSubmit={handleSubmit} >
    <div className='input'>  
      <label htmlFor="hex">HEX </label>
      <input id="hex" name="hex" value={form.hex} onChange={handleNameChange}/>
    </div>
    <RGB value={form.hex} />
  </form>
);
}