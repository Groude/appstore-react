import React, { Fragment }from 'react';

import Collection from '../Collection';

const CollectionList = (props) => {
  return (
    <Fragment>
      {
        props.data.map((collection, index) => <Collection key={index} data={collection.data} title={collection.title} openModal={props.openModal} />)
      }
    </Fragment>
  )
}

export default CollectionList;