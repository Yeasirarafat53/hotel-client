import React from 'react';
import useFetch from '../../hooks/useFetch';
import './Featured.css';

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=dhaka,jamalpur,sylhet'
  );
console.log(data);
  return (
    <div className="featured">
      {loading ? (
        'Loading please wait...'
      ) : (
        <>
          <div className="featuredItem">
            <img src="/images/spot6.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Dhaka</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="/images/spot2.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Jamalpur</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="/images/spot3.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Sylhet</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
