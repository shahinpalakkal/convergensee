import React, { Component } from 'react';
import { apiCalling } from '../serivce'

export default class MBLform extends Component {
    constructor(props){
        super(props)
        this.state= {
            firstname: '',
            email : '',
            phone : '',
            company: '',
            jobtitle:  '',
            noOfLocation: '',
            message:  ''
        };
    }
    mblFormText = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        })
    }
    requestADemo = () => {
        let firstname= this.state.firstname;
        let email = this.state.email;
        let phone = this.state.phone;
        var characters = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var phoneno = /^[0-9]*$/;


        if (firstname===""){
            alert("Enter Firstname")
              document.getElementById("firstname").focus();
          }
        //   else if (lastname===""){
        //     alert("Enter Lastname")
        //       document.getElementById("lastname").focus();
        //   }
        else if(characters.test(email) === false || email === "" ){
            alert("Enter valid email address")
            document.getElementById("email").focus();
        }
        else if(phoneno.test(phone) === false || phone.length !== 10 ){
            alert("Enter valid Mobile Number")
            document.getElementById("phone").focus();
        }
        else{const apiData = {
            method : "POST",
            body : JSON.stringify({
              functionName: "contactus",
              firstName: this.state.firstname,
              lastName: "",
              email: this.state.email,
              phone: this.state.phone,
              company: this.state.company,
              message: this.state.message,
              jobtitle: this.state.jobtitle,
              noOfLocation: this.state.noOfLocation,
              subject:"Request a demo!",
              flag:"demo"
            })
          }
          console.log("apiData..........",apiData)
          apiCalling(apiData).then((data) => {
            if (data.success == "1") {
              alert("Message sent successfully")
              this.setState({firstname:'',email:'',phone:'',company:'',jobtitle:'',noOfLocation:'',message:''})
              window.location.href= "/thankyou";
            } 
            else{
                alert("Something went wrong.")
            }
          })
        }

        // console.log("firstname= ",this.state.firstname)
        // console.log("email= ",this.state.email)
        // console.log("phone= ",this.state.phone)
        // console.log("company= ",this.state.company)
        // console.log("jobtitle= ",this.state.jobtitle)
        // console.log("message= ",this.state.message)
        // console.log("noOfLocation= ",this.state.noOfLocation)
    }

    render() {

        return (
            <div>
                <div className='mbl-frm-div'>
                    <div className="fieldSec mb-1">
                        {/* <label className="contctlabel-text">First Name:*</label> */}
                        <input type="text" placeholder="Full Name" aria-label="FirstName" className="input-design input-designmargin" 
                        name="firstname" id="firstname" value={this.state.name} onChange={(e) => this.mblFormText(e,"name")}/>
                    </div>
                    {/* <div className="fieldSec mb-1" >
                        <input type="text" placeholder="Last Name" aria-label="LastName" className="input-design input-designmargin" 
                        name="lastname" id="lastname" value={this.state.name} onChange={(e) => this.mblFormText(e,"name")}/>
                    </div> */}
                    <div className="fieldSec mb-1">
                        {/* <label className="contctlabel-text">E-mail:*</label> */}
                        <input type="text" placeholder="Email ID" aria-label="E-mail" className="input-design input-designmargin" 
                        name="email" id="email" value={this.state.email}  onChange={(e) => this.mblFormText(e,"email")}/>
                    </div>
                    
                    <div className="fieldSec mb-1">
                        {/* <label className="contctlabel-text">Phone Number:</label> */}
                        <input type="text" maxLength={10} placeholder="Phone Number" aria-label="Phone" className="input-design input-designmargin" 
                        name="phone" id="phone" value={this.state.phone} onChange={(e) => this.mblFormText(e,"phone")} />
                   </div>
                    <div className="fieldSec mb-1">
                        {/* <label className="contctlabel-text">Job Title:</label> */}
                        <input type="text" placeholder="Job Title" aria-label="JobTitle" className="input-design input-designmargin" 
                        name="jobtitle" id="jobtitle" value={this.state.jobtitle} onChange={(e) => this.mblFormText(e,"jobtitle")} />
                   </div>
                  
                   
     
                    <div className="fieldSec mb-1">
                        {/* <label className="contctlabel-text">Company Name:</label> */}
                        <input type="text" placeholder="Company Name" aria-label="CompanyName" className="input-design input-designmargin" 
                        name="company" id="company" value={this.state.company} onChange={(e) => this.mblFormText(e,"company")} />
                   </div>

                   <div className="fieldSec mb-1">
                        {/* <label className="contctlabel-text">Company Name:</label> */}
                        {/* <input type="text" placeholder="Company Name" aria-label="CompanyName" className="input-design input-designmargin" 
                        name="company" id="company" value={this.state.company} onChange={(e) => this.mblFormText(e,"company")} /> */}
                   <select name="noOfLocation" id="noOfLocation" value={this.state.noOfLocation} onChange={(e) => this.mblFormText(e,"noOfLocation")} placeholder="No of Locations" className="input-design input-designmargin mbl-select">
                            <option value="" disabled selected>No of Locations</option>
                            <option value="Single">Single</option>
                            <option value="Multiple">Multiple</option>
                   </select>
                   </div>
                    <div className="fieldSec mb-1">
                        {/* <label className="contctlabel-text">Message:</label> */}
                        <textarea type="text" placeholder="Message" aria-label="Message" className="input-design input-designmargin textarea-heightbuins"
                         name="message" id="message" value={this.state.message} onChange={(e) => this.mblFormText(e,"message")} ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="button" className="commonButton m-0 commonbtn-mbl" onClick={() => this.requestADemo()}> Request a demo !</button>
                    </div>
                </div>
            </div>

        )
    }
}
