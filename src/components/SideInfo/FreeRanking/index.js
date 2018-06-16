import React from 'react';

const FreeRanking = ({ name, category, icon  }) => {
  return (
    <li className="sideinfo__item">
      <div>
        {icon && <img className="item__icon" src={icon} alt=""/>}
        <a href="#" className="item__name">{name}</a>
      </div>
      <p className="item__category">{category}</p>  
    </li>
  );
};

export default FreeRanking;