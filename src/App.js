import React, { Component } from 'react';
import Modal from 'react-modal';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './styles/style.css';
import Switcher from './components/Switcher';
import Iphone from './components/Iphone';
import Ipad from './components/Ipad';
import Application from './components/Application';

Modal.setAppElement('#root')

class App extends Component {
  state = {
    currentData: 'iphone',
    modalIsOpen: false,
    tempModalData: [],
    tempModalTitle: ''
  }

  openModal = (action, data, title) => {
    this.setState({
      modalIsOpen: action,
      tempModalData: data,
      tempModalTitle: title
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      tempModalData: [],
      tempModalTitle: ''
    });
  };

  iphoneHandle = () => {
    console.log('Iphone Content');
    this.setState({
      currentData: 'iphone'
    });
  };

  ipadHandle = () => {
    console.log('Ipad content');
    this.setState({
      currentData: 'ipad'
    });
  };

  renderData = () => {
    switch (this.state.currentData) {
      case 'iphone':
        return <Iphone openModal={this.openModal} />
      case 'ipad':
        return <Ipad openModal={this.openModal} />
      default: 
        return <Iphone />
    }
  }

  render() {
    return (
      <div className="app">
        <Modal
          isOpen={this.state.modalIsOpen}
          shouldCloseOnOverlayClick={true}
          closeTimeoutMS={200}
          className="modal"
          overlayClassName="modal__overlay"
        >
        <button
          className="modal__close"
          onClick={this.closeModal}
        >
          X
        </button>
        <h2 className="modal__title">{this.state.tempModalTitle}</h2>
        <div className="modal__content">
          {
            this.state.tempModalData.map((application, index) => <Application key={index} modal={true} { ...application } />)
          }
        </div>
        </Modal>
        <div className="container">
          <div className="row">
            <Switcher currentData={this.state.currentData} iphoneHandle={this.iphoneHandle} ipadHandle={this.ipadHandle} />
          </div>
          <div className="row">
            { this.renderData() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
