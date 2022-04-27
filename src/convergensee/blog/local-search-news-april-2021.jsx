import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import convergenSEEBlogApr from "./../../image/convergenSEEBlogApr.jpg"
import localUniversity from "./../../image/localUniversity.jpg"
import googleSearchAndMaps from "./../../image/googleSearchAndMaps.jpg"
import reviewQuotes from "./../../image/review-quotes.jpg"
import localreviews from "./../../image/local-reviews.jpg"
import googlePrefersReviews from "./../../image/googlePrefersReviews.jpg"
import leftquotessign from "./../../image/left-quotes-sign.png";
import $ from "jquery" 


export default class blogApril extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{"Local Search News: April 2021 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="Here's your monthly rundown of the most important updates, including a new local two-pack and some handy delivery/pickup features for local businesses."
          />
          <link rel="canonical" href={"/blog/local-search-news-april-2021"} /> 
          <meta name="twitter:description" content="Here's your monthly rundown of the most important updates, including a new local two-pack and some handy delivery/pickup features for local businesses."></meta>
          <meta name="facebook:title" content="Local Search News: April 2021 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: April 2021 | ConvergenSEE" ></meta>
          <meta property="og:description" content="Here's your monthly rundown of the most important updates, including a new local two-pack and some handy delivery/pickup features for local businesses." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: April 2021</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: April 2021 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">April 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogApr} alt="convergenSEE Blog April 2021" className="img-fluid mb-4 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">Spring has sprung and the changes continue in local search. Here’s your monthly rundown of the most important updates, including a new local two-pack and some handy delivery/pickup features for local businesses.</p>
                  
                  <h2 className="blogtextSubHead">Google's eye-opening search stats during COVID-19</h2>
                  <p className="blogtextContentBlog mb-4">The pandemic has had a profound impact on brick-and-mortar businesses, as evidenced by Google's latest research on the topic: <a href="https://blog.google/products/ads-commerce/local-shopping-trends" target="_blank"  rel="noopener noreferrer" className="linkunderline">Local is now digital: Understanding the new local shopper</a>. Among other findings, the search giant established that storefront signage should no longer be considered a reliable business generator—and explains how marketing to local customers is more digital-oriented than ever before. Standout stats include:</p>
                  <ul className="blogtextContentBlog pl-4 mt-2 blogtextContentBlogMargin">
                    <li><p>Searches for "local" + "business(es)" have grown by more than 80% year over year (e.g. "local businesses near me", "support local businesses")</p></li>
                    <li><p>Searches for "who has" + "in stock" have grown by more than 8,000% year over</p></li>
                    <li><p>Two-thirds of dining consumers used search to find food and drink information during the pandemic</p></li>
                    <li><p>Searches for "curbside pickup" and "discounts" on Google Maps increased nearly 9,000% and 100% respectively year over year</p></li>
                  </ul>
                  <p className="blogtextContentBlog mt-4">The growth of "discounts" searches suggests people are turning to local channels for upper-funnel, research-type queries. If you can incorporate similar phrasing in your content, it will be worth the effort—especially considering that digital habits will not simply disappear when in-person shopping resumes.</p>

                  <h2 className="blogtextSubHead">Say hello to the local two-pack</h2>
                  <p className="blogtextContentBlog">Google is now testing a two-pack format on mobile as opposed to the standard three-pack. It's great news for any business occupying those two top spots, but those sitting in third might be about to disappear below the fold.</p>
                  <p className="blogtextContentBlog mb-4">This potential change further highlights how paid ad placements make up the most valuable real estate on Google SERPs. See how "Alan David Custom Suits" dominates the SERP below:</p>
                  <img src={localUniversity} alt="Local University" className="img-fluid mb-3 imgBlogPOst" ></img>
                  <p className="creditlink">credit: <a href="https://localu.org/google-testing-mobile-serps-with-no-3-packs/"  target="_blank"  rel="noopener noreferrer">Local University</a></p>
                  <p className="blogtextContentBlog mt-4">What should your brand do about the prospect of a two-pack? Continue to follow SEO best practice, optimize your location pages, and make sure your paid media works in tandem.</p>

                  <h2 className="blogtextSubHead">New features for stores offering delivery and pickup</h2>
                  <p className="blogtextContentBlog">In an attempt to compensate for the ongoing lack of in-store shopping, Google has improved visibility for curbside pickup and delivery options in Google Search and Maps.</p>
                  <div className="mapimagediv">
                  <img src={googleSearchAndMaps} alt="Google Search and Maps" className="img-fluid mb-3"></img>
                  </div>
                  <p className="creditlink">credit: Google</p>
                  <p className="blogtextContentBlog mt-4">Google will start publishing this information (delivery providers, pickup and delivery windows, order fees, order minimums) on mobile searches for grocery stores partnered with Instacart or Albertsons in the US. It's an automatic process, so business owners should review all the details to ensure accuracy.</p>

                  <h2 className="blogtextSubHead">Algorithm update for product reviews</h2>
                  <p className="blogtextContentBlog">Google has updated its algorithm to better deliver product-related queries like "best digital cameras 2021". Why? Because of the ubiquity of product-focused "listicles" that exist only for their SEO benefits but lack any genuinely useful content. Google explained that this update is:</p>
                  <div className="borderleftdiv">
                    <div className="borderleftdivImg"><img src={leftquotessign} alt="leftquotessign" /></div>
                  <div className="blogtextcontentItalic">
                  <p className="blogtextContentBlog">...designed to better reward product reviews that share in-depth research, rather than thin content that simply summarizes a bunch of products. Insightful analysis and original research will be rewarded and especially content written by experts or enthusiasts who know the topic well.</p>
                  </div>
                  </div>
                  <p className="blogtextContentBlog">This update should direct users to authentic product reviews and reduce visibility for sites that know how to game the system and little else.</p>

                  <h2 className="blogtextSubHead">Google emphasizes your competitors?</h2>
                  <p className="blogtextContentBlog">Did you know that Google could direct users to your competitors via your own knowledge panel? It's true: there are reports of Google prompting users to request quotes from rival businesses after they've requested a quote from their initial choice.</p>
                  <div className="mapimagediv mt-5 mb-4">
                  <img src={reviewQuotes} alt="Review Quotes" className="img-fluid mb-3"></img>
                  </div>
                  <p className="blogtextContentBlog"> Google Business Profile (GBP) users have no way to prevent this from happening, so we might start to see businesses declining to offer quotes via Google Messaging. After all, why risk diverting your highly qualified leads to a competitor? It might be better to offer quotes via a different mechanism—one that won't redirect your leads to a rival.</p>

                  <h2 className="blogtextSubHead">No more phone numbers in Google Posts</h2>
                  <p className="blogtextContentBlog">Google has banned phone numbers from Google Posts. On the subject of "phone stuffing", the search giant wrote:</p>
                  <div className="borderleftdiv">
                    <div className="borderleftdivImg"><img src={leftquotessign} alt="leftquotessign" /></div>
                 <div className="blogtextcontentItalic">
                 <p className="blogtextContentBlog"><i>To avoid the risk of abuse, we do not allow your post content to include a phone number. You can make your phone number available on your Business Profile or website. Instead, you can attach a "Call now" button to your post that uses your verified Business Profile phone number.</i></p>
                  </div>
                 </div>
                  <p className="blogtextContentBlog">While you can still include a phone number in a Google Post's image, it is something to bear in mind—especially if your most recent Google Posts have failed to publish on your listings.</p>

                  <h2 className="blogtextSubHead">"New" label for local reviews</h2>
                  <p className="blogtextContentBlog">At the end of 2020, Google tested a "new" label for business reviews less than a month old. That test became a feature and is now live for all to see:</p>
                  <img src={localreviews} alt="business reviews" className="img-fluid mb-4 mt-4 imgBlogPOst"></img>
                  <p className="blogtextContentBlog">In a similar update, GBP listings are no longer displaying textless reviews on mobile. Star ratings from these reviews still factor into the overall average, but they're no longer considered valuable enough to take up mobile real estate. The example below shows how the textless five-star review disappears in mobile:</p>
                  <div className="mapimagediv mt-5 mb-4">
                  <img src={googlePrefersReviews} alt="Google prefers reviews" className="img-fluid mb-3"></img>
                  </div>
                  <p className="blogtextContentBlog">These two updates demonstrate how Google prefers reviews that are a) recent and b) descriptive. As always, your business should encourage a steady flow of positive reviews. </p>
                  <h2 className="blogtextSubHead">Photo updates on Google Maps</h2>
                  <p className="blogtextContentBlog">With the <a href="https://blog.google/products/maps/three-new-ways-anyone-can-update-google-maps/" target="_blank"  rel="noopener noreferrer" className="linkunderline">Google Maps photo update</a>, Google is supporting a new type of photographic content that offers snapshots of businesses, accompanied by a small text description. These photos are found in the "Updates" tab on mobile, and don't necessarily have to be accompanied by a review or rating.</p>
                  <p className="blogtextContentBlog">Now that Google's "Vision AI" is able to detect content and text within images (and serve them up for relevant user queries), it may soon be time to solicit user photos in the same way you solicit reviews.</p>
                  <p className="blogtextContentBlog">All in all, there are countless factors that determine your success in local search. Fortunately, we know exactly how to move the needle and maximize your visibility—and relevance—at the local level. <a href="/contact" target="_blank" rel="noopener noreferrer" className="linkunderline text-nowrap">Ask us how</a>.</p>


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
