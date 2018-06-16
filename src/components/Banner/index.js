import React from 'react';
import { Image } from 'semantic-ui-react';

const Banner = (props) => {
  return (
    <div className="banner">
      <Image src={props.image} size='large' />
    </div>
  );
};

export default Banner;