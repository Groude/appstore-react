import React from 'react';
import { Grid } from 'semantic-ui-react';

import Banner from '../Banner';

const BannerCollection = (props) => {
  return (
    <div className="banner-collection">
      <Grid columns={3}>
        <Grid.Row>
          {
            props.data.map((banner, index) => {
              return (
                    <Grid.Column key={index}>
                      <a className="banner--link"><Banner image={banner.image} size='medium' /></a>
                    </Grid.Column>
              );
            })
          }
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default BannerCollection;