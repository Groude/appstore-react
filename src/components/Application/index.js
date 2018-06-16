import React from 'react';
import { Icon } from 'semantic-ui-react';

const Application = (props) => {
  return (
    <div className="application">
      <img className="application__icon" src={props.icon} alt={props.name} />
      <a className="application__name">{props.name} <Icon className="application__icon" name="arrow right" /></a>
      <p className="application__category">{props.category}</p>
      {
        props.modal && <a className="application__price">{props.price}<Icon name="cart plus" /></a>
      }
    </div>
  );
};

export default Application;