import React from 'react';
import './hotels.css'

const HotelDetails = (props) => {
    console.log(props)
    const {title, feature, details, rating, cost, image} = props.data;
    return (
        <div className="custom-style">
            <div className="image-area">
                <img src={image} height="150px" alt=""/>
            </div>
            <div className="content" style={{color:"black"}}>
                <p style={{color:"black"}}>{title}</p>
                <p style={{color:"black"}}>{feature}</p>
                <p style={{color:"black"}}>{details}</p>
                <div className="rating-cost-area">
                    <span>{rating}</span> <span>${cost}/night</span>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;