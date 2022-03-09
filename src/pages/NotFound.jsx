import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className="container">
      <div className="container-not-found">

        <h1 className="title">Página no encontrada</h1>
        <p className="subtitle">Regresar al <Link to="/">Home</Link></p>
      
      </div>
    </div>
  )
}

export default NotFound;