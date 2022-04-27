import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import convergenSEEBlogFeb from "./../../image/convergenSEEBlogFeb.jpg"
import blackOwnedBusinessImg from "./../../image/black-owned-business.jpg"  
import gmbImg from "./../../image/gmb.jpg"   
import reviewsImg from "./../../image/reviews.jpg"  
import restaurantSearchesImg from "./../../image/RestaurantSearches.jpg"  
import $ from "jquery" 


export default class blogJanuary extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{"Local Search News: February 2021 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="This month in local search, updates made life just a little easier for businesses, marketers, and anybody driving local growth. Let's take a closer look."
          />
          <link rel="canonical" href={"/blog/local-search-news-february-2021"} /> 
          <meta name="twitter:description" content="This month in local search, updates made life just a little easier for businesses, marketers, and anybody driving local growth. Let's take a closer look."></meta>
          <meta name="facebook:title" content="Local Search News: February 2021 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: February 2021 | ConvergenSEE" ></meta>
          <meta property="og:description" content="This month in local search, updates made life just a little easier for businesses, marketers, and anybody driving local growth. Let's take a closer look." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: February 2021</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: February 2021 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">February 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogFeb} alt="convergenSEE Blog February 2021" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">Sometimes it's the subtlest changes that have the biggest impact. This month in local search, updates including desktop messaging and stars in review snippet made life just a little easier for businesses, marketers, and anybody interested in driving local growth. Let's take a closer look.</p>
                  
                  <h2 className="blogtextSubHead">Google Business Profile auto-populates services</h2>
                  <p className="blogtextContentBlog">It has become apparent that Google Business Profile (GBP) is auto-populating lists of provided services for countless businesses that have neglected to do so themselves. But this automated process—which seems to use data scraped from business's websites—isn't perfect, and business owners should check that the services Google populates are accurate and complete.</p>
                  <p className="blogtextContentBlog">For instance, imagine you run a plumbing company specializing in sump pump installations, but Google doesn't add it to your list of services on GBP. You're simply not going to appear in searches for sump pump installations, missing out on countless potential leads. In general, businesses should always manage GBP data themselves (or enlist a trusted partner) rather than relying on automated processes.</p>

                  <h2 className="blogtextSubHead">Google adds black-owned business label</h2>
                  <p className="blogtextContentBlog">During Black History Month, Google added a “black-owned business” label for eligible businesses with product listings in Google Shopping. It uses the same icon as the equivalent label in GBP.</p>
                  <div className="mapimagediv mb-4 mt-5">
                  <img src={blackOwnedBusinessImg} alt="black Owned Business" className="img-fluid mb-3"></img>
                  </div>
                  <p className="blogtextContentBlog">Google's efforts to compete with Amazon are paying dividends as more and more businesses opt in to Google Shopping. It has been one of the search giant's ambitions for years, of course, but the pandemic has condensed the timescale by several years—helped by the fact that Google's Product Feed shows in-store availability for items that have to be picked up in person. </p>

                  <h2 className="blogtextSubHead">Desktop messaging arrives for GBP</h2>
                  <p className="blogtextContentBlog">Long-time GBP users know that Google Messaging is incredibly useful, allowing leads and customers to text (rather than call) for common interactions like quotes, booking, and operating hours. Until now, however, it has been available on mobile only—and limited to just one phone number per account—so the expansion to desktop appears to be a win-win.</p>
                  <div className="mapimagediv mb-4 mt-4">
                  <img src={gmbImg} alt="Desktop messaging arrives for GBP" className="img-fluid mb-3"></img>
                  </div>
                  <p className="blogtextContentBlog">Upon enabling this feature in the “Messaging” tab of the GBP dashboard, businesses have the option to create an initial auto-reply for all incoming messages. Anyone with access to the GBP account can respond to messages, while businesses in specific categories can use “Get a Quote” or “Request a Booking” buttons to initiate messaging sessions with customers.</p>
                  <p className="blogtextContentBlog">Businesses that regularly fail to respond within 24 may have their messaging functionality turned off by Google. Thankfully, spam can be marked as such and will not count towards the 24-hour deadline—and individual users can be blocked if necessary. Expect full desktop messaging functionality by early March.</p>

                  <h2 className="blogtextSubHead">Review snippets now include stars</h2>
                  <p className="blogtextContentBlog">The Knowledge Panel gets a minor upgrade this month, with review snippets now being accompanied by their corresponding star ratings.</p>
                  <div className="mapimagediv mb-4 mt-4">
                  <img src={reviewsImg} alt="Review snippets now include stars" className="img-fluid mb-3"></img>
                  </div>
                  <p className="blogtextContentBlog">Businesses have no way to control which review snippets show up in the Knowledge Panel, but should be aware that Google almost always includes at least one negative review for businesses with an average rating of 4.2 stars or lower. Reaching and exceeding 4.3 stars appears to banish those negative reviews, which reiterates the importance of generating positive reviews.</p>
                  <p className="blogtextContentBlog">On a related note, Google has also removed all review snippets for attorneys. Why? Because the law industry tends to suffer from a disproportionate amount of spam. The search giant has decided that no reviews snippets are better than fraudulent review snippets.</p>
                
                  <h2 className="blogtextSubHead">Restaurant searches get a new filter</h2>
                  <p className="blogtextContentBlog">Feeling hungry? Restaurant searches on Google are now accompanied by a helpful “browse by” filter, allowing you to layer dining-specific attributes in your search, such as takeout, delivery, pizza, and other categories. </p>
                  <div className="mapimagediv mb-4 mt-4">
                  <img src={restaurantSearchesImg} alt="Restaurant searches get a new filter" className="img-fluid mb-3"></img>
                  </div>
                  <p className="blogtextContentBlog">It's a timely reminder for restaurants to include every relevant attribute on their GBP listings. From secondary categories to images of specific food items, every little aspect might be the difference between showing up prominently in search results or being buried further down.</p>

                  <h2 className="blogtextSubHead">Apple Maps and Bing adjust their Yelp integrations</h2>
                  <p className="blogtextContentBlog">Bing and Yelp have not being playing together nicely, and now it appears that Microsoft will sever ties entirely. In fact, the search engine has already bumped Yelp reviews in favor of those from Facebook and Foursquare.</p>
                  <p className="blogtextContentBlog">In contrast, Apple appears to be using Yelp data to display menu options on some restaurant listings. This is a viable tactic for US and Canada, but Apple will need to find alternative data sources for Europe, Asia, and other non-Yelp territories. Translation: Yelp's days may be numbered. </p>
                  <p className="blogtextContentBlog">Local search moves fast—but we move faster. <a href="/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Get in touch</a> with the experts at ConvergenSEE today.</p>

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
