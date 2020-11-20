import React from 'react';



const Card = (props) => {

    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <div className="img-wrap">
                        <img src={props.imgsrc} />
                    </div>
                   <h3>{props.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Ut nulla deleniti nostrum ducimus ipsum quos debitis nisi.
                    Debitis provident quibusdam sit asperiores ipsum atque vel iure delectus,
                          adipisci numquam labore.</p>
                    <a herf="#">Go Anywhere</a>
                </div>
            </div>
        </>
    );
}
export default Card;