import React, { Component } from 'react';
import $ from "jquery" 
import { apiCalling } from '../../serivce'




export default class Guideform extends Component {
  componentDidMount(){
    var dataLayer = window.dataLayer || [];
    $(".commonButton-dwnldguide").on("click", function() {
      dataLayer.push({
        "event": "trackEvent",
        "eventCategory": "Form",
        "eventAction": "PDF Downloaded",
        "eventlabel":  "download Click"
      });
    
      console.log('dataLayer: '+JSON.stringify(dataLayer[dataLayer.length -1]));
    });
  }
    constructor(props){
      super(props)
      this.downloadFile = this.downloadFile.bind(this);
    }

    guideTextFirstname(e) {
      let firstname=  $("#firstname").val();
      if(!firstname){  $("#firstnameerror").show();  }
      else{  $("#firstnameerror").hide(); }

    } 
    guideTextLastname(e) {
      let lastname=  $("#lastname").val();
      if(!lastname){  $("#lastnameerror").show();  }
      else{  $("#lastnameerror").hide();  }

    } 
    guideTextEmail(e) {
      let email=  $("#email").val();
      var characters = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(!email || characters.test(email) == false){
        $("#emailerror").show();
      }
      else{
          $("#emailerror").hide();
      }
    }
    guideTextMob(event){
      let phone= $("#phone").val();
      const phoneno = /^[0-9\b]+$/;
      if(!phone || phoneno.test(phone)){
        if(phone.length == 10 ){
          $("#phoneerror").hide();
        }
        else{
            $("#phoneerror").show();
        }
      }
      else{
        $("#" + event.target.id).val('')
          $("#phoneerror").hide();
      }
    }
    
    downloadFile = (el) => {   
        var flag = true; 
        let firstname= ($("#firstname").val()  === "undefined" || $("#firstname").val() === undefined )?"":$("#firstname").val();
        let lastname= ($("#lastname").val()  === "undefined" || $("#lastname").val() === undefined )?"":$("#lastname").val();
        let email= $("#email").val();
        let phone= $("#phone").val();
        let company= $("#company").val();
        var characters = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var phoneno = /^[0-9\b]+$/;
      
        // exportToJson = el => {
        //   if (!isEmpty(this.formData)) {
        //     const obj = encodeURIComponent(JSON.stringify(this.formData, null, '\t'));
        //     const data = "text/json; charset=utf-8," + "obj";
        //     const date = new Date();
      
        //     const fileName = "customName.json";
        //     el.target.setAttribute('href', 'data:' + data);
        //     el.target.setAttribute('download', fileName);
        //   }
        // };
      
       
        // const file = new jsPDF();
        // const fileURL = URL.createObjectURL("the-ultimate-guide-to-google-posts");
        //  const pdfWindow = window.open();
        //  pdfWindow.location.href = fileURL;  

        $(".error-msg").hide();
        if (!firstname){
            $("#firstname").focus()
            $("#firstnameerror").show()
            flag = false;
        }
        if (!lastname){
            $("#lastname").focus()
            $("#lastnameerror").show()
            flag = false;
        }
        if (!email) {
            $("#email").focus()
            $("#emailerror").show()
            flag = false;
        }
        if (email) {
          if (characters.test(email) === false) {
              $("#email").focus()
              $("#emailerror").show()
              flag = false;
          }
        }
        if (phone) {
          if (phone.length !== 10 || phoneno.test(phone) === false) {
              $("#phone").focus()
              $("#phoneerror").show()
              flag = false;
          }
        }
        if(flag == true){
            const apiData = {
            method : "POST",
            body : JSON.stringify({
              functionName: "contactus",
              firstName: firstname,
              lastName: lastname,
              email: email,
              phone: phone,
              company: company,
              message: "Downloaded Convergensee free guide!",
              jobtitle:"",
              subject:"Downloaded Convergensee free guide!",
              flag:""
            })
          }
          // console.log("apiData..........",apiData)
          apiCalling(apiData).then((data) => {
          if (data.success == "1") {
            //alert(data.successMessage)
            $("#downloadFileMsg").show();
            $("#downloadFileMsg").css("color","green");
            $("#firstname, #lastname, #email, #phone, #company").val('')
            document.getElementById('guidePdfDownloadBtn').click();
          } 
        })
        // console.log("firstname= ",firstname)
        // console.log("lastname= ",lastname)
        // console.log("email= ",email)
        // console.log("phone= ",phone)
        // console.log("company= ",company)
        // console.log("jobtitle= ","")
       }
       else {
         $("#downloadFileMsg").show();
         $("#downloadFileMsg").text("Something went wrong.")
       }

    }
  render() {    

    return (
      <div className="convergensee-wrapper">
         <main className="guidefrm-marginTab">
          
                <div className="guideform-wraper">

                <form className="guidefrm-outer">
                    <h2 className="guidefrm-head">Download your free guide!</h2>
                    <div className="guidefrm-field">
                        <label className="guideform-label">First Name*</label> <br/>
                        <input type="text" name="firstname" id="firstname" aria-label="First Name" onChange={(e) => this.guideTextFirstname(e)} className="guideform-input" />  <br/>
                        <label id="firstnameerror" className="error-msg">Please enter your first name.</label>
                    </div>

                    <div className="guidefrm-field">
                        <label className="guideform-label">Last Name*</label> <br/>
                        <input type="text" name="lastname" id="lastname" aria-label="Last Name" onChange={(e) => this.guideTextLastname(e)} className="guideform-input" />  <br/>
                        <label id="lastnameerror" className="error-msg">Please enter your last name.</label>
                    </div>

                    <div className="guidefrm-field">
                        <label className="guideform-label">Email*</label> <br/>
                        <input type="text" name="email" id="email" aria-label="Email"  onChange={(e) => this.guideTextEmail(e)} className="guideform-input" />  <br/>
                        <label id="emailerror" className="error-msg">Please enter a vaild email address.</label>
                    </div>

                    <div className="guidefrm-field">
                        <label className="guideform-label">Phone Number</label> <br/>
                        <input type="text" name="phone" id="phone" aria-label="Phone Number" maxLength="10" onChange={(e) => this.guideTextMob(e)} className="guideform-input" />  <br/>
                        <label id="phoneerror" className="error-msg">Please enter a vaild Mobile number.</label>
                    </div>

                    <div className="guidefrm-field">
                        <label className="guideform-label">Company Name</label> <br/>
                        <input type="text" name="company" id="company" aria-label="Company Name" className="guideform-input" />
                    </div>

                    <div className="guidefrm-field mt-4"  style={{display:"inline-block",position:"relative", padding:"0"}}>
                        <button type="button" className="commonButton-dwnldguide" onClick={() => this.downloadFile()}>Download now</button>
                        <a download={this.props.guidePdfName} href={this.props.guidePdf} id="guidePdfDownloadBtn" className="guidePdfDownloadBtn">PDF Downloaded</a>
                    </div>
                    <div className="guidefrm-field p-0">  
                      <label id="downloadFileMsg" className="error-msg" style={{fontSize:"14px"}}>Message sent successfully</label>
                    </div>
                </form>
                
                
                </div>
               
                <div className="guide-dwldText">
                    <p>By downloading this guide, you consent to allow ConvergenSEE to store and process the personal information submitted above to provide you the content requested. ConvergenSEE respects your privacy. From time to time, we may reach out about products and services, as well as other agency content that may be of interest to you. You can unsubscribe from these communications at any time.</p>
                </div>
          </main>
       
      </div>
    )
  }
}
