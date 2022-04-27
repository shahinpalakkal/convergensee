import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer" 
// import history from "../image/history.png"
import aboutus from "../image/aoda_08.png"  
import customerfocus from "../image/customerfocus1.png" 
// import Logoblack from  "../image/logo-black.png"
import globalfootprint1 from "../image/globalfootprint1.png"  
import globalfootprint2 from "../image/globalfootprint2.png"  
// import testimonial1 from "../image/testimonial1.png"   
// import starimg from "../image/star.png"   
// import quotemarks from "../image/Quotemarks-right.png" 
import $ from "jquery" 
// import Slider from "react-slick";
// import "../css/slick.css"; 
// import "../css/slick-theme.css";

export default class company extends Component {
  componentDidMount()
  {
    $("#link-company").addClass("link-active");
  }
  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
    return (
      <div className="convergensee-wrapper">
        <Helmet>
          <title>{"Find Out More About ConvergenSEE | ConvergenSEE"}</title>
          <meta
            name="description"
            content="ConvergenSEE was founded in 2015 and is the white label subsidiary of DAC, a full-service digital agency that has been supporting the local marketing needs of multi-location brands since 1972."
          />
          <link rel="canonical" href={"/company"} /> 
          <meta name="twitter:description" content="ConvergenSEE was founded in 2015 and is the white label subsidiary of DAC, a full-service digital agency that has been supporting the local marketing needs of multi-location brands since 1972."></meta>
          <meta name="facebook:title" content="Find Out More About ConvergenSEE | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Find Out More About ConvergenSEE | ConvergenSEE" ></meta>
          <meta property="og:description" content="ConvergenSEE was founded in 2015 and is the white label subsidiary of DAC, a full-service digital agency that has been supporting the local marketing needs of multi-location brands since 1972." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
        </Helmet>
          <Header></Header>
          <main role="main">
            <div className="container convergensee-main">
              <div className="row mt-3">
                <div className="col-lg-6 partner-rightpadng company-image-top">
                  <img src={aboutus} alt="Team members collaborate at a desk" className="img-fluid"></img>
                </div>
                <div className="col-lg-6 company-text-top"> 
                  {/* <img src={Logoblack} alt="convergensee logo" className="img-fluid" width="200"></img> */}
                  <h1 className="main-head text-left my-2"  id="main" tabIndex="-1">About ConvergenSEE</h1>
                  <p className="subtext mt-3"> ConvergenSEE was founded in 2015 and is the white label subsidiary of DAC, a full-service digital agency that has been supporting the <span className="subtext-bold">local marketing needs of multi-location brands since 1972.</span>  </p>
                  <p className="subtext mb-4"> ConvergenSEE has deep operational, product development, and service delivery capabilities across North America and around the world. We currently <span className="subtext-bold">manage local listings and reputation for more than 200,000 locations</span> across 300 brands, agencies, and other resellers and employ <span className="subtext-bold">over 450 local digital marketing experts.</span>  </p>

                </div>
              </div>
            </div>

            <div className="py-5 mt-5" style={{backgroundColor:"#f3f7fa"}}>
                <div className="container my-5">
                  <div className="row px-md-0 px-3">
                    <div className="col-lg-6 company-text-top"> 
                      <h2 className="main-head text-left my-2">Customer Focus</h2>
                      <p className="subtext mt-3 mb-4"> Unlike our competitors, ConvergenSEE doesn't limit our solutions to our SaaS Digital Presence Management platform. Given the dynamic nature of the local search ecosystem, we recognize that technology alone is not sufficient to excel in this space. As such, we combine our world-class local search marketing platform with exceptional customer support. We work proactively with your team to ensure we are maximizing your return on your local search marketing efforts. We believe technology and active program management are the keys to a successful partnership. </p>
                    </div>
                    <div className="col-lg-6 partner-leftpadng company-image-top">
                      <img src={customerfocus} alt="A man and a woman collaborate at a computer" className="img-fluid"></img>
                    </div>
                </div>
              </div>
            </div>

            <div className="convergensee-bg-white">
              <div className="container">
                <div className="col-lg-9 col-md-12 m-auto">
                  <h3 className="main-head text-center mb-4">Global Footprint</h3>
                  <div className="subtext text-center">ConvergenSEE and DAC currently have 12 offices across North America and Europe. Combine that with key strategic partners in the Middle East, India, and Asia and we are well positioned to address the unique requirements of any and all markets in which your business currently operates. This includes sharing the local knowledge that will provide your brand with the edge you need to maximize your return from all the relevant discovery platforms in the market today.</div>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-5 mb-5">
                    <img src={globalfootprint1} alt="A seated person works at a laptop" className="img-fluid"></img>
                  </div>
                  <div className="col-lg-5">
                    <img src={globalfootprint2} alt="A man looks at his mobile phone while smiling" className="img-fluid"></img>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="convergensee-bg-theme testimonial-wrapper">
              <div className="testimonial-main">
                <div className="sub-head text-center my-4">Testimonials</div>
                <Slider {...settings}>
                  <div className="testimonial-list">
                    <div className="testimonial-img">
                      <img src={quotemarks} alt="quotemarks" className="quote-img img-fluid"></img>
                      <img src={testimonial1} alt="testimonial1" className="img-fluid"></img>
                    </div>
                    <div className="testimonial-starimg">
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                    </div>
                    <div className="testimonial-name"><span className="subtext-bold">Trevor Nadeau</span> - LocalKowledge.ae</div>
                    <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat</div>
                  </div>
                  <div className="testimonial-list">
                    <div className="testimonial-img">
                      <img src={quotemarks} alt="quotemarks" className="quote-img img-fluid"></img>
                      <img src={testimonial1} alt="testimonial1" className="img-fluid"></img>
                    </div>
                    <div className="testimonial-starimg">
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                    </div>
                    <div className="testimonial-name"><span className="subtext-bold">Trevor Nadeau</span> - LocalKowledge.ae</div>
                    <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat</div>
                  </div>
                  <div className="testimonial-list">
                    <div className="testimonial-img">
                      <img src={quotemarks} alt="quotemarks" className="quote-img img-fluid"></img>
                      <img src={testimonial1} alt="testimonial1" className="img-fluid"></img>
                    </div>
                    <div className="testimonial-starimg">
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                      <img src={starimg} alt="starimg" className="img-fluid"></img>
                    </div>
                    <div className="testimonial-name"><span className="subtext-bold">Trevor Nadeau</span> - LocalKowledge.ae</div>
                    <div className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat</div>
                  </div>
                </Slider>
              </div>
            </div> */}

            <div className="convergensee-bg-white convergensee-makesure text-center pt-0">
              <div className="main-head mb-5">
                <span className="main-head-bold d-block">Make sure your business</span> 
                can be found everywhere
              </div>          
              <a href="/contact" role="button" className="commonButton">SCHEDULE A DEMO TODAY!</a>

              {/* <a className="commonButton" role="button" style={{backgroundColor:"#000"}}>Platform & Products</a> */}
            </div>
          </main>
          <Footer></Footer>
      </div>
    )
  }
}
