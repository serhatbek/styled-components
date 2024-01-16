import React from 'react';

const Card = ({ title, text, img }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <figure>
        <img src={img} alt='' />
      </figure>
    </div>
  );
};

export default Card;
