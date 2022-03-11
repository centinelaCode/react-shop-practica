import React from 'react';
import '@styles/Orders.scss';

import arrow from '@icons/flechita.svg';

const Orders = () => {
  return (
    <div className="Orders">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560,00</p>
      <img src={arrow} alt="arrow" />
    </div>
  )
}

export default Order;