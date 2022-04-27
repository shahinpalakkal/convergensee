import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer" 
import $ from "jquery" 
// import yahooimg from "../image/yahoo.png"
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import { scanCalling } from '../serivce'
import loadingimg from "../image/loading.gif"
import ReactDependentScript from 'react-dependent-script';

export default class presenceFinder extends Component {
  constructor(props){
    super(props)
    this.state = {
      address: '',
      businessName:'',
      businessPhone:'',
      email:'',
      firstname:'',
      lastname:'',
      company:'',
      phone:'',
      errorField:false,
      loader:false,
      googleKey:'AIzaSyB2-ORyKg2y4f5NzUEoKGuS4KehxKhe3co'
    }
  }
  componentDidMount()
  {
    $("#link-finder").addClass("link-active");
  }
  handleChange = address => {
    this.setState({ address });
  };
  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
  handleText = (event) =>{
    const{value, name} = event.target;
    this.setState({
      [name]:value,
    })
  }
  scanNow = () => {
    let address =this.state.address;
    let businessName =this.state.businessName;
    let businessPhone =this.state.businessPhone;
    let email =this.state.email;
    let firstName =this.state.firstName;
    let lastName =this.state.lastName;
    let company =this.state.company;
    let phone =this.state.phone;
    var characters = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (businessName === "" ) {
      $("#businessName").show()
      this.businessName.focus()
    } else if (businessPhone === "" ) {
      $("#businessName").hide()
      $("#businessPhone").show()
      this.businessPhone.focus()
    } else if (address === "" ) {
      $("#businessName").hide()
      $("#businessPhone").hide()
      $("#address").show()
    } else if (email === "" ) {
      $("#businessName").hide()
      $("#businessPhone").hide()
      $("#address").hide()
      $("#email").show()
      this.email.focus()
    } else if (characters.test(email) === false) {
      $("#businessName").hide()
      $("#businessPhone").hide()
      $("#address").hide()
      $("#email").show()
      this.email.focus()
    } else {
      $("#email").hide()
      $("#businessName").hide()
      $("#businessPhone").hide()
      $("#address").hide()
      this.setState({loader:true})
      const scanData = {
        method : "POST",
        body : JSON.stringify({
          functionName: "formSubmit",
          businessName: businessName,
          phoneNumber: businessPhone,
          rawAddress: address,
          email: email,
          firstName: firstName,
          lastName: lastName,
          companyName: company,
          contactPhoneNumber: phone,
          resellerId: "",
          source: "convergensee",
          language: "en"
        })
      }
      //console.log("kkkk.....",scanData)
      scanCalling(scanData).then((data) => {
        console.log('data.....scanNow......',data)
        if (data.success == "1" ) {
          localStorage.setItem('successData', JSON.stringify(data.result));
          localStorage.setItem('businessName', businessName);
          localStorage.setItem('businessPhone', businessPhone);
          localStorage.setItem('address', address);
          this.setState({loader:false})
          window.location.href = "/presence-finder-result"
        }
      })
    }
  }
  render() {
    return (
      <ReactDependentScript scripts={['https://maps.googleapis.com/maps/api/js?key='+this.state.googleKey+'&libraries=places']} >


      <div className="convergensee-wrapper staging-wrapper">
          <Helmet>
            <title>{"Support your clients with the foundation for local search. Make sure their business can be found everywhere | ConvergenSEE "}</title>
            <meta
              name="description"
              content="Enter your business information below to get an instant report on the visibility, accuracy, and completeness of your local listings. Later on, one of our specialists will be in touch to chat about your brand's local presence online. It's as simple as that!"
            />
            <link rel="canonical" href={"/presence-finder"} /> 
            <meta name="twitter:description" content="Enter your business information below to get an instant report on the visibility, accuracy, and completeness of your local listings. Later on, one of our specialists will be in touch to chat about your brand's local presence online. It's as simple as that!"></meta>
            <meta name="facebook:title" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere | ConvergenSEE"></meta>
            <meta property='og:type' content='website' />
            <meta property="og:title" content="Support your clients with the foundation for local search. Make sure their business can be found everywhere | ConvergenSEE" ></meta>
            <meta property="og:description" content="Enter your business information below to get an instant report on the visibility, accuracy, and completeness of your local listings. Later on, one of our specialists will be in touch to chat about your brand's local presence online. It's as simple as that!" ></meta>
            <meta property='og:site_name' content="Convergensee" />
            <meta property="og:url" content={window.location.href} ></meta>
          </Helmet>
          <Header></Header>
          <main role="main"  id="main">
            <div className="convergensee-main">
              <div className="convergensee-bg-theme pt-5">
                <div className="container clr-theme">
                  <h1 className="sub-head text-center mb-0">HOW IS YOUR</h1>
                  <div className="main-head">LOCAL PRESENCE?</div>
                  <div className="row mt-0 mt-md-5">
                    <div className="col-lg-12">
                    <p className="contacttext text-center">Enter your business information below to get an instant report on the <span className="subtext-bold">visibility, accuracy, and completeness of your local listings</span>. Later on, one of our specialists will be in touch to chat about your brand's local presence online. It's as simple as that!</p>
                    </div>
                    <div className="col-lg-10 m-auto businessInformation">
                      <div className="sub-head-bold1">Business Information</div>
                      <div className="row">
                        <div className="col-lg-6">
                          BUSINESS NAME<span className="required_fields">*</span>
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Enter business Name" name="businessName" value={this.state.businessName} onChange={this.handleText} className="input-design" ref={ businessName => { this.businessName = businessName}} ></input>
                          <span className="requiredField" id="businessName" style={{display:'none'}}>This value is required.</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          BUSINESS PHONE NUMBER<span className="required_fields">*</span>
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Enter business phone number" name="businessPhone" value={this.state.businessPhone} onChange={this.handleText} className="input-design" ref={ businessPhone => { this.businessPhone = businessPhone}}></input>
                          <span className="requiredField" id="businessPhone" style={{display:'none'}}>This value is required.</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          BUSINESS ADDRESS<span className="required_fields">*</span>
                        </div>
                        <div className="col-lg-6">
                          <PlacesAutocomplete
                            value={this.state.address}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                            name="address"
                          >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                              <div className="autoSec">
                                <input {...getInputProps({placeholder: 'Enter business address',className: 'input-design',})}/>
                                <div className="autocomplete-dropdown-container">
                                  {loading && <div className="suggestion-item">Loading...</div>}
                                  {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                      ? 'suggestion-item--active'
                                      : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                      <div {...getSuggestionItemProps(suggestion, { className,style,})}>
                                        <span>{suggestion.description}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                          <span className="requiredField" id="address" style={{display:'none'}}>This value is required.</span>
                        </div>
                        {/* <div className="col-lg-6">
                          <textarea type="text" placeholder="Enter business address" className="input-design"></textarea>
                        </div> */}
                      </div>
                    </div>
                    <div className="col-lg-10 m-auto businessInformation">
                      <div className="sub-head-bold1">Contact Information</div>
                      <div className="row">
                        <div className="col-lg-6">
                          EMAIL ADDRESS<span className="required_fields">*</span>
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleText} className="input-design" ref={ email => { this.email = email}}></input>
                          <span className="requiredField" id="email" style={{display:'none'}}>This value is required.</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          FIRST NAME (OPTIONAL)
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Enter your first name" name="firstname" value={this.state.firstname} onChange={this.handleText} className="input-design" ></input>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          LAST NAME (OPTIONAL)
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Enter your last name" name="lastname" value={this.state.lastname} onChange={this.handleText} className="input-design" ></input>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          COMPANY NAME (OPTIONAL)
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Enter your company name" name="company" value={this.state.company} onChange={this.handleText} className="input-design" ></input>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          PHONE NUMBER (OPTIONAL)
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Enter your phone number" name="phone" value={this.state.phone} onChange={this.handleText} className="input-design" ></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 text-right m-auto">
                      <span className="required_fields">* Required fields </span>
                      <button type="button" className="commonButton" onClick={this.scanNow}>Scan Now</button>
                    </div>
                    {this.state.loader == true &&
                      <div className="loaderSec">
                          <img  src={loadingimg} alt="loading" className="my-4" width="100"/>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Footer></Footer>
      </div>
      </ReactDependentScript>
    )
  }
}
