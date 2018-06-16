import React, { Component } from 'react';
import Slider from "react-slick";
import { Grid } from 'semantic-ui-react';

import ipadAppData from '../../data/ipad/applications.json';
import ipadBanners from '../../data/ipad/banners.json';
import ipadBannerCollection from '../../data/ipad/bannerCollection.json';
import Banner from '../Banner/';
import CollectionList from '../CollectionList';
import BannerCollection from '../BannerCollection';
import SideInfo from '../SideInfo';


const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 500,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1
};

class Ipad extends Component {
  state = {
    data: [],
    bannerCollection: []
  };

  componentWillMount() {
    this.setState({
      data: ipadAppData,
      bannerCollection: ipadBannerCollection
    });
  }
  render() {
    return (
      <div className="content">
        <div className="col banners">
          <Slider className="carousel" { ...settings }>
            { 
              ipadBanners.map((banner, index) => <Banner key={index} image={banner.image} />)
            }
          </Slider>
        </div>
        <Grid Columns={2}>
          <Grid.Row className="content__row">
            <Grid.Column width={13}>
              <div className="col">
                <CollectionList data={this.state.data} openModal={this.props.openModal} />
              </div>

              <div className="col">
                <BannerCollection data={this.state.bannerCollection} />
              </div>
            </Grid.Column>

            <Grid.Column width={2}>
              <SideInfo data={this.state.data} />
            </Grid.Column>
            
          </Grid.Row>
        </Grid>
      </div>
    );
  }
};

export default Ipad;