import React from 'react';

import FreeRanking from './FreeRanking';
import PaidRanking from './PaidRanking';

const sortByRating = (a, b) => b.rating - a.rating;
const mapRatingData = (item, index) => index === 0 ? item : { name: item.name, category : item.category  };
const numberOfShow = 10;

const SideInfo = ({ data }) => {
  const flatData = data.reduce((acc , obj) => [ ...acc, ...obj.data], [])
  const freeData = flatData
    .filter(i =>  i.price === 'free')
    .sort(sortByRating)
    .map(mapRatingData);
  
  const paidData = flatData
    .filter(i =>  i.price !== 'free')
    .sort(sortByRating)
    .map(mapRatingData);

  return (
    <div className="sideinfo">
      <h4 className="sideinfo__title">Топ бесплатных приложений</h4>
      <ol className="sideinfo__list">
        {freeData.slice(0, numberOfShow).map((app, index) => <FreeRanking key={index} { ...app } />)}
      </ol>
      <h4 className="sideinfo__title">Топ платных приложений</h4>
      <ol className="sideinfo__list">
        {paidData.slice(0, numberOfShow).map((app, index) => <PaidRanking key={index} { ...app } />)}
      </ol>
    </div>
  );
};

export default SideInfo;