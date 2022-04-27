import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer"
import googlerankbanner from  "../image/lokalBanner.png"
import localrank from "../image/aoda_10.jpg"
// import localimg from "../image/local-img.png"
// import colonimg from "../image/colonimg.png"

export default class googleRank extends Component {
  render() {
    return (
      <div className="convergensee-wrapper convergensee-googlerank">
          <Helmet>
            <title>{"Google Maps Local Rank Tracking | Local SEO | ConvergenSEE"}</title>
            <meta
              name="description"
              content="Local Rank + and measuring local search success."
            />
            <link rel="canonical" href={"/local-rank"} /> 
            <meta name="twitter:description" content="Local Rank + and measuring local search success."></meta>
            <meta name="facebook:title" content="Google Maps Local Rank Tracking | Local SEO | ConvergenSEE"></meta>
            <meta property='og:type' content='website' />
            <meta property="og:title" content="Google Maps Local Rank Tracking | Local SEO | ConvergenSEE" ></meta>
            <meta property="og:description" content="Local Rank + and measuring local search success." ></meta>
            <meta property='og:site_name' content="Convergensee" />
            <meta property="og:url" content={window.location.href} ></meta>
          </Helmet>
          <Header></Header>
          <main role="main">
            <div className="container convergensee-main">
              <h1 className="main-head" id="main" tabIndex="-1"> Google Maps Local Rank + </h1>
              <div className="col-md-12 platform-top-banner">
                <img className="img-fluid" src={googlerankbanner} alt="Desktop Computer with Maps Search results showing"/>
              </div>
            </div>

            <div className="convergensee-bg-white convergensee-bg-whitebtm">
              <div className="col-lg-8 col-md-12 m-auto">
                <h2 className="sub-head text-center my-4">Local Rank+ and measuring local search success</h2>
                <div className="subtext">Our proprietary Local Rank+ tool is unique. It allows users to see exactly how local business listings are appearing in specific searches from a specific physical location.</div>
                <div className="subtext">Why is this important? For the very first time, we can identify where to focus optimization efforts to drive the greatest impact on your clients’ businesses. It also provides insight into what types of optimization are most appropriate (GBP, Google Ads, local SEO).</div>
              </div>
            </div>  
            <div className="col-md-12 platform-local-banner">
                <img className="img-fluid" src={localrank} alt="Open map with a pin dropped in the middle" />
              </div>
            
            {/* <div className="convergensee-bg-theme">
              <div className="col-lg-8 col-md-12 m-auto">
                <p className="subtext my-3">Instead of doing Posts, Q&A, Spam Clean, or any other GBP optimization across the board for all locations, Local Rank + enables us to focus on the locations that are closest to getting into the 3-pack and therefore most apt to have a dramatic impact on driving revenue for your business. ConvergenSEE also provides your brand with a robust online dashboard and email reports that include insights on:</p>
                <div className="row local-box-main">
                  <div className="col-md-6">
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Keyword rankings based on a searcher's proximity to your business                  
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Phone calls
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Requests for driving directions
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Website visits
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      An ROI calculator
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Listing visibility, accuracy, and content analysis data
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Data syndication status
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Review report cards
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Sentiment analysis
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      And much more
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            
            <div className="convergensee-bg-white pt-0">
              <div className="container">
                <h3 className="sub-head subtext-bold">What it is:</h3>
                <p className="subtext">
                Local Rank+ will provide you with valuable month to month insights on how your clients’ locations rank, not only by keyword, but also by their proximity to the searcher. By specifying the search in set placements around their locations, you can track how their rankings change as customers move around the physical location. Just as importantly, you will be able to check in on how their competitors are ranking as well. With a better understanding of the competition, you’ll know exactly where you need to optimize.
                </p>
                <h3 className="sub-head subtext-bold">The result:</h3>
                <p className="subtext">
                Every month you will receive new data to learn how your clients’ businesses rank for their customers standing right outside and for the customers down the road. The differences in these rankings will provide direction for not only optimizing their listings, but also developing more focused marketing campaigns that are tailored to each individual location. That means resources will be used more efficiently, leading to better ROI. Hyper-local optimization doesn’t just mean walking distance from the business. It means optimizing for wherever the prospective customers happen to be. Whether you want to optimize business listings for local foot traffic or want to focus on the entire surrounding community, Local Rank+ will let you know exactly where a business stands and how to improve.
                </p>
                {/* <div className="sub-head text-center">Features and benefits</div> */}
                {/* <p className="subtext subtext-bold subtext-width">Features and benefits of ConvergenSEE's Local Rank+ tool and Digital Presence Management Platform include:</p> */}
                {/* <div className="row local-box-main px-0 px-md-5">
                  <div className="col-md-6">
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Keyword rankings based on a searcher's proximity to your business              
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Integration with GBP Insights
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      A Google ROI calculator
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Facebook reporting
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Bing Places for Business reporting
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Foursquare for Business reporting
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Phone call tracking
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Sentiment analysis
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Data-driven optimization recommendations and actions that support not only proper listings management, but also improve your ROI in Google Ads and local SEO efforts                  
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Requests for driving directions
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Website visits	
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Listing visibility, accuracy, and content analysis data
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Data syndication status reporting
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      Review report cards
                    </div>
                    <div className="local-box-brdrlist">
                      <img src={colonimg} alt="colon img"></img>
                      And much more
                    </div>
                  </div>
                  <div className="col-md-12 text-center mt-4">
                    <a href="./contact" role="button" className="commonButtonBrdr ml-0">FIND OUT MORE</a>
                  </div>
                </div> */}
              </div>
            </div>
          </main>
          <Footer></Footer>
      </div>
    )
  }
}
