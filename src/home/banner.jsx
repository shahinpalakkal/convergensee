import React, { Component } from 'react';
// import banner from  "../image/banner.jpg"
// import bannerNew from  "../image/bannerNewDt.jpg"
// import bannerMob from  "../image/bannerMob.jpg"
import {Link} from "react-router-dom";
import $ from "jquery"
export default class Banner extends Component {
  // componentDidMount(){
  //   var dataLayer = window.dataLayer || [];
  //   $(".contact-us").on("click", function() {
  //     var datalayeraction = $(this).text();
  //     var datalayerhrefClick = $(this).attr("href").replace('/', '');
  //     dataLayer.push({
  //       "event": "trackEvent",
  //       "eventCategory": "Contact us Click",
  //       "eventLabel":datalayerhrefClick,
  //       "eventAction": datalayeraction+" click"
  //     });
    
  //     console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
  //   });
  // }
  render() {
    return (

      <div className="banner" role="banner">
       {/* <img className="img-fluid" alt="banner" className="webBannerImg" src={bannerNew} />
       <img className="img-fluid" alt="banner" className="mobBannerImg" src={bannerMob} /> */}
        <div className="container">
          {/* <div className="banner-main"> */}
            <div className="banner-left">
              <h1 className="banner-head" id="main" tabIndex="-1">Support your clients with the foundation for local search.</h1>
            <div className="banner-head">Make sure their businesses can be found everywhere.</div>

              <div className="contactusbtn">
                {/* <span className="commonButton">Request Info</span> */}
                <Link to="/contact" role="button" className="contact-us commonButton text-capitalize">Contact Us</Link>
              </div>
            </div>
            {/* <div className="banner-right">
              <img className="img-fluid" alt="banner" src={banner} />
            </div> */}
          {/* </div> */}
        </div>
      </div>

    )
  }
}
