import React from 'react';

const Application = (props) => {
  return (
    <div className="application">
      <img className="application__icon" src={props.icon} alt={props.name} />
      <p className="application__name">{props.name}</p>
      <p className="application__category">{props.category}</p>
      {
        props.modal && <p className="application__price">{props.price}</p>
      }
    </div>
  );
};

export default Application;