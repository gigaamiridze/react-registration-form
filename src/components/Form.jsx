import React from 'react';
import logo from '../assets/logo.png';
import saly from '../assets/saly.png';

function Form() {
  return (
    <>
      <div className='form-block'>
        <div className='block-content'>
          <img src={logo} className='logo' alt="Logo" />
          <h3>register</h3>
          <p>It's not long before you embark on this journey!</p>
        </div>
      </div>
      <div className='image-block'></div>
    </>
  ); 
}

export default Form;
