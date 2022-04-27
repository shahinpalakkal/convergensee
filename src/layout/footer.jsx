import React, { Component } from 'react';
// import sendimg from "../image/send.png"
// import sendimgw from "../image/sendw.png"
// import instagram from "../image/instagram.png";
import Logowhite from  "../image/logoW.png"
import facebook from "../image/facebook.png";
import twitter from "../image/twitter.png";
import linkedin from "../image/linkedin.png";
import {Link} from "react-router-dom";


export default class footer extends Component {
//   componentDidMount()
//   {

//     var dataLayer = window.dataLayer || [];
// $(".footer-linkHead img").on("click", function() {
//   dataLayer.push({
//     "event": "trackEvent",
//     "eventCategory": "Footer",
//     "eventAction": "Footer Logo Click"
//   });

//   console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
// });
// var dataLayer = window.dataLayer || [];
// $(".footer-box .footer-linkHead, .footer-box .footer-linktext").on("click", function() {
//   var datalayerTextfooterMenu = $(this).text();
//   dataLayer.push({
//     "event": "trackEvent",
//     "eventCategory": "Footer-links ",
//     "eventAction": datalayerTextfooterMenu+" Click"
//   });

//   console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
// });
//   }
  render() {
    return (
      <footer className="footer">
        {/* <div className="newsletter-main">
          <span className="newsletter-text">Sign up for the latest news in local search </span>
          <span className="newsletter-input">
            <input type="text" placeholder="Enter your email" className="newsletter-field"></input>
            <button type="button" className="newsletter-btn imgshowhide"><img alt="send img" src={sendimg} className="imgshow" width="20"></img><img className="imghide" alt="send img white" src={sendimgw} width="20"></img></button>
          </span>
        </div> */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="footer-box">
                <div className="footer-linkHead footer-logo">
                <Link to="/" className='logo-img'>
                <img src={Logowhite} alt="ConvergenSEE Logo" className="img-fluid" width="200"/>
                <span>Footer Logo</span>
            </Link>
                  
                </div>
                <p className="subtext">ConvergenSEE was founded in 2015 and is the white label subsidiary of <a href="https://www.dacgroup.com/" target="_blank"  rel="noopener noreferrer" aria-label="https://www.dacgroup.com" style={{color:"#fff"}}>DAC</a>, a full-service digital company.</p>
              </div>
              <div className="footer-box footer-navigation">
                <div className="footer-linkHead">About</div>
                <div className="footer-linktext"><Link to="/company">Company</Link></div>
                <div className="footer-linktext"><Link to="/partners">For Partners</Link></div>
                {/* <div className="footer-linktext"><a href="../convergensee/blog">Blog</a></div> */}
                <div className="footer-linktext"><Link to="/contact" className="text-capitalize">Contact Us</Link></div>
              </div>
              <div className="footer-box footer-navigation">
                <div className="footer-linkHead">Platform & Products</div>
                <div className="footer-linktext"><Link to="/listings-management">Listings Management</Link></div>
                <div className="footer-linktext"><Link to="/reputation-management">Reputation Management</Link></div>
                <div className="footer-linktext"><Link to="/local-rank">Local Rank + Analytics</Link></div>
                <div className="footer-linktext"><Link to="/locator-local">Locator & Local Pages</Link></div>
              </div>
              <div className="footer-box footer-socialDiv pr-0">
                <div className="footer-linkHead pl-2">Social</div>
                {/* <div className="footer-linktext"><a href="#"><img src={instagram} alt="instagram" width="28"></img> Instagram</a></div> */}
                <div className="footer-linktext"><Link to={{pathname:"https://www.facebook.com/convergensee/"}} target="_blank"><img src={facebook} alt="" width="28"></img> Facebook</Link></div>
                <div className="footer-linktext"><Link to={{pathname:"https://www.linkedin.com/company/convergensee"}} target="_blank"><img src={linkedin} alt="" width="28"></img> LinkedIn</Link></div>
                <div className="footer-linktext"><Link to={{pathname:"https://twitter.com/convergensee"}} target="_blank"><img src={twitter} alt="" width="25"></img> Twitter</Link></div>
              </div>
            </div>
            <div className="copyright">© 2020 ConvergenSEE. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    )
  }
}
