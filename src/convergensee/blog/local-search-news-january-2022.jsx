import React, { Component } from 'react';
import { Helmet } from "react-helmet-async";
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import convergenSEEBlogJan2022 from "./../../image/convergenSEEBlogJan-2022.jpg"
import Roundup from "./../../image/roundup-jan-22-1.jpg" 
import Roundupgif from "./../../image/roundup-jan-22-2.gif" 
import Roundupgif2 from "./../../image/roundup-jan-22-3.gif"
import $ from "jquery" 


export default class blogJanuary2022 extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{"Local Search News: January 2022 | ConvergenSEE"}</title>
        <meta
          name="description"
          content="Change is afoot in local search, from Google Business Profile (GBP) updates to SERP shake-ups. Here's your local search news for January 2022."
          />
          <link rel="canonical" href={"/blog/local-search-news-january-2022"} /> 
          <meta name="twitter:description" content="Change is afoot in local search, from Google Business Profile (GBP) updates to SERP shake-ups. Here's your local search news for January 2022."></meta>
          <meta name="facebook:title" content="Local Search News: January 2022 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: January 2022 | ConvergenSEE" ></meta>
          <meta property="og:description" content="Change is afoot in local search, from Google Business Profile (GBP) updates to SERP shake-ups. Here's your local search news for January 2022." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: January 2022</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: January 2022 </h1>
                  <div className="bloguser-det my-3">
                  <div className="blog-detls">January 2022</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogJan2022} alt="convergenSEE Blog January 2022" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">It’s hard to believe January’s already behind us. Time slips by in local search, especially with a rush of new Google Business Profile (GBP) updates to kickstart the year. We’ll get you caught up with the top local search stories from January 2022.</p>
                  
                  <h2  tabIndex="-1" className="blogtextSubHead">Google launches “Shops” expansion for mobile search</h2>
                  <p className="blogtextContentBlog">Google’s ambitions have stretched beyond being the internet’s go-to search engine. Over the past few years Google has built up its own shopping ecosystem. Google platforms are continuing to expand buying options for users, with the most recent update including a “Shops” section for mobile search results. “Shops” on mobile populates up to 10 retailers with available items for customers. Proximity and organic search rankings determine which retailers appear in “Shops.” This feature is relatively new and only available to users in locations across the U.S.</p>
                  <div className="mapimagediv">
                    <img src={Roundup} alt="Google launches “Shops” expansion for mobile search" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="creditlink">Image: Search Engine Roundtable</p>
                  <p className="blogtextContentBlog">To keep up with the Amazon-s in the online shopping marketplace, vendor adoption is paramount. Google has courted vendors in the past by shifting many of its paid shopping offerings over to free product listings. The “Shops” mobile tab also comes with benefits for online retailers—vendors can boost products to more shoppers at no cost. Then on the shopping side, customers using Google get to explore a larger catalogue because of higher business participation.</p>

                  <h2 className="blogtextSubHead">GBP adds seven-day wait for Owner and Manager profile verification</h2>
                  <p className="blogtextContentBlog">Adding Owner and Manager profiles? Be prepared, GBP’s most recent security update requires some time and patience. The new update adds a seven-day wait period before certain profiles can fully use account capabilities. A week may seem long, but for online platforms strong cyber security is worth the time lost. Google’s intention is to keep unauthorized users from accessing management permissions first and foremost. GBPs are a high value customer touch point; strong, built-in protections are key to walling off bad actors.</p>
                  <p className="blogtextContentBlog">GBP security changes are included, as always, in Google’s updated help document. Newly created Owner or Manager profile will trigger errors if they attempt the following actions within the seven-day wait period:</p>
                  <ul className="blogtextContentBlog pl-4 mt-2 blogtextContentBlogMargin">
                    <li><p>Take off other owners or managers from a profile.</p></li>
                    <li><p>Move primary profile ownership to themselves or a third user.</p></li>
                    <li><p>Delete or undelete a profile.</p></li>
                    <li><p>Transfer primary ownership, using an existing owner or manager profile, to a new owner or manager within their first seven days.</p></li>
                  </ul>
                  <p className="blogtextContentBlog">If new Owner or Manager profiles delete their account in the first seven days, they will be removed from the profile. If they attempt to undelete the account, they must go through the new profile process again. </p>
          
                  <h2 className="blogtextSubHead">Google’s Cars for Sale feature makes in-roads with the Automotive industry</h2>
                  <p className="blogtextContentBlog">Cars are a big-ticket purchase most people will have to make in their lifetime. Google’s testing new ways for shoppers to scope out options with the “Cars for Sale” feature. Using their Business Profiles, select dealers can showcase their car inventory. Users can then explore dealer listings and cars for sale using Google search and filters. Car dealerships and authorized partners are responsible for directly providing their specific car inventory information.</p>
                  <div className="mapimagediv">
                    <img src={Roundupgif} alt="Google’s Cars for Sale feature" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="creditlink">GIF: Google</p>
                  <p className="blogtextContentBlog">“Cars for Sale” is still at a testing stage with open applications. Anyone can apply using Google’s <a href="https://docs.google.com/forms/d/e/1FAIpQLScRlW1TKcs5QPyCfkJgfRuzEwrHgjJuFvCiZQqVv7GjMozO4Q/viewform" target="_blank" rel="noopener noreferrer" className="linkunderline">Cars for Sale Interest Form</a>.</p>

                  <h2 className="blogtextSubHead">Want to call out a product? Now you can with GBP’s “Mark as Special” option.</h2>
                  <p className="blogtextContentBlog">Google Products are a flexible feature for businesses, inclusive of physical products and services. For example, if you run a computer repair shop replacement parts and repair services are both valid Products to include in your GBP knowledge panel. With Google’s latest update, businesses can now prioritize top billing products by marking them as “special” on a permanent or temporary basis. </p>
                  <p className="blogtextContentBlog">Within their Business Profile, all vendors need to do is check the “Mark as Special” box next to the Google Products they want highlighted. Businesses can select one or multiple Products to appear at the top of the list. When multiple products are marked “special”, Google orders top products based on the default order. </p>
                  
                 
                  <h2 className="blogtextSubHead">Google adds more layers to its “Things to do” feature</h2>
                  <p className="blogtextContentBlog">Google first announced the “Things to do” feature two years ago. It began as a tool to highlight hotels and nearby attractions for travellers. Now Google is testing ways to use “Things to do” to impact users both while they travel and when they reach their final destinations. The latest expansion features new explorable content for airports and transit stops.</p>
                  <div className="mapimagediv">
                    <img src={Roundupgif2} alt="Things to do" className="img-fluid mb-4 mt-4"></img>
                  </div>            
                  <p className="blogtextContentBlog">Transit stops and airports are an excellent arena to interact with a unique captive audience, because modern consumers heavily use their phones in these locations. Businesses operating nearby have a real opportunity to boost their presence with well-prepared listings. The competition against other stores, entertainment and restaurants is stiff, so make sure to be visible on Google.</p>
                  <p className="blogtextContentBlog">Motivated to start 2022 strong? We're here to help. <a href="/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Let's talk</a>!</p>

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
