import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import convergenSEEBlogMarch from "./../../image/convergenSEEBlogMarch.jpg"
import googleFreeHotelListings from "./../../image/google-free-hotel-listings.gif"  
import estimatedCostNearYou from "./../../image/estimated-cost-near-you.jpg"
import orderOnlineImg from "./../../image/orderOnline.jpg"
import $ from "jquery" 


export default class blogMarch extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{"Local Search News: March 2021 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="March ushered in a series of changes in local search. Some updates are experimental, others overdue, and all are worth checking out. Let's get to it."
          />
          <link rel="canonical" href={"/blog/local-search-news-march-2021"} /> 
          <meta name="twitter:description" content="March ushered in a series of changes in local search. Some updates are experimental, others overdue, and all are worth checking out. Let's get to it."></meta>
          <meta name="facebook:title" content="Local Search News: March 2021 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: March 2021 | ConvergenSEE" ></meta>
          <meta property="og:description" content="March ushered in a series of changes in local search. Some updates are experimental, others overdue, and all are worth checking out. Let's get to it." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: March 2021</li>
            </ol>
          </nav>

          <nav className="container breadcrumb-det mob-show pt-2" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
            </ol>
          </nav>
          
          <div className="container convergensee-main blogpost-main">
            <div className="row mt-0 mt-md-4">

              <div className="col-lg-12 col-md-12">
                <div className="col-md-12 pb-5">
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: March 2021 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">March 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogMarch} alt="convergenSEE Blog March 2021" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">March ushered in a series of changes in local search, from free Google Hotels listings to a handy new "estimated cost" field in the local pack. Some updates are experimental, others overdue, and all are worth checking out. Let's get to it. </p>
                  
                  <h2 className="blogtextSubHead">Google’s algorithm update</h2>
                  <p className="blogtextContentBlog">Google updated its local ranking algorithm at the end of February, and initial reports are suggesting that auto dealers, bars, and financial firms are among some of the most impacted businesses. But that doesn't necessarily mean a negative impact; instead, businesses in these categories should know that any unexpected gains or losses may be attributable to the algorithm.</p>
                  <p className="blogtextContentBlog">Fun fact: Google itself rarely understands the full impact of its algorithm updates, so the onus is on SEO experts to monitor fluctuations and determine whether or not a ranking change is due to an internal or external influence. As a result, there's nothing specific to do when algorithm updates are released into the wild. Simply continue to follow established best practice.</p>

                  <h2 className="blogtextSubHead">Google Hotels offers free listings</h2>
                  <p className="blogtextContentBlog">Google is known to occasionally offer free iterations of its direct sales platforms, including Google Shopping and Google Flights. Google Hotels can now be added to the list with free listings that appear in a new section for searchers using the "all options" method.</p>
                  <p className="blogtextContentBlog">This being Google, paid hotel listings still outrank their free counterparts, but scroll past these paid placements to see free booking links ranked according to their relevance to the user. Fortunately, bookings made through these free placements do not attract the usual fees from booking partners.</p>
                  <div className="mapimagediv">
                  <img src={googleFreeHotelListings} alt="google free hotel listings" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="creditlink">Credit: Google </p>
                  <p className="blogtextContentBlog">Lower overall volume during the pandemic gives Google time to iron out any kinks as it seeks to establish itself as the all-encompassing advertising and sales platform for travel and accommodation—a mission that includes taking on the likes of Yelp and Trip Advisor. Hotels and travel companies interested in participating in Google Hotels are advised to review <a href="https://support.google.com/hotelprices/answer/10472394" target="_blank" rel="noopener noreferrer" className="linkunderline">Google’s official guidance</a> on the subject.</p>
               
                  <h2 className="blogtextSubHead">“Estimated cost near you” added to the local pack</h2>
                  <p className="blogtextContentBlog">Google is displaying the estimated costs of home improvement services directly in search results. Generated using data from Homewyse, these estimated costs are not guaranteed by either Google or the business itself.</p>
                  <img src={estimatedCostNearYou} alt="Estimated cost near you" className="img-fluid mb-4 mt-4 imgBlogPOst"></img>
                  <p className="blogtextContentBlog">Is this another step towards Google's "clickless" end goal? Possibly. With more conversion-critical information appearing on Google’s SERP, users have less impetus to click through to websites or landing pages. On the other hand, anybody who actually does click through is highly qualified, having seen a host of useful information and still deciding to proceed. In that sense, ranking in the local pack—with its highly qualified users—is more important than ever.</p>
                  <p className="blogtextContentBlog">If your business offers products or services locally, take the time to review your price estimates. You don't want to earn a place in the local pack only for users to be greeted with a much higher price tag when they take their interest to the next level.</p>

                  <h2 className="blogtextSubHead"> “Order online” buttons become native to Google Business Profile</h2>
                  <p className="blogtextContentBlog">Those big blue “Order online” buttons are becoming ubiquitous for restaurant listings in Google Business Profile (GBP), even for businesses that have third-party partnerships nor integration with Order Food with Google.</p>
                  <div className="mapimagediv">
                  <img src={orderOnlineImg} alt="Order online" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="blogtextContentBlog">But there is a catch: If a restaurant offers more than one ordering service, it cannot control which service the button will trigger. At time of writing, there is no way to specify a default or preferred method—or even determine which services are eligible for inclusion. Either way, this prominent call to action is sure to continue driving conversions.</p>

                  <h2 className="blogtextSubHead">Survey: Customer photos influence purchase decisions</h2>
                  <p className="blogtextContentBlog">Every business knows its GBP listings should be full of relevant imagery. What is less commonly understood is that there are huge benefits to be had when you encourage customers to upload their own images to your listings and profiles.</p>
                  <p className="blogtextContentBlog">A recent <a href="https://www.emarketer.com/content/user-generated-visual-content-influence-purchases" target="_blank" rel="noopener noreferrer" className="linkunderline">eMarketer survey</a> found that consumers are more inclined to buy a particular product if they see photos of it uploaded by their peers. Shoppers in the US, Canada, Australia, France, Germany, and the UK were asked about additional context about a product (such as customer photos). They responded:</p>
                  <ul className="blogtextContentBlog pl-4 mt-4 mb-4 blogtextContentBlogMargin">
                    <li><p>It may highlight something that wasn’t obvious (24%)</p></li>
                    <li><p> Like to see a product in action before they buy (21%)</p></li>
                    <li><p>Feel more confident that the reviews are accurate (17%)</p></li>
                    <li><p>It’s easier to see the quality of a product (17%)</p></li>
                    <li><p>It’s easier to see the size/fit or color of a product (11%)</p></li>
                    <li><p>It’s easier to see the material of a product (7%)</p></li>
                  </ul>
                  <p className="blogtextContentBlog">Most of the reasons can be addressed by the business itself—if the resources are available. But time, money, and effort can be saved by crowdsourcing the same kind of content from customers. Just remember that user-generated content (UGC) will always need to be closely vetted.</p>
                  <p className="blogtextContentBlog">Want to save time and effort in local search so you can focus on more pressing matters? Our products and services are tailored to do exactly that. <a href="/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Let's talk</a>!</p>


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
