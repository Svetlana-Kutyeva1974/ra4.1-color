//import React from 'react';
import React, { useState } from 'react';
import RGB from './RGB';
// import PropTypes from 'prop-types';//alert( parseInt('0xff', 16) ); // 255

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


return (
  <form onSubmit={handleSubmit}>
    <div className='input'>  
      <label htmlFor="hex">hex color</label>
      <input id="hex" name="hex" value={form.hex} onChange={handleNameChange}/>
    </div>
    <RGB value={form.hex} />
  </form>
);
}