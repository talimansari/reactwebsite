import React from 'react';
import {NavLink}  from 'react-router-dom';

const Common = (props) => {
    return(
    <>
<section id="banner-section">
    <div className="conatiner-fluid ">
     <div class="row">
         <div className="col-10 mx-auto mt-5">
             <div className="row justify-content-center align-items-center">
                 <div class="col-md-6 ">
                   <h1>{props.title}</h1>
                     <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Voluptate molestiae ipsam aspernatur totam minus quia,
                           ea in unde vitae odio ducimus aperiam,
                           ratione ad dolor quisquam ullam harum nulla qui?</h2>
                          <p>At voluptas vitae maxime doloribus nemo atque modi odit reprehenderit sit iure.</p>
                          <NavLink to={props.visit} className="btn-get-start">{props.btnName}</NavLink>
                 </div>
                 <div class="col-md-6 ">
                     <div className="banner_img">
                     <img src={props.imgsrc} alt="Banner image" className="img-fluid" />
                     </div>
                 </div>
             </div>
         </div>
     </div>
    </div>
    </section>
    </>
    );
}
export default Common;