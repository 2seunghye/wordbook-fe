import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'rePassword') {
      setRePassword(value);
    }
  };

  const onSubmit = (event) => console.log('제출되었음');

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div className="auth-container">
      <img src="https://images.unsplash.com/photo-1585314294023-215a865ddee1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1651&q=80" />
      <div className="auth-item auth-text">
        <h2>Learn From The Expert</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sint repellendus nemo hic in, enim ut facere ducimus consequatur
          laboriosam. Facere iste ipsa, quo doloribus ab numquam. Ratione, magnam repudiandae?
        </p>

        <input type="submit" value={newAccount ? 'Sign In' : 'Create Account'} className="authInput authSubmit" id="textInput" />
      </div>
      <div className="auth-item auth-form">
        <form onSubmit={onSubmit}>
          {' '}
          {newAccount ? <h3>Sign Up</h3> : <h3>Sign In</h3>}
          <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange} className="authInput" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
            className="authInput"
          />
          {newAccount ? (
            <input
              name="rePassword"
              type="password"
              placeholder="Re-type Password"
              required
              value={rePassword}
              onChange={onChange}
              className="authInput"
            />
          ) : (
            ''
          )}
          <input type="submit" value={newAccount ? 'Create Account' : 'Sign In'} className="authInput authSubmit" />
          <span id="existence-account">
            {newAccount ? '이미 계정이 있으신가요?' : '계정이 없으신가요?'}
            <span onClick={toggleAccount} className="authSwitch">
              {newAccount ? 'Sign In' : 'Create Account'}
            </span>{' '}
          </span>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
