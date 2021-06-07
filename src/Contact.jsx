import React, { useState } from 'react';

const Contact=()=> {
  const[data,setData]=useState({
    fullname:"",
    phone:" ",
    email:" ",
    message:" ",
  });
  const inputEvent=(main)=>{
    const {name,value}=main.target;
    setData((preval)=>{
      return{...preval,
      [name]:value,
    }
    })
  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`my name ${data.fullname}and number ${data.phone} email id is ${data.email} and i want to say ${data.message}` );
    setData({
      fullname:"",
      phone:" ",
      email:" ",
      message:" ",
    })
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container-fluid_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} >
            <div class="mb-3">
  <label for="exampleFormControlInput1"
   className="form-label">
   FullName
   </label>
  <input type="text" 
  class="form-control" 
   name="fullname"
   value={data.fullname}
onChange={inputEvent}
   placeholder="enter your name"/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">
   Number
   </label>
  <input type="text" 
  name="phone"
  value={data.phone}
  onChange={inputEvent}
  placeholder="Number"
    id="exampleFormControlInput"
    class="form-control"
  />
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1"
   className="form-label">
   Email address
   </label>
  <input type="email" 
  class="form-control" 
  id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onChange={inputEvent}
  placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1"
   class="form-label">Message</label>
  <textarea class="form-control"
  name="message"
  value={data.message}
  onChange={inputEvent}
  placeholder="enter your message" 
  rows="3"/>
</div>

<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
