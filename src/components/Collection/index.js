import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

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
          <Button
            className="collection__button"
            animated
            size="mini"
            onClick={() => this.openModal(true)}
            >
            <Button.Content visible>См. Все</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
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