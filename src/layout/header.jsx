import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"
import "../css/responsive.css"
import "../css/font-awesome.min.css"
import Logoheader from "../image/logo.png"
import menu from "../image/hamburger.png"
// import LogoheaderMajentha from  "../image/logo-majentha.png"
// import LogoheaderOrange from  "../image/logo-orange.png"
// import LogoheaderGreen from  "../image/logo-green.png"
// import LogoheaderBlue from  "../image/logo-blue.png"
import { Link } from "react-router-dom";
import $ from "jquery"

export default class header extends Component {
  menuClick() {
    $(".menu ul").slideToggle();
  }
  componentDidMount() {

    var dataLayer = window.dataLayer || [];
    // $(".logo").on("click", function() {
    //   dataLayer.push({
    //     "event": "trackEvent",
    //     "eventCategory": "Top Header",
    //     "eventAction": "Logo click"
    //   });

    //   console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
    // });
    let datalayereventAction;
    let datalayerHrefLabel;

    $(".header a").on("click", function () {
      datalayereventAction = $(this).text();
      datalayerHrefLabel = $(this).attr("href").replace('/', '');     
      dataLayer.push({
        "event": "trackEvent",
        "eventCategory": "Header",
        "eventlabel": datalayerHrefLabel,
        "eventAction": datalayereventAction + " click"
      });
      console.log('dataLayer: ' + JSON.stringify(dataLayer[dataLayer.length - 1]));
    });
   
    // $(".contact-det .phone-link").on("click", function () {
    //   datalayereventAction = $(this).text();
    //   datalayerHrefLabel = $(this).attr("href").replace('/', '');     
    //   dataLayer.push({
    //     "event": "trackEvent",
    //     "eventCategory": "Footer-navigation",
    //     "eventlabel": datalayerHrefLabel,
    //     "eventAction": datalayereventAction + " click"
    //   });
    //   console.log('dataLayer: ' + JSON.stringify(dataLayer[dataLayer.length - 1]));
    // });

    $(".footer-logo a").on("click", function () {
      datalayereventAction = $(this).text();
      datalayerHrefLabel = $(this).attr("href").replace('/', '');     
      dataLayer.push({
        "event": "trackEvent",
        "eventCategory": "Footer-logo",
        "eventlabel": datalayerHrefLabel,
        "eventAction": datalayereventAction + " click"
      });
      console.log('dataLayer: ' + JSON.stringify(dataLayer[dataLayer.length - 1]));
    });
    $(".footer-navigation a").on("click", function () {
      datalayereventAction = $(this).text();
      datalayerHrefLabel = $(this).attr("href").replace('/', '');     
      dataLayer.push({
        "event": "trackEvent",
        "eventCategory": "Footer-navigation",
        "eventlabel": datalayerHrefLabel,
        "eventAction": datalayereventAction + " click"
      });
      console.log('dataLayer: ' + JSON.stringify(dataLayer[dataLayer.length - 1]));
    });
    $(".footer-socialDiv a").on("click", function () {
      // e.preventDefault()
      datalayereventAction = $(this).text();
      datalayerHrefLabel = $(this).attr("href").replace('/', '');     
      dataLayer.push({
        "event": "trackEvent",
        "eventCategory": "Footer-social",
        "eventlabel": datalayerHrefLabel,
        "eventAction": datalayereventAction + " click"
      });
      console.log('dataLayer: ' + JSON.stringify(dataLayer[dataLayer.length - 1]));
    });
    $(".banner a,.convergensee-main a,.working-agency-main a,.convergensee-makesure a,.local-listing-management a,.locator-local a,.reputation-management a" ).on("click", function () {
      datalayereventAction = $(this).text();
      datalayerHrefLabel = $(this).attr("href").replace('/', '');      
      dataLayer.push({
        "event": "trackEvent",
        "eventCategory": "link Click",
        "eventlabel": datalayerHrefLabel,
        "eventAction": datalayereventAction + " click"
      });
      console.log('dataLayer: ' + JSON.stringify(dataLayer[dataLayer.length - 1]));
    });

    $("html, body").animate({ scrollTop: 0 }, "slow");

    $("#link-platform-Arrow").show();
    $("#link-platform-upArrow").hide();

    $(document).on("click", function (event) {
      var $trigger = $(".link-dropdown");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".subMenuMain").slideUp("fast");
        $("#link-platform-Arrow").show();
        $("#link-platform-upArrow").hide();
      }
    });
    $(".link-dropdown").click(function () {
      $(this).find(".subMenuMain").slideToggle("fast");
      $(this).find("#link-platform-Arrow").toggle();
      $(this).find("#link-platform-upArrow").toggle();
    });

    var focus = 0;
    $("#linkpartnrsubid").focusout(function () {
      focus++;
      $(".subMenuMain").hide();
      $("#link-platform-Arrow").show();
      $("#link-platform-upArrow").hide();

    });
    $("#link-platform-Arrow1").show();
    $("#link-platform-upArrow1").hide();

    $(document).on("click", function (event) {
      var $trigger = $(".link-dropdown");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".subMenuMain1").slideUp("fast");
        $("#link-platform-Arrow1").show();
        $("#link-platform-upArrow1").hide();
      }
    });
    $(".link-dropdown").click(function () {
      $(this).find("#subMenuMain").show();
      $(this).find("#link-platform-Arrow1").toggle();
      $(this).find("#link-platform-upArrow1").toggle();
    });

    var focus = 0;
    $("#linkpartnrsubid1").focusout(function () {
      focus++;
      $(".subMenuMain").hide();
      $("#link-platform-Arrow1").show();
      $("#link-platform-upArrow1").hide();

    });
  }

  render() {

    return (
      <header>
        {/* <div className="skipOuterDiv">
          <a className="skip-main" href="#main">Skip to Content</a>
          </div> */}
        <a className="skip-main" href="#main" id="skip-main" >Skip to main content</a>
        <div className="container header pt-3">
          <div className="logo linknodropdwn">
            <Link to="/" className='logo-img'>
              <img src={Logoheader} alt="ConvergenSEE home" className="normal-logo"></img>
              <span>Logo</span>
              {/* <img src={LogoheaderOrange} alt="Logo header" className="orange-logo"></img>
                  <img src={LogoheaderMajentha} alt="Logo header" className="majentha-logo"></img>
                  <img src={LogoheaderBlue} alt="Logo header" className="blue-logo"></img>
                  <img src={LogoheaderGreen} alt="Logo header" className="green-logo"></img> */}
            </Link>
          </div>
          <div className="menu">
            <button className="menuIcon" onClick={() => this.menuClick()}><img src={menu} alt="menu"></img></button>
            <nav role="navigation" aria-label="main navigation">
              <ul className="mb-0">
                <li className="link-dropdown link-platform">
                  <Link  id="link-platform" className="platformColorfont" aria-expanded="false" aria-haspopup="true" >Platform & Products
                    <span role="presentation"></span><i className="fa fa-angle-down ml-2" role="presentation" alt="" id="link-platform-Arrow"></i>
                    <i className="fa fa-angle-up ml-2" role="presentation" alt="" id="link-platform-upArrow"></i>
                  </Link>
                  <div className="subMenuMain  arrow-up" aria-labelledby="navbarDropdown">
                    <div className="subMenuList">
                      <Link to="/listings-management">Listings Management</Link>
                    </div>
                    <div className="subMenuList">
                      <Link to="/reputation-management">Reputation Management</Link>
                    </div>
                    <div className="subMenuList">
                      <Link to="/local-rank">Local Rank+ Analytics </Link>
                    </div>
                    <div className="subMenuList">
                      <Link to="/locator-local">Locator & Local Pages  </Link>
                    </div>
                    <div className="subMenuList">
                      <Link to="/platform-products" id="linkpartnrsubid">All Platforms & Products  </Link>
                    </div>
                  </div>
                </li>
                <li className="linknodropdwn link link-partners"><Link to="/partners" id="link-partners">For Partners</Link></li>
                <li className="linknodropdwn link"><Link to="/company" id="link-company">Company</Link></li>
                {/* <li className="linknodropdwn"><Link to="/blog" id="link-company">Blog</Link></li> */}

                <li className="link-dropdown">
                  <Link  id="link-platform1" className="platformColorfonts" aria-expanded="false"
                    aria-haspopup="true" >RESOURCES
                    <span role="presentation"></span>
                    <i className="fa fa-angle-down ml-2" role="presentation" alt="" id="link-platform-Arrow1"></i>
                    <i className="fa fa-angle-up ml-2" role="presentation" alt="" id="link-platform-upArrow1"></i>
                  </Link>
                  <div className="subMenuMain arrow-up submenu-guide" aria-labelledby="navbarDropdown" id="subMenuMain">
                    <div className="subMenuList">
                      <Link to="/guides">Guides </Link>
                    </div>
                    <div className="subMenuList ">
                      <Link to="/blog" id="linkpartnrsubid1">Blog</Link>
                    </div>

                  </div>
                </li>

                <li className="linknodropdwn link link-team"><Link to="/team" id="link-team">Our People</Link></li>
                {/* <li><Link to="/presence-finder" id="link-finder">Presence Finder</Link></li> */}
                <li className="linknodropdwn link mr-0"><Link to="/contact" role="button" id="link-contact" className="commonButton text-capitalize mr-0 contact-us mbl-hide">Contact Us</Link></li>
                <li className="linknodropdwn link mr-0  mb-0 mt-0 link-mblreq" onClick={(e) => { $('html, body').animate({
        scrollTop: $("#mbl-you-convergensee-id").offset().top
    }, 100); }}><Link to="#" role="button" id="link-contact" className="commonButton text-capitalize mr-0 contact-us req-demo commonbtn-mbl">Request a demo !</Link></li>

              </ul>
            </nav>
          </div>


        </div>
        {/* <a className="skip-main" href="#main">Skip to main content</a> */}
      </header>
    )
  }
}
