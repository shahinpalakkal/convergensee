import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import home from "../src/home/home"
import partners from "../src/convergensee/partners"
import listingManagement from "./convergensee/listings-management"
import reputationManagement from "../src/convergensee/reputation-management"
import locatorLocal from "../src/convergensee/locator-local"
import googleRank from "../src/convergensee/local-rank"
import platformProducts from "../src/convergensee/platform-products"
import company from "../src/convergensee/company"
import blog from "../src/convergensee/blog"
import blogPost from "../src/convergensee/blog-post"
import blogJanuary from "../src/convergensee/blog/local-search-news-january-2021"
import blogFebruary from "../src/convergensee/blog/local-search-news-february-2021"
import blogMarch from "../src/convergensee/blog/local-search-news-march-2021"
import blogApril from "../src/convergensee/blog/local-search-news-april-2021"
import blogMay from "../src/convergensee/blog/local-search-news-may-2021"
import blogJune from "../src/convergensee/blog/local-search-news-june-2021"
import blogJuly from "../src/convergensee/blog/local-search-news-july-2021"
import blogAugust from "../src/convergensee/blog/local-search-news-august-2021"
import blogSeptember from "../src/convergensee/blog/local-search-news-september-2021"
import blogOctober from "../src/convergensee/blog/local-search-news-october-2021"
import blogNovember from "../src/convergensee/blog/local-search-news-november-2021"
import blogJanuary2022 from "../src/convergensee/blog/local-search-news-january-2022"
import blogFebruary2022 from "../src/convergensee/blog/local-search-news-february-2022"
import blogMarch2022 from "../src/convergensee/blog/local-search-news-march-2022"
import guide from "../src/convergensee/guides"
import guide_GBP from "./convergensee/guide/guide_GBP"
import guide_Google_Post from "./convergensee/guide/guide_G_Posts"
import guide_Star from "./convergensee/guide/guide_stars"
import outerTeam from "../src/convergensee/team"
import contact from "../src/convergensee/contact"
import presenceFinder from "../src/convergensee/presence-finder"
import presenceFinderResult from "../src/convergensee/presence-finder-result"
import NotFound from "../src/home/notFound"
import ManageBusinessListings from "./convergensee/manage-business-listings"
import ThankYou from "./convergensee/thankyou-page"
import {HelmetProvider} from "react-helmet-async";


ReactDOM.hydrate((
  <HelmetProvider>
  <Router>
    <Switch>
      <Route exact path="/" component={home}/>
      <Route exact path="/partners" component={partners}/>
      <Route exact path="/listings-management" component={listingManagement}/>
      <Route exact path="/reputation-management" component={reputationManagement}/>
      <Route exact path="/locator-local" component={locatorLocal}/>
      <Route exact path="/local-rank" component={googleRank}/>
      <Route exact path="/platform-products" component={platformProducts}/>
      <Route exact path="/company" component={company}/>
      <Route exact path="/blog" component={blog}/>
      <Route exact path="/blog-post" component={blogPost}/>
      <Route exact path="/blog/local-search-news-january-2021" component={blogJanuary}/>
      <Route exact path="/blog/local-search-news-february-2021" component={blogFebruary}/>
      <Route exact path="/blog/local-search-news-march-2021" component={blogMarch}/>
      <Route exact path="/blog/local-search-news-april-2021" component={blogApril}/>
      <Route exact path="/blog/local-search-news-may-2021" component={blogMay}/>
      <Route exact path="/blog/local-search-news-june-2021" component={blogJune}/>
      <Route exact path="/blog/local-search-news-july-2021" component={blogJuly}/>
      <Route exact path="/blog/local-search-news-august-2021" component={blogAugust}/>
      <Route exact path="/blog/local-search-news-september-2021" component={blogSeptember}/>
      <Route exact path="/blog/local-search-news-october-2021" component={blogOctober}/>
      <Route exact path="/blog/local-search-news-november-2021" component={blogNovember}/>
      <Route exact path="/blog/local-search-news-january-2022" component={blogJanuary2022}/>
      <Route exact path="/blog/local-search-news-february-2022" component={blogFebruary2022}/>
      <Route exact path="/blog/local-search-news-march-2022" component={blogMarch2022}/>
      <Route exact path="/guides" component={guide}/>
      <Route exact path="/guide/guide_GBP" component={guide_GBP}/>
      <Route exact path="/guide/seo-benefits-of-google-post" component={guide_Google_Post}/>
      <Route exact path="/guide/how-to-respond-online-reviews" component={guide_Star}/>
      <Route exact path="/team" component={outerTeam}/>
      <Route exact path="/contact" component={contact}/>
      <Route exact path="/presence-finder" component={presenceFinder}/>
      <Route exact path="/convergensee/try-it-out" component={presenceFinder}/>
      <Route exact path="/presence-finder-result" component={presenceFinderResult}/>
      <Route exact path="/manage-business-listings" component={ManageBusinessListings}/>
      <Route exact path="/thankyou" component={ThankYou}/>
      <Route component={NotFound} />
    </Switch>
  </Router>
  </HelmetProvider>
  ),document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
