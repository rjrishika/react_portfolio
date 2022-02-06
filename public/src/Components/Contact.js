import React from 'react'
import "../Styles/Contact.css"

import firebase from "./FirebaseCofig";

function Contact() {
    //Create the db in the firebase database

    const contactForm = firebase.database().ref("contactMessages");

   const contactFormSubmit = () =>{
       var name = getElementVal("nameField")
       var email = getElementVal("emailField")
       var msg = getElementVal("msgContent")
    
       saveMessages(name, email , msg);

       //display alert

       document.querySelector(".alert").classList.add("moveIn");
       document.querySelector(".alert").getElementsByClassName.display = "flex";

       setTimeout(() => {
        document.querySelector(".alert").getElementsByClassName.display = "none";
       }, 1);
   };

   const saveMessages =(name, email, msg) =>{
       var newContactFormRef = contactForm.push();
       newContactFormRef.set({
           name : name,
           email : email,
           msg : msg
       })
   }

   const getElementVal =(id) => {
       return document.getElementById(id).value; 
   }   

    return (
        <section className='contact section' id="contact">
            <div className='circle contact_circleOne'></div>
            <div className='circle contact_circleThree'></div>

            <h2 className='section_title'>Contact Me</h2>

            <div className='contactContainer bd_grid'>
               <form id="contact_form" className='contact_form' onSubmit = {(e) => e.preventDefault}>
                   <input type="text" placeholder='Name' required id="nameField" className='contact_input'/>
                   <input type="email" placeholder='Email' required id="emailField" className='contact_input'/>
                   <textarea id="msgContent" cols="0" rows="10" className='contact_input' placeholder='Message'></textarea>
                   <input type="submit" value="Send" className='button contact_button' onClick={contactFormSubmit}></input>
               </form>
            </div>
        </section>
    )
}

export {Contact}
