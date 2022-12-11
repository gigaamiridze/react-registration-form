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
          <form>
            <div className='form-group'>
              <label htmlFor="email">E-mail</label>
              <div className='input-box'>
                <input type="email" placeholder='name@email.com' name='email' id='email' />
                <i className='fa-regular fa-at'></i>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor="username">Username</label>
              <div className='input-box'>
                <input type="text" placeholder='gigaamiridze' name='username' id='username' />
                <i className='fa-regular fa-user'></i>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <div className='input-box'>
                <input type="password" placeholder='8+ Characters, 1 Capital letter' name='password' id='password' />
                <i className='fa-solid fa-lock'></i>
              </div>
            </div>
            <div className='form-group'>
              <input type="checkbox" name="agree" id="agree" />
              <label htmlFor="agree" className='agree-label'>
                I've read and agree with <span>Terms of Service</span> and our <span>Privacy Police</span>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className='image-block'></div>
    </>
  ); 
}

export default Form;
