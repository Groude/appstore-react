import React, { Component } from 'react';
import Slider from "react-slick";
import { Grid } from 'semantic-ui-react';

import iphoneAppData from '../../data/iphone/applications.json';
import iphoneBanners from '../../data/iphone/banners.json';
import iphoneBannerCollection from '../../data/iphone/bannerCollection.json';
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

class Iphone extends Component {
  state = {
    data: [],
    bannerCollection: []
  };

  componentWillMount() {
    this.setState({
      data: iphoneAppData,
      bannerCollection: iphoneBannerCollection
    });
  }
  render() {
    return (
      <div className="content">
        <div className="col banners">
          <Slider className="carousel" { ...settings }>
            { 
              iphoneBanners.map((banner, index) => <Banner key={index} image={banner.image} />)
            }
          </Slider>
        </div>

        <Grid columns={2}>
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

export default Iphone;