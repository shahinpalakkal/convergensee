import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer"
import locatorbanner from  "../image/locatorbanner.png"
import {Link} from "react-router-dom";
// import localimg from "../image/local-img.png"
// import colonimg from "../image/colonimg.png"

export default class locatorLocal extends Component {
  render() {
    return (
      <div className="convergensee-wrapper convergensee-locator">
          <Helmet>
            <title>{"Local Location Landing Pages | Local SEO | ConvergenSEE"}</title>
            <meta
              name="description"
              content="As Google and other digital discovery platforms—including voice assistants—proliferate and make it easier for customers and prospects to ask questions and post information about you’re a brand, managing the brand's digital footprint becomes both more complex and more important than ever."
            />
            <link rel="canonical" href={"/locator-local"} /> 
            <meta name="twitter:description" content="As Google and other digital discovery platforms—including voice assistants—proliferate and make it easier for customers and prospects to ask questions and post information about you’re a brand, managing the brand's digital footprint becomes both more complex and more important than ever."></meta>
            <meta name="facebook:title" content="Local Location Landing Pages | Local SEO | ConvergenSEE"></meta>
            <meta property='og:type' content='website' />
            <meta property="og:title" content="Local Location Landing Pages | Local SEO | ConvergenSEE" ></meta>
            <meta property="og:description" content="As Google and other digital discovery platforms—including voice assistants—proliferate and make it easier for customers and prospects to ask questions and post information about you’re a brand, managing the brand's digital footprint becomes both more complex and more important than ever." ></meta>
            <meta property='og:site_name' content="Convergensee" />
            <meta property="og:url" content={window.location.href} ></meta>
          </Helmet>
          <Header></Header>
          <main role="main">
            <div className="container convergensee-main mb-5">
              <h1 className="main-head" id="main" tabIndex="-1"> Locator & Local Pages </h1>
              <div className="col-md-12 platform-top-banner px-0">
                <img className="img-fluid" src={locatorbanner} alt="Three tablet screens showing financial reports"/>
              </div>
            </div>

            <div className="convergensee-bg-theme">
              <div className="container">
                  <div className="col-lg-9 col-md-12 m-auto px-0">
                    <h2 className="sub-head text-center">Your local pages</h2>
                    <div className="subtext">As Google and other digital discovery platforms—including voice assistants—proliferate and make it easier for customers and prospects to ask questions and post information about you’re a brand, managing the brand's digital footprint becomes both more complex and more important than ever.</div>
                    <div className="subtext">Our Locator and Local Page Generator provides a tool to answer consumer questions and more effectively control the information they see and when they see it.</div>
                    <div className="subtext">ConvergenSEE's local pages can be created pulling data from our Digital Presence Management platform and/or can be customized as needed. In either case, you areprovided with an easy-to-use content management system allowing you to create, update, review, and publish content at both the corporate and local levels of your clients. As such, the brand can have as much control of messaging as they desire, while providing local offices or franchisees with the tools to create, update, and manage content and promotions for their local audiences.</div>
                  </div>
              </div>
            </div>
            

            <div className="convergensee-bg-white locator-local">
              <div className="container">
                <h3 className="sub-head text-center">Features and benefits of ConvergenSEE's Local Page Generator</h3>
                <p className="subtext text-center my-3 subtext-bold">Features and benefits of ConvergenSEE's Local Page Generator include: </p>
                <div className="row local-box-main pl-3 px-md-5">
                  <ul className="col-md-12 locallist-ul mb-0">
                    <li className="local-box-brdrlist col-md-11 local-box-brdrlistmargin">
                      A content management platform built for the unique needs of multi-location brands
                    </li>
                    <li className="local-box-brdrlist local-box-brdrlistmargin">
                      
                      Unique localized content
                    </li>
                    <li className="local-box-brdrlist local-box-brdrlistmargin">
                      
                      Local offers and promotions
                    </li>
                    <li className="local-box-brdrlist local-box-brdrlistmargin">
                      
                      Review snippets
                    </li>
                    <li className="local-box-brdrlist local-box-brdrlistmargin">
                      
                      Local events
                    </li>
                    <li className="local-box-brdrlist local-box-brdrlistmargin">
                      
                      Responsive design
                    </li>
      
                    <li className="local-box-brdrlist col-md-11 local-box-brdrlistmargin">
                      
                      Proper SEO set-up to ensure presence in local search and consistent organic search conversions
                    </li>
                    <li className="local-box-brdrlist local-box-brdrlistmargin">
                      
                      AMP (accelerated framework)
                    </li>
                    <li className="local-box-brdrlist local-box-brdrlistmargin">
                      
                      Centrally manage, edit, approve, and publish content to local pages
                    </li>
                    <li className="local-box-brdrlist local-box-brdrlistmargin">
                      
                      Create and publish information on local pages from the local office
                    </li>
                    <li className="local-box-brdrlist local-box-brdrlistmargin">
                      
                      Collect information from customers
                    </li>
                    <li className="local-box-brdrlist local-box-brdrlistmargin">
                      
                      Track click-through rates and conversions
                    </li>
                  </ul>
                  <div className="col-md-12 text-center mt-4">
                    <Link to="/contact" role="button" className="commonButtonBrdr ml-0 locator-local-find-out">FIND OUT MORE</Link>
                    {/* <a href="./contact" role="button" className="commonButton ml-0">SCHEDULE A DEMO TODAY!</a> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer></Footer>
      </div>
    )
  }
}
