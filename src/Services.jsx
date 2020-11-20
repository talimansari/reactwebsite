import React from 'react';
import Card from './Card'
import Sdata from './Sdata';
const Servoices = () => {
    return (
        <>
            <section id="banner-section">
                <h2 className="text-center my-5">Our Services</h2>
                <div className="conatiner-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row g-3">
                            {Sdata.map((val,ind) =>{
                                return <Card 
                                key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                />
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Servoices;