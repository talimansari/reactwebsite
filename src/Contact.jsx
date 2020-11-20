import React, { useState } from 'react';


const Contact = () => {
const [data,setData] = useState({
  fullName:'',
  phone:'',
  email:'',
  msg:'',
});

const inputEvent = (event) => {
 const {name,value} = event.target;

 setData((preval) =>{

    return{
        ...preval,[name]:value,
    };
    
 });
};

  const formSubmit = (e) => {
e.preventDefault();
alert(`my name is ${data.fullName}.my phone number is ${data.phone}.my thoughts is ${data.msg}`);
  }  
    return (
        <>
            <section id="banner-section">
                <div className="conatiner">
                    <h1 className="text-center">Our Contact</h1>
                    <div class="row">
                        <div className="col-md-6 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                    <input 
                                    type="text"
                                    class="form-control" 
                                    name="fullName"
                                    value={data.fullName}
                                    onChange={inputEvent}
                                    placeholder="Enter Your FullName" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">phone</label>
                                    <input 
                                    type="number" 
                                    class="form-control"  
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputEvent}
                                    placeholder="Mobile Number" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" 
                                    class="form-control"  
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="Enter your Email" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Massage</label>
                                    <textarea type="text"
                                    name="msg"
                                    value={data.msg}
                                    onChange={inputEvent} 
                                    class="form-control">
                                    </textarea>
                                </div>
                               
                                <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contact;