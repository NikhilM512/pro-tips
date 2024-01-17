import React, { useState } from 'react'
import "./Registration.css"

const Registration = () => {

    const [field,setField]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:""
    });
  
    const [submitted,setSubmit]=useState(false);
    const [validate,setValidate]=useState(false);
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      setSubmit(true);
      if(field.firstName!="" && field.lastName!="" && field.email!="" && field.phoneNumber!="" 
      && field.phoneNumber.length==10 && field.email.includes("@")==true){
        setValidate(true);
      }
  
    }
  
  
    return (
      <>
        <form className='registration-form' onSubmit={handleSubmit}>
            <div>
              {validate ? <h3>Registration Successfull</h3>:""}
            </div>
           <input 
              id="first-name" 
              className='form-inputs' 
              type="text"
              value={field.firstName} 
              placeholder='First name' 
              onChange={(e)=>setField({...field,firstName:e.target.value})}/>
  
              {submitted==true && field.firstName=="" ? <p>Enter your first name</p> : null}
  
           <input 
              id="last-name" 
              className='form-inputs' 
              type="text" 
              placeholder='Last name'
              value={field.lastName} 
              onChange={(e)=>setField({...field,lastName:e.target.value})}/>
  
              {submitted==true && field.lastName=="" ? <p>Enter your last name</p> : null}
  
           <input 
              id="email" 
              className='form-inputs' 
              type="text" 
              placeholder='Email'
              value={field.email}
              onChange={(e)=>setField({...field,email:e.target.value})}/>
  
            {submitted==true && field.email=="" ? <p>Enter your email </p> : null}
  
            {submitted==true && field.email.includes("@")==false ? <p>Enter correct email address </p> : null}
  
           <input 
              id="phn-number" 
              className='form-inputs' 
              type="text" 
              placeholder='Phone Number'
              value={field.phoneNumber}
              onChange={(e)=>setField({...field,phoneNumber:e.target.value})}/>
  
              {submitted==true && field.phoneNumber=="" ? <p>Enter your phone number</p> : null}
  
              {submitted==true && field.phoneNumber.length!=10 ? <p>Enter 10 digit phone number</p> : null}
  
            <button id="reg-btn" type="submit">Register</button>
        </ form>
        
      </>
    )
}

export default Registration