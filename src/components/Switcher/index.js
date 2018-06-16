import React from 'react';
import { Button } from 'semantic-ui-react';

const Switcher = (props) => {
  return (
    <div className="col switcher">
      <Button.Group>
        <Button 
          positive={props.currentData === 'iphone'}
          onClick={props.iphoneHandle}
        >
          Iphone
        </Button>
        <Button.Or />
        <Button 
          positive={props.currentData === 'ipad'}
          onClick={props.ipadHandle}
        >
          Ipad
        </Button>
      </Button.Group>
    </div>
  )
}

export default Switcher;