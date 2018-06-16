import React from 'react';

const Banner = (props) => {
  return (
    <div className="banner">
      <img className="banner__image" src={props.image} alt=""/>
    </div>
  );
}

export default Banner;