import React from 'react';

import Banner from '../Banner';

const BannerCollection = (props) => {
  return (
    <div className="banner-collection">
      {
        props.data.map((banner, index) => <a className="banner--link" key={index}><Banner image={banner.image}  /></a>)
      }
    </div>
  );
};

export default BannerCollection;