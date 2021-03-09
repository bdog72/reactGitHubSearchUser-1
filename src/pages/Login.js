//
//

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useAuth0 } from '@auth0/auth0-react';

import styled from 'styled-components';
import loginImg from '../images/login-img.svg';

const Login = () => {
  return (
    <LoginWrapper>
      <div className='container'>
        <img src={loginImg} alt='github-user' />
        <h1>github user</h1>
        <button className='btn'>login</button>
      </div>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }

  img {
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
