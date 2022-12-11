import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../assets/logo.png';
import saly from '../assets/saly.png';

function Form() {
  const { handleSubmit, register } = useForm();
  const onSubmit = formData => alert(JSON.stringify(formData));

  return (
    <>
      <div className='form-block'>
        <div className='block-content'>
          <img src={logo} className='logo' alt="Logo" />
          <h3>register</h3>
          <p>It's not long before you embark on this journey!</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label htmlFor="email">E-mail</label>
              <div className='input-box'>
                <input type="email" {...register('email')} placeholder='name@email.com' name='email' id='email' />
                <i className='fa-regular fa-at'></i>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor="username">Username</label>
              <div className='input-box'>
                <input type="text" {...register('username')} placeholder='gigaamiridze' name='username' id='username' />
                <i className='fa-regular fa-user'></i>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <div className='input-box'>
                <input type="password" {...register('password')} placeholder='8+ Characters, 1 Capital letter' name='password' id='password' />
                <i className='fa-solid fa-lock'></i>
              </div>
            </div>
            <div className='form-group'>
              <input type="checkbox" {...register('agree')} name="agree" id="agree" />
              <label htmlFor="agree" className='agree-label'>
                I've read and agree with <span>Terms of Service</span> and our <span>Privacy Police</span>
              </label>
            </div>
            <button type='submit' className='submit-btn'>Create an account</button>
          </form>
        </div>
      </div>
      <div className='image-block'>
        <img src={saly} className='saly-img' alt="Saly" />
      </div>
    </>
  ); 
}

export default Form;
