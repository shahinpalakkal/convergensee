import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import convergenSEEBlogJune from "./././../../image/ConvergenSEEBlogJune.jpg"
import seenbyshopper from "./../../image/seen-by-shopper.jpg"
import newgooglelabel from "./../../image/new-google-label.jpg"
import maprestaurant from "./../../image/map-restaurant.jpg"
import $ from "jquery" 


export default class blogJune extends Component {
  componentDidMount()
  {
    $("#link-blog").addClass("link-active");
  }
  render() {
    return (
      <div className="convergensee-wrapper">
      <Helmet>
        <title>{"Local Search News: June 2021 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="June 2021 brought a series of changes to local search and local listings. These are the updates you need to know about."
          />
          <link rel="canonical" href={"/blog/local-search-news-june-2021"} /> 
          <meta name="twitter:description" content="June 2021 brought a series of changes to local search and local listings. These are the updates you need to know about."></meta>
          <meta name="facebook:title" content="Local Search News: June 2021 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: June 2021 | ConvergenSEE" ></meta>
          <meta property="og:description" content="June 2021 brought a series of changes to local search and local listings. These are the updates you need to know about." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: June 2021</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: June 2021 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">June 2021</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogJune} alt="convergenSEE Blog June 2021" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">It's time for your handy rundown of June's most significant changes in local search. From a two-part core algorithm update to the end of "short names" in Google Business Profile (GBP), this is the news you need to know.</p>
                  
                  <h2 className="blogtextSubHead">Google core algorithm updates</h2>
                  <p className="blogtextContentBlog">Google released the first of two algorithm updates on June 2. It apparently planned to release a single update but delayed certain aspects until early July to allow more time for QA. </p>
                  <p className="blogtextContentBlog">As usual, this algorithm update is not aimed at a specific industry, and any unusual ranking changes in June may well revert in July. Nevertheless, early indications are that the health, auto, pets/animals, science, and travel industries have been impacted by part one of this update.</p>
                  <p className="blogtextContentBlog">Google itself is not always aware of the impact of its own actions. That's why search experts like us monitor these changes to assess their effects. Whether the algorithm gives you a boost or lowers your rankings, we’ll let you know why—and reveal the best way to respond. </p>
                  
                  <h2 className="blogtextSubHead">No more short names in GBP </h2>
                  <p className="blogtextContentBlog">GBP used “short names” to simplify URLs for listings, but this feature is now being removed due to low demand. Existing short names will remain in place, but GBP users are no longer permitted to create new ones. The corresponding menu in GBP has been removed. </p>
                  <p className="blogtextContentBlog">The idea behind short names was to allow the creation of easy-to-remember URLs (for example, https://g.page/DunderMifflin instead of an automatically generated address like https://g.page/r/ CW_5TnKS12f4EAE78gfugfdu9). Need to print links to your profiles? You'll have to use another URL-shortening service for now. </p>

                  <h2 className="blogtextSubHead">New: The “Seen by shoppers” justification  </h2>
                  <p className="blogtextContentBlog">Justifications are labels that provide additional context in the local pack. There's now a new justification specific to retailers—"Seen by shoppers"—which describes specific product categories or brands stocked by the store. </p>
                  <div className="mapimagediv">
                  <img src={seenbyshopper} alt="seen by shopper" className="img-fluid mb-4"></img>
                  </div>
                  <p className="blogtextContentBlog">Google populates this field by asking its Local Guides questions in the “Know this place?” section, which means businesses currently have no way to alter the “Seen by shoppers” tags they are assigned.  "Seen by shoppers" seems to be a crowdsourced version of the “Sold here” justification, which is powered by products listed (and correctly marked up) in the business's online inventory. The two fields may converge over time, but for now their functions remain distinct. </p>

                  <h2 className="blogtextSubHead">Also new: The “New on Google” label </h2>
                  <p className="blogtextContentBlog">The “New on Google” label has debuted on listings in both search and maps. It applies to any business whose listing is less than 60 days old (even if the business itself has been established for years).  </p>
                  <div className="mapimagediv">
                  <img src={newgooglelabel} alt="New on Google label" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="creditlink">Image:Search Engine Roundtable</p>
                  <p className="blogtextContentBlog">This label is not only useful for consumers—businesses can use it to monitor local competitors as well as potentially fake listings. After all, locksmiths, lawyers, and contractors are regularly affected by spam listings seeking to appear legitimate. If the listing's website claims years of experience with dozens of Google reviews, the “New on Google” label is a good hint that the listing should be reporting and removed. </p>
                  
                  <h2 className="blogtextSubHead">Google Maps shows restaurant ratings</h2>
                  <p className="blogtextContentBlog">Google Maps pins for restaurants and other dining establishments are displaying the average star rating. Why? Because the search giant is on an ongoing mission to be the world's default review platform.  </p>
                  <div className="mapimagediv">
                  <img src={maprestaurant} alt="Maps shows restaurant" className="img-fluid mb-4 mt-4"></img>
                  </div>
                  <p className="creditlink">Image:Search Engine Roundtable</p>
                  <p className="blogtextContentBlog mt-3">This UI update shows that Google is not only trying to improve user experience but maximize the value of Google reviews to these businesses. With ratings appearing directly on the map, businesses are clearly encouraged to generate fresh reviews. </p>
                  <p className="blogtextContentBlog">Don’t let local search become an afterthought—see how your local listings can be the foundation for transformational growth. <a href="/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Let’s talk</a>. </p>



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
