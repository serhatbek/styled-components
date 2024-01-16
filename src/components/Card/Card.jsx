import React from 'react';
import StyledCard from './Card.styled';

const Card = ({ id, title, text, img }) => {
  return (
    <StyledCard layout={id % 2 === 0 ? 'row-reverse' : 'row'}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <figure>
        <img src={img} alt='' />
      </figure>
    </StyledCard>
  );
};

export default Card;
