import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "./../../layout/header"
import Footer from "./../../layout/footer"  
import convergenSEEBlogMarch2022 from "./../../image/convergenSEEBlogMar-2022.jpg"
import blackOwnedBusinessImg from "./../../image/black-owned-business.jpg"  
import EmergencyHelp from "./../../image/emergency-help-attributes.jpg"   
import piracyImg from "./../../image/piracy.jpg"  
import GoogleLocal from "./../../image/google-local-pack-map-interactive.gif" 
import leftquotessign from "./../../image/left-quotes-sign.png"; 
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
        <title>{"Local Search News: March 2022 | ConvergenSEE "}</title>
        <meta
          name="description"
          content="Local search is constantly evolving. Keep up with algorithm updates, new attributes, and verification hurdles making local search news for March 2022."
          />
          <link rel="canonical" href={"/blog/local-search-news-march-2022"} /> 
          <meta name="twitter:description" content="Local search is constantly evolving. Keep up with algorithm updates, new attributes, and verification hurdles making local search news for March 2022."></meta>
          <meta name="facebook:title" content="Local Search News: March 2022 | ConvergenSEE"></meta>
          <meta property='og:type' content='website' />
          <meta property="og:title" content="Local Search News: March 2022 | ConvergenSEE" ></meta>
          <meta property="og:description" content="Local search is constantly evolving. Keep up with algorithm updates, new attributes, and verification hurdles making local search news for March 2022." ></meta>
          <meta property='og:site_name' content="Convergensee" />
          <meta property="og:url" content={window.location.href} ></meta>
      </Helmet>
          <Header></Header>

          <main className="mainWrapper">
          
          <nav className="container breadcrumb-det web-show my-3 pt-3 pb-1" aria-label="breadcrumb">
            <ol className="p-0">
              <li className="breadcrumb-detls"><a href="../home/home">ConvergenSEE</a></li>
              <li className="breadcrumb-detls"><a href="/blog">Blog</a></li>
              <li className="breadcrumb-detls" aria-current="page">Local Search News: March 2022</li>
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
                  <h1  className="bloguser-head" id="main" tabIndex="-1">Local Search News: March 2022 </h1>
                  <div className="bloguser-det my-3">
                    <div className="blog-detls">March 2022</div>
                  </div>
                  <div className="LocalsearchImgdiv mt-4">
                    <img src={convergenSEEBlogMarch2022} alt="convergenSEE Blog March 2022" className="img-fluid mb-5 LocalsearchImg"></img>
                  </div>
                  <p className="blogtextContentBlog">It's a new season, new month, and time for new changes in local search. Map upgrades, verification updates, new attributes, and stricter review algorithms have made their mark this March. Read on for all the details you need to know.  </p>
                  
                  <h2 className="blogtextSubHead">More verification steps on the way for Google Business Profiles</h2>
                  <p className="blogtextContentBlog">For large corporations, claiming and managing all their Google Business Profile (GBP) listings can be time consuming. The status quo for claiming currently includes either phone verification or paper mail. Recently Google launched video verification, but it’s use is not as common. Buckle up, things may become more difficult—Google announced potentially requiring multiple verification methods for some accounts.</p>     
                  <p className="blogtextContentBlog">Businesses that need to meet double verification will likely be case by case. Fraud-heavy industries, like insurance, are more likely to see stricter verification from Google first. There’s still more to learn about Google’s multiple verification process, but businesses should prepare for lengthier profile claim processes in the future.</p>
             

                  <h2 className="blogtextSubHead">GBP adds new “Emergency help” attributes </h2>
                  <p className="blogtextContentBlog">Google has added an “Emergency help” category containing several new business attributes. The attribute focus on aspects like employing refugees, asking for volunteers, and donations in response to the situation in Ukraine. These new attributes are similar to Google’s previous rollouts for the pandemic (i.e., adding new takeout and delivery statuses for restaurants).</p>
                  <div className="mapimagediv mb-4 mt-4">
                  <img src={EmergencyHelp} alt="Emergency help" className="img-fluid mb-3"></img>
                  </div>
                  <p className="creditlink">Image: Search Engine Land</p>

                  <p className="blogtextContentBlog">The usual purpose of attributes is lead generation and driving sales, which is achieved by connecting customers to relevant businesses. However, this new category is more about communication. Using “Emergency help” businesses can clearly communicate their relief efforts to reach people in need during this continuing conflict.</p>
                  

                  <h2 className="blogtextSubHead">Search and maps see upgrades to free Google hotel listings </h2>
                  <p className="blogtextContentBlog">Using Google’s latest expansion to free hotel listings, hotels can now display availability and rates right in their Google Business Profile:</p>
                  <div className="borderleftdiv">
                    <div className="borderleftdivImg"><img src={leftquotessign} alt="leftquotessign" /></div>
                  <div className="blogtextcontentItalic">
                  <p className="blogtextContentBlog">“We will expand the report to include other insights, like free booking link impressions and booking value, in the coming weeks. Beginning next month, individual hotels that meet eligibility requirements can manually input their rates through their Google Business Profile to participate in free hotel booking links.” </p>
                  </div>
                  </div>
                  
                 
                  <p className="blogtextContentBlog">Google has taken advantage of the pandemic-related travel lull to test new listing opportunities and contend with competitors like Orbitz or TripAdvisor. Google’s free hotel listings debuted only in March 2021, but they have seized a portion of the hospitality market which is hungry for new ways to increase guest bookings. </p>
                  <p className="blogtextContentBlog">Thus, upgrades to Google’s free features are built to persuade more hotels to use Google as a key customer touch point. Google has taken clear steps to sweeten the pot—right now Google doesn’t take a cut of booking fees for free placements. Paid placements still get top billing in Google rankings, but free placements are still a worthy tool for boosting lead generation. </p>

                  <h2 className="blogtextSubHead">Legitimate reviews hurt by Google’s automated filtering algorithm</h2>
                  <p className="blogtextContentBlog">Kicked off on March 7, Google has substantially intensified its automatic review filtering algorithm. As we know, filtering safeguards can cut both ways. Signals that shut down spam have also increasingly blocked legitimate business reviews from going live on GBP listings. While culling malicious spam is important, especially for industries like locksmithing that are aggressively targeted, this recent update appears to have done more harm than good across business sectors. </p>                    
                  <p className="blogtextContentBlog">Google’s recent approach has been panned by many as a step too far, even in the world of high review volume moderation. All businesses are seeing serious impacts. When legitimate reviews don’t make it live, it’s a big loss for digital performance and strength against competitors. It hurts even more for small businesses with review volumes only in the double digits. </p>
                  <p className="blogtextContentBlog">Are there fixes on the way from Google? Not yet, their only advice to business owners now is to “remain patient.” Businesses can try to salvage lost reviews by asking review authors to resubmit with new wording, but this isn’t even very workable on the smallest scale. Plus, it’s not 100% that reworked reviews will survive the filter.</p>
                  <p className="blogtextContentBlog">With no real solution coming soon, at least know that this is affecting all businesses and industries. For what it’s worth, you and your competitors are equally losing out on reviews.</p>
                   
                   <h2 className="blogtextSubHead">New ways to interact with the local pack’s map</h2>
                   <p className="blogtextContentBlog">Google’s three-pack results maps have received a range of updates. Users can now use zoom functions and use a new button to open even more results in the local finder. Along with these changes Google included more dynamic interactions—and you don’t have to be one of the three top-ranking local pack businesses to access them. Now hovering over a business pin reveals business name, review count and rating for any business.</p>
                   <div className="mapimagediv mb-4 mt-4">
                    <img src={GoogleLocal} alt="Local pack’s map" className="img-fluid mb-3"></img>
                    </div>
                  <p className="creditlink">GIF: Search Engine Land </p>

                  <p className="blogtextContentBlog">This update doesn’t do much to affect the state of top three results. Businesses outside of those top spots are only visible if a user searches for them within the interactive map. At best, lead increases from the new map will be minor. The real lead generation prize still relies on ranking high in the three pack. </p>
                  <p className="blogtextContentBlog">One other thing to watch out for in the new map is star ratings. Star ratings will show up by every business name. Users can then read business reviews by double-clicking on a business. Yet another reason to practice diligent <a href="/reputation-management" target="_blank" rel="noopener noreferrer" className="linkunderline">reputation management</a></p>
                
                  <h2 className="blogtextSubHead">GBP adds “Confirmed by phone call” method for hours</h2>
                  <p className="blogtextContentBlog">When a business updates their hours of operation, users will usually see “Updated by this business” or “Confirmed by others” tags in the profile. “Updated by this business” means a profile manager has manually confirmed the revised hours of operation. “Confirmed by others” appears when Google users have verified the revised hours. These tags also report when hours were last updated.</p>
                  <p className="blogtextContentBlog">Google now has a new way for users to check hours of operation. In March “Confirmed by phone call” was added as a verification method. When users call, they go through Google’s automated booking AI, Duplex. Duplex, a natural-sounding speech technology, primarily has been used for booking appointments and making reservations up until now.</p>
                  <p className="blogtextContentBlog">For the “Confirmed by phone call” tag to appear, Duplex needs to be implemented for hours verification. In seasons with frequent hour changes, like the holidays, having another layer to confirm hour accuracy is a gamechanger. To fully utilize Duplex, businesses with sprawling or spread-out teams need to anticipate needs as accurately as possible with a strong <a href="/listings-management" target="_blank" rel="noopener noreferrer" className="linkunderline">local listing management</a> strategy. </p>
               
                  <p className="blogtextContentBlog">In the constantly evolving work of local search, we make sure you catch every important update. <a href="/contact" target="_blank" rel="noopener noreferrer" className="linkunderline">Let’s talk!</a></p>
               
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
