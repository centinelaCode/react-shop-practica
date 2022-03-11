import React from 'react';
import '@styles/RecoveryPassword.scss';

import logo from '@logos/logo_yard_sale.svg';

const RecoveryPassword = () => {
  return (
    <div className="RecoveryPassword">
      <div className="RecoveryPassword-container">
        <img src={logo} alt="logo" className="logo" />

        <h1 className="title">Password recovery</h1>
        <p className="subtitle">Información del correo electronico utilizada para crear la cuenta</p>

        <form action="/" className="form">
          <label for="email" className="label">Email</label>
          <input type="email" id="email" className="input input-email" />
          
          <input type="submit" value="Confirm" className="primary-button login-button" />
        </form>
      </div>
    </div>
  )
}

export default RecoveryPassword;