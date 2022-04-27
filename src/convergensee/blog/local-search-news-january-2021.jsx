import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import convergenSEEBlogJan from "./../../image/convergenSEEBlogJan.jpg" 
import weedControlImg from "./../../image/weed-control.jpg" 
import lightbulbImg from "./../../image/light-bulb.jpg" 
import touch2Success from "./../../image/Touch2Success.jpg"
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
        <title>{"Local Search News: January 2021 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="A wild year may be over, but local search continues to change and adapt. Let's take a closer look at January's most significant updates."
          />
          <link rel="canonical" href={"/blog/local-search-news-january-2021"} /> 
          <meta name="twitter:description" content="A wild year may be over, but local search continues to change and adapt. Let's take a closer look at January's most significant updates."></meta>
          <meta name="facebook:title" content="Local Search News: January 2021 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: January 2021 | ConvergenSEE" ></meta>
          <meta property="og:description" content="A wild year may be over, but local search continues to change and adapt. Let's take a closer look at January's most significant updates." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: January 2021</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: January 2021 </h1>
                  <div className="bloguser-det my-3">
                  <div className="blog-detls">January 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogJan} alt="convergenSEE Blog January 2021" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">A wild year may be over, but local search continues to change and adapt. January actually brought a number of significant updates, including a new UI for Google listings, crowdsourced health and safety information, and an exciting new way to spotlight price drops in product-related searches. Let's take a closer look.</p>
                  
                  <h2  tabIndex="-1" className="blogtextSubHead">Google groups review snippets by topic (and adds third-party reviews)</h2>
                  <p className="blogtextContentBlog">The aim of Google review snippets, scraped from existing reviews, is to provide users with a snapshot of any given business. These snippets are given prominent placement on knowledge panels, either as part of the business profile itself (desktop) or on an dedicated card (mobile).</p>
                  <p className="blogtextContentBlog">January brought two changes to snippets: Google began organizing review snippets by topic and incorporated third-party reviews. So, for a user searching for a restaurant—specifically one that serves sushi—Google will present review snippets that mention sushi. </p>
                  <p className="blogtextContentBlog">This being Google, there is no way for businesses to control which snippets appear—and we know from experience that the search giant will include negative reviews for most businesses with 4.3 stars or less.</p>

                  <h2 className="blogtextSubHead">Changes for Google Business Profile service menus</h2>
                  <p className="blogtextContentBlog">Google Business Profile (GBP) recently added a "provides" highlight on both desktop and mobile SERPs. It's a simple update, but it adds a lot of value to the service menu, which has existed in GBP for years.</p>
                  <div className="mapimagediv">
                  <img src={weedControlImg} alt="weed Control" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="blogtextContentBlog">Google populates the "provides" field by scouring information in the business's website, reviews, and Google Posts. Crucially, it also uses this information to determine whether or not a listing should appear in a local 3-pack. Make sure you take advantage.</p>
                  
                  <h2 className="blogtextSubHead">Get ready for the Google "price drop"</h2>
                  <p className="blogtextContentBlog">As part of its ongoing feud with Amazon, Google has upgraded its shopping experience by adding a "price drop" rich result. Its new <a href="https://developers.google.com/search/docs/data-types/product#price-drop" target="_blank" rel="noopener noreferrer" className="linkunderline">product-related structured data guidelines</a> explain how businesses can utilize this eye-catching new feature.</p>
                  <img src={lightbulbImg} alt="Search Engine Land" className="img-fluid mb-4 mt-3 imgBlogPOst"></img>
                  <p className="creditlink">Image: Search Engine Land</p>
                  <p className="blogtextContentBlog">To qualify, price drops have to be specific—so "50% off" will be eligible, but a vague "10-20% off" will not. Google itself calculates the exact pricing based on your product schema.</p>
                  <p className="blogtextContentBlog">If price is a strong differentiator for you, this is the update you've been waiting for: product rich results already stand out in SERPs, and price drops only make them more noticeable. If your site is marked up with the appropriate schema, your price drops will automatically be visible to users before they even click through to your site. </p>

                  <h2 className="blogtextSubHead">Be wary of Yocale and Touch 2 Success</h2>
                  <p className="blogtextContentBlog">In a somewhat controversial move, two official GBP appointees—Yocale for appointment booking and Touch 2 Success for menu management—appear to be displaying information on listings without notifying business owners.</p>
                  <p className="blogtextContentBlog">It may seem like a benign issue, but consider this: Yocale charges up to $50 USD for each appointments it books. We have already seen Google adding unsolicited food-delivery options to restaurant listings—with such delivery services then taking a cut of the profit—but now it seems that all manner of businesses, such as law firms, need to worry about this happening as well.</p>
                  <img src={touch2Success} alt="Yocale for appointment booking and Touch 2 Success" className="img-fluid mb-5 mt-4 imgBlogPOst"></img>
                  <p className="blogtextContentBlog">It also appear that Touch 2 Success is adding content to GBP listings by sending illegitimate ownership requests to business listings it works with. Although most businesses know to decline (you should only ever give ownership of your listings to a third party in specific situations), Touch 2 Success is sending out control requests in bulk, possibly hoping that at least some businesses accept. Make sure your listings are only accessible to vendors you have formally agreed to work with.</p>

                  <h2 className="blogtextSubHead">Community feedback drives "health and safety measures" on Yelp</h2>
                  <p className="blogtextContentBlog">In the age of COVID, almost every business claims to comply with local health and safety measures—but not all deliver. Yelp is now exposing these bad actors by leveraging community feedback to confirm which businesses are following through on their claims. For instance. Yelp users will verify whether or not a business limits the number of customers in store after claiming to do so. Once a consensus is reached, Yelp assigns a health and safety rating on a per-location basis</p>
                  <p className="blogtextContentBlog">Yelp has also introduced new ways for businesses to promote their COVID-safe practices, with attributes including "disposable or contactless menu", "1:1 sessions available", and "heated outdoor seating". It's an understandable move as customers increasingly expect COVID-related information and updates in the pandemic's second year.</p>
                  <p className="blogtextContentBlog">Want to get ahead—and stay ahead—in the increasingly important world of local search? <a href="/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Let's talk!</a></p>

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
