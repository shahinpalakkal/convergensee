import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from "../layout/header"
import Footer from "../layout/footer" 
import phone from "../image/phone.png"  
import location from "../image/pin.png"  
import $ from "jquery" 
import { apiCalling } from '../serivce'
import loadingimg from "../image/loading.gif"

export default class contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: '',
      Email: '',
      Company: '',
      Phone: '',
      Message: '',
      error:'',
      errorPhone:'',
      errorVisible:false,
      errorPhoneVisible:false,
      loader:false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount()
  {
    
   
    var dataLayer = window.dataLayer || [];
$(".send-message").on("click", function() {
  dataLayer.push({
    "event": "trackEvent",
    "eventCategory": "Send message",
    "eventAction": "Send Message Click",
    "eventlabel": "Send Message Click"
  });

  console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
});

$(".phone-link").on("click", function() {
  var datalayerAction = $(this).text();

  dataLayer.push({
    "event": "trackEvent",
    "eventCategory": "Call click",
    "eventAction":datalayerAction,
    "eventlabel": "Call click"
  });

  console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
});
$(".email-link").on("click", function() {
  var datalayerAction = $(this).text();
  dataLayer.push({
    "event": "trackEvent",
    "eventCategory": "Email click",
    "eventAction": datalayerAction,
    "eventlabel": "Email click"
  });

  console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
});

    $("#link-contact").addClass("link-contactactive");
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
  }
  handleSubmit() {
    let Email = this.state.Email;
    let Phone = this.state.Phone;
    var characters = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var phoneno = /^[0-9]*$/;
    if (Email == "" ) {
      this.setState({
        errorVisible:true, error:"Invalid Email Address",
        errorPhoneVisible:false, errorPhone:""
      })
    } else if (characters.test(Email) == false) {
      this.setState({errorVisible:true, error:"Invalid Email Address",errorPhoneVisible:false, errorPhone:""})
    } else if (Phone == "") {
      this.setState({
        errorVisible:false, error:"",
        errorPhoneVisible:true, errorPhone:"Enter a valid Mobile Number"})
    }
    else if (phoneno.test(Phone) == false) {
      this.setState({errorVisible:false, error:"",errorPhoneVisible:true, errorPhone:"Enter a valid Mobile Number"})
    } else {
        this.setState({errorVisible:false, error:"",errorPhoneVisible:false, errorPhone:"",loader:true})
        const apiData = {
          method : "POST",
          body : JSON.stringify({
            functionName: "mailSend",
            firstName: this.state.Name,
            lastName: "",
            email: this.state.Email,
            phone: this.state.Phone,
            company: this.state.Company,
            message:this.state.Message
          })
        }
        console.log("apiData..........",apiData)
        apiCalling(apiData).then((data) => {
          this.setState({loader:false})
          if (data.success == "1") {
            //alert(data.successMessage)
            alert("Message sent successfully")
            this.setState({Name:'',Email:'',Phone:'',Company:'',Message:''})
          } 
        })
    }
  }
  
  render() {
    return (
      <div className="convergensee-wrapper contact-wrapper">
          <Helmet>
            <title>{"Contact Us | ConvergenSEE"}</title>
            <meta
              name="description"
              content="Contact Us"
            />
            <link rel="canonical" href={"/contact"} /> 
            <meta name="twitter:description" content="Contact Us"></meta>
            <meta name="facebook:title" content="Contact Us | ConvergenSEE"></meta>
            <meta property='og:type' content='website' />
            <meta property="og:title" content="Contact Us | ConvergenSEE" ></meta>
            <meta property="og:description" content="Contact Us" ></meta>
            <meta property='og:site_name' content="Convergensee" />
            <meta property="og:url" content={window.location.href} ></meta>
          </Helmet>
          <Header></Header>
          <main role="main">
            <div className="convergensee-main">
              <div className="convergensee-bg-theme pt-5">
                <div className="container">
                  <h1 className="main-head" id="main" tabIndex="-1"> Contact Us </h1>
                  <div className="row mt-0 mt-md-5">
                    <div className="col-lg-6">
                      <label className="contctlabel-text">Name:</label>
                      <input type="text" placeholder="Name" aria-label="Name" name="Name" value={this.state.Name} className="input-design input-designmargin" onChange={(e) => this.handleChange(e,"Name")}></input>
                      <label className="contctlabel-text">Company:</label>
                      <input type="text" placeholder="Company" aria-label="Company" name="Company" value={this.state.Company} className="input-design input-designmargin" onChange={(e) => this.handleChange(e,"Company")}></input>
                      <div className="fieldSec">
                      <label className="contctlabel-text">E-mail:</label>
                        <input type="text" placeholder="E-mail" aria-label="E-mail" name="Email" value={this.state.Email} className="input-design input-designmargin" onChange={(e) => this.handleChange(e,"Email")}></input>
                        {this.state.errorVisible == true && <span className="requiredField">{this.state.error}</span>}
                      </div>
                      <div className="fieldSec">
                      <label className="contctlabel-text">Phone:</label>
                        <input type="text" placeholder="Phone" aria-label="Phone" name="Phone" value={this.state.Phone} className="input-design input-designmargin" onChange={(e) => this.handleChange(e,"Phone")}></input>
                        {this.state.errorPhoneVisible == true && <span className="requiredField">{this.state.errorPhone}</span>}
                      </div>
                    </div>
                    <div className="col-lg-6">
                    <label className="contctlabel-text">Message:</label>
                      <textarea type="text" placeholder="Message" aria-label="Message" name="Message" className="input-design input-designmargin" value={this.state.Message} onChange={(e) => this.handleChange(e,"Message")}></textarea>
                    </div>
                    <div className="col-md-12 contacttextdiv">
                      <p className="contacttext">
                        <input type="checkbox" aria-label="Checkbox for following text" className="input-radio" title="Sign up for our Newsletter for the latest in Google Business Profile updates and other Local Search news." placeholder=""></input>
                        Sign up for our Newsletter for the latest in Google Business Profile updates and other Local Search news.</p>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="button" className="commonButton send-message" onClick={() => this.handleSubmit()}>send message</button>
                        
                      <div className="loaderSec" style={{display:"inline-block",width:"50px", height:"30px"}}>
                        {this.state.loader == true &&
                            <img  src={loadingimg} alt="loading" className="my-4" width="100"/>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="convergensee-bg-white">

                <div className="contact-address">
                  <img src={location} alt="" className="contact-icon contact-loc"></img>
                  <div className="contact-det">
                    <h2 className="subtext subtext-bold">US Headquarters</h2>
                    <div className="subtext">444 N Michigan Ave.</div>
                    <div className="subtext">Suite 1270 Chicago, Illinois 60611</div>
                    <div className="subtext subtext-bold">08:30 am – 05:30 pm</div>
                  </div>
                </div>
                <div className="contact-address contact-phn">
                  <img src={phone} alt="" className="contact-icon"></img>
                  <div className="contact-det">
                    <h3 className="subtext subtext-bold">Phone / Email</h3>
                    <div className="subtext subtextphlink phone-link">
                      {/* <a href="tel:+18883073783"> */}
                        +1 (888) 307-3783
                        {/* </a> */}
                      </div>
                    <div className="subtext subtextphlink email-link">
                      {/* <a href="mailto:druiz@convergensee.com"> */}
                        druiz@convergensee.com
                        {/* </a> */}
                      </div>
                    {/* <div className="subtext">csimpson@convergensee.com</div> */}
                  </div>
                </div>
                

                <div className="divider"></div>
                <div className="contact-address">
                  <img src={location} alt="" className="contact-icon contact-loc"></img>
                  <div className="contact-det">
                    <h2 className="subtext subtext-bold">Asia Headquarters</h2>
                    <div className="subtext">#23-08, 160 Robinson Rd, SBF Center,</div>
                    <div className="subtext">Singapore 068914</div>
                    <div className="subtext subtext-bold">9 am - 6 pm </div>
                  </div>
                </div>
                <div className="contact-address">
                  <img src={phone} alt="" className="contact-icon"></img>
                  <div className="contact-det">
                    <h3 className="subtext subtext-bold ">Phone / Email</h3>
                    {/* <div className="subtext">Business Enquiries</div> */}
                    <div className="subtext subtextphlink phone-link">
                      {/* <a href="tel:+6591887002"> */}
                        +65 9188 7002
                      {/* </a> */}
                      </div>
                    <div className="subtext subtextphlink email-link">
                       {/* <a href="mailto:mapmylocation@convergenseeasia.com"> */}
                         mapmylocation@convergenseeasia.com
                        {/* </a> */}
                       </div>
                  </div>
                </div>

                <div className="divider"></div>
                <div className="contact-address">
                  <img src={location} alt="" className="contact-icon contact-loc"></img>
                  <div className="contact-det">
                    <h2 className="subtext subtext-bold">India Headquarters</h2>
                    <div className="subtext">A 507, Level 5, Lighthall, Hiranandani Business Park, 
                                        Saki Vihar Rd, Chandivali, 
                                        Mumbai, Maharashtra 400072</div>
                    {/* <div className="subtext"> Chandivali, Mumbai, Maharashtra 400072 </div> */}
                    <div className="subtext subtext-bold">9 am - 6 pm </div>
                  </div>
                </div>
                <div className="contact-address">
                  <img src={phone} alt="" className="contact-icon"></img>
                  <div className="contact-det">
                    <h3 className="subtext subtext-bold">Phone / Email</h3>
                    {/* <div className="subtext">Business Enquiries</div> */}
                    <div className="subtext subtextphlink phone-link">
                      {/* <a href="tel:+918369737548"> */}
                        +91 8369737548
                      {/* </a> */}
                      </div>
                    <div className="subtext subtextphlink email-link">
                      {/* <a href="mailto:mapmylocation@convergenseeasia.com"> */}
                        mapmylocation@convergenseeasia.com
                      {/* </a> */}
                      </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="contact-address">
                  <img src={location} alt="" className="contact-icon contact-loc"></img>
                  <div className="contact-det">
                    <h2 className="subtext subtext-bold">Asia Tech Center</h2>
                    <div className="subtext">Technopark, 611-615, Nila,</div>
                    <div className="subtext">Trivandrum, Kerala 695581 </div>
                  </div>
                </div>

                <div className="contact-address">
                  <img src={phone} alt="" className="contact-icon contact-loc"></img>
                  <div className="contact-det">
                    <h3 className="subtext subtext-bold">Phone </h3>
                    <div className="subtext subtextphlink phone-link">
                      {/* <a href="tel:+918369737548"> */}
                        +91 8369737548
                      {/* </a> */}
                      </div>
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
