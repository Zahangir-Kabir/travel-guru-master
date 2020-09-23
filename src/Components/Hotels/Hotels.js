import React from 'react';
import { useParams } from 'react-router-dom';
import HotelData from '../FakeData/hotelInfo.json';
import './hotels.css';
import GoogleMap from '../GoogleMap/GoogleMap';
import HotelDetails from './HotelDetails';

const Hotels = () => {
    const {name} = useParams();
    const data = [...HotelData];
    const hotelDetails = data.filter(element => element.place === name);

    return (
        <div className="main-container">
            <div className="hotel-area mb-10">
            <div className="title">
                <h6>Stay in {name}</h6>
            </div>
            {
                hotelDetails.map(each => <HotelDetails key={each.id} data={each}></HotelDetails>)
            }
            </div>
            <div className="map-area">
                <GoogleMap></GoogleMap>
            </div>
        </div>
    );
};

export default Hotels;