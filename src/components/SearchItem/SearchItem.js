import React from 'react';
import './SearchItem.css';


const SearchItem = () => {
    return (
      <div className="searchItem">
        <img src="/images/appart1.jpg" alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">Tower street Apartment</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio apartment with air conditioing
          </span>
          <span className="siFeatures">
            Entire studio - 1 bathroom -21m 1 full bed
          </span>
          <span className="siCancelOp">Free Cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great pric today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.6</button>
          </div>
          <div className="isDetailTexts">
            <span className="siPrice">$120</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton"> See availability</button>
          </div>
        </div>
      </div>
    );
};

export default SearchItem;