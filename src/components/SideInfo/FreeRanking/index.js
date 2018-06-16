import React from 'react';
import { List } from 'semantic-ui-react';

const FreeRanking = ({ name, category, icon  }) => {
  return (
    <List.Item className="sideinfo__item">
      <div>
        {icon && <img className="item__icon" src={icon} alt=""/>}
        <a className="item__name">{name}</a>
      </div>
      <p className="item__category">{category}</p>  
    </List.Item>
  );
};

export default FreeRanking;