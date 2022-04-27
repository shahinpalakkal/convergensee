
import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../../layout/header"
import Footer from "../../layout/footer"  
import convergenSEEBlogNovember from "./././../../image/convergenSEEBlogNovember.jpg"
import Googledirectory from "./../../image/Google-Maps-directory-tab.gif"
import GoogleMapspricerange from "./../../image/Google-Maps-price-range.gif"
import $ from "jquery" 


export default class blogNovember extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{" Local Search News: November 2021 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="Join us for a quick rundown of all the local search news you need to know from November 2021.  "
          />
          <link rel="canonical" href={"/blog/local-search-news-november-2021"} /> 
          <meta name="twitter:description" content="Join us for a quick rundown of all the local search news you need to know from November 2021.  "></meta>
          <meta name="facebook:title" content="Local Search News: November 2021 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: November 2021 | ConvergenSEE" ></meta>
          <meta property="og:description" content="Join us for a quick rundown of all the local search news you need to know from November 2021.  " ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: November 2021</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: November 2021 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">November 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogNovember} alt="convergenSEE Blog November 2021" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">The holidays are here, complete with some shiny new updates from Google. So, let's run through the most important developments in local search this month—and keep your business on the “nice” list this year!  </p>

                  <h2 className="blogtextSubHead">Goodbye, Google My Business! </h2>
                  <p className="blogtextContentBlog">Google My Business (GMB) is now Google Business Profile (GBP) as Google moves features from the Google My Business app to Google Search, Google Maps, and their respective apps. This is why Google has been adding these management features on desktop recently. As listings management becomes an increasingly important aspect of omnichannel marketing, Google is clearly trying to make it easier to optimize Google Business Profiles. </p>
                  
                  <p className="blogtextContentBlog">Of course, GBP was originally Google Places before it was Google My Business—and Google+ Local before that. The branding update is par for the course; what really matters is that Google is focusing on ease of use for users to manage their listings directly in search and on desktop. </p>

                  <h2 className="blogtextSubHead">New local shopping features for Google Maps </h2>
                  <p className="blogtextContentBlog">Google Maps now has four new features to improve the local shopping experience:  </p>
                  <ol className="blogtextContentBlog pl-4 mt-2 blogtextContentBlogMargin">
                    <li><p>Area Busyness </p></li>
                    <p className="blogtextContentBlog">Google already shows foot traffic for individual businesses, and it is now expanding the feature to cover entire shopping districts. Users can check how busy a particular area is, with data aggregated from businesses close to each other. </p>
                    <p className="blogtextContentBlog">Area Busyness also reveals estimated future traffic in addition to current traffic. As the holiday season draws larger crowds—and the pandemic persists—this information could prove to be very useful. </p>
                    
                    <li><p>Directory tab</p></li>
                    <p className="blogtextContentBlog">Google Maps already generates directories for shopping malls and sports arenas. Now it's rolling out the feature (Android and iOS) for all airports, malls, arenas, and transit stations. Users will be able to locate waiting areas, parking lots, and, of course, the whereabouts of specific businesses inside these complexes. </p>
                    <div className="mapimagediv">
                        <img src={Googledirectory} alt="Google Maps directory tab" className="img-fluid mb-4 mt-4" width="210" height="440"></img>
                    </div>
                    <p className="creditlink">GIF: Google </p>
                    <p>If you have locations inside these larger establishments, it's crucial to make sure you're visible to users browsing these directories. </p>

                    <li><p>Grocery shopping </p></li>
                    <p className="blogtextContentBlog">After adding a grocery pickup feature to Google Maps earlier this year, Google has since expanded the feature to more than 2,000 locations and 30 states across the US. At time of writing, customers can order groceries from Kroger, Fry’s, Ralphs, and Marianos directly from Google Maps. </p>

                    <li><p>More information about restaurants </p></li>
                    <p className="blogtextContentBlog">When Google users write restaurant reviews, they can now share specific details about price range, amenities, delivery, curbside pickup, and more. Listing owners have long been able to do this manually, but the search giant is now scraping review content to surface this information more reliably. Want to avoid inaccuracies? Make every attempt to publish this information yourself instead of relying on your reviewers to do so. </p>
                    <div className="mapimagediv">
                        <img src={GoogleMapspricerange} alt="Price range feature on Google Maps" className="img-fluid mb-4 mt-4" width="279" height="599" ></img>
                    </div>
                    <p className="creditlink">GIF: Google </p>
                    <p className="blogtextContentBlog">Users can rate prices based on $10 increments and, unlike other fields like amenities, price ranges are entirely determined by users rather than listing owners. </p>
                  
                  
                  </ol>
                
                    
                  <h2 className="blogtextSubHead">Google update targets spam </h2>
                  <p className="blogtextContentBlog">After rolling out its fourth spam update of 2021, Google is claiming that 99% of its searches are now spam-free. Of course, that leaves the unfortunate 1% of industries still struggling in the fight against spam—such as locksmiths, lawyers, and insurance agents. </p>
                  <p className="blogtextContentBlog">If you're in one of these spam-afflicted industries, keep a close eye on your listings. Whenever Google updates its search ranking algorithms, you may fare better or worse than expected, so it's important to know when Google makes these updates to understand the cause of your ranking change.  </p>
                  <p className="blogtextContentBlog">Whether there has been an algorithm update or not, always follow SEO best practices and maintain an organic ranking that is less prone to algorithm volatility. </p>
                  
                 

                  <h2 className="blogtextSubHead">Google introduces call history and read receipts </h2>
                  <p className="blogtextContentBlog">Messaging on Google listings is especially useful for home repair, tech support, and automotive repair—in fact, any business where customers may get in touch via listings to ask routine questions or request a quote. With that in mind, Google has added read receipts for customers on both Search and Maps. </p>
                  <p className="blogtextContentBlog">Google is also testing a new “call history” feature for select businesses in the US and Canada, making it easier for them to connect with customers who reach out via Google. Any calls received via your Business Profile will begin with a short message to confirm that they’re from a Google touch point. </p>
                  <p className="blogtextContentBlog">Ready to get ahead in 2022? We're here to help. <a href="https://www.convergensee.com/contact" target="_blank" rel="noopener noreferrer" className="linkunderline"> Let's talk</a>! </p>

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
