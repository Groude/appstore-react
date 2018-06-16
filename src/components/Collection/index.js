import React, { Component } from 'react';

import Application from '../Application';

class Collection extends Component {
  openModal = (action) => {
    const { title, data } = this.props;
    this.props.openModal(action, data, title);
  };

  render() {
    return (
      <div className="collection">
        <div className="collection__header">
          <h2 className="collection__title">{this.props.title}</h2>
          <button
            className="collection__button"
            onClick={() => this.openModal(true)}
          >
            См. Все >
          </button>
        </div>
        <div className="col collection__app">
          {
            this.props.data.map((application, index) => <Application key={index} { ...application } />)
          }
        </div>
      </div>
    );
  }
};

export default Collection;