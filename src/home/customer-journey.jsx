import React, { Component } from 'react';
import store from  "../image/store.png"
import search from  "../image/search.png"
import review from  "../image/review.png"
import mobile from  "../image/mobile.png"
import location from  "../image/location.png"
// import storew from  "../image/storew.png"
// import searchw from  "../image/searchw.png"
// import revieww from  "../image/revieww.png"
// import mobilew from  "../image/mobilew.png"
// import locationw from  "../image/locationw.png"

export default class CustomerJourney extends Component {
  render() {
    return (

      <div className="container customer-journey-main">                    
        <h2 className="main-head localsearch-mainhead mb-3">Local search is critical to the customer journey</h2>                 
        <div className="customer-journey-main1">
          <div className="customer-journey-list">
            <img src={store} alt="Icon of a storefront" className="customer-journey-list-img"></img>
            {/* <img src={storew} alt="Store white" className="customer-journey-list-img imghide"></img> */}
            <div className="customer-journey-subhead">72%</div>
            <p>of consumers who performed a local search visited a store within five miles.</p>
          </div>
          <div className="customer-journey-list">
            <img src={location} alt="Icon of a map pin" className="customer-journey-list-img"></img>
            {/* <img src={locationw}  alt="Local Search white" className="customer-journey-list-img imghide"></img> */}
            <div className="customer-journey-subhead" aria-label="34 times">34x</div>
            <p>increase in "near me" searches on Google.</p>
          </div>
          <div className="customer-journey-list">
            <img src={mobile}  alt="Icon of a smartphone with a map icon" className="customer-journey-list-img"></img>
            {/* <img src={mobilew}  alt="Hrs white" className="customer-journey-list-img imghide"></img> */}
            <div className="customer-journey-subhead">76%</div>
            <p>of people who conduct a local search on their smartphone visit a physical place within 24 hours.</p>
          </div>
          <div className="customer-journey-list">
            <img src={search} alt="Magnifying search icon" className="customer-journey-list-img"></img>
            {/* <img src={searchw}   alt="Search White" className="customer-journey-list-img imghide"></img> */}
            <div className="customer-journey-subhead">1 in 5</div>
            <p>searches on Google are specifically related to location.</p>
          </div>
          <div className="customer-journey-list">
            <img src={review} alt="Review icon" className="customer-journey-list-img"></img>
            {/* <img src={revieww} alt="Review white" className="customer-journey-list-img imghide"></img> */}
            <div className="customer-journey-subhead">55%</div>
            <p>of millennials will ignore brands that don't show up in their searches or have poor reviews.</p>
          </div>
        </div>
    </div>

    )
  }
}
