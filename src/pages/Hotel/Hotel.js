import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './Hotel.css';
import MailList from './../../components/MailList/MailList';
import Footer from './../../components/Footer/Footer';

const Hotel = () => {
 
  const photos = [
    {
      src: '/images/bed1.jpg',
    },
    {
      src: '/images/bed2.jpg',
    },
    {
      src: '/images/bed3.jpg',
    },
    {
      src: '/images/bed4.jpg',
    },
    {
      src: '/images/bed5.jpg',
    },
    {
      src: '/images/bed6.jpg',
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
              <div className="hotelWrapper">
                  <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <i class="fa-solid fa-location-dot"></i>
            <span>Elton st 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $125 at this property and get a free ariport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located 1 mi from Grand Palace, Villa Phra Sumen Bangkok
                features comfortable rooms with warm-toned lighting. The
                property offers a 24-hour front desk and free WiFi, which is
                available throughout.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 9-night stay</h1>
              <span>
                Located in the real heart of krakow, this property has an
                excellent location score of 9.8
              </span>
              <h2>
                <b>$500</b> (9 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
              </div>
              <MailList />
              <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
