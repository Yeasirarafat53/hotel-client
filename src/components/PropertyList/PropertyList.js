import React from 'react';
import './PropertyList.css';
import useFetch from './../../hooks/useFetch';

const PropertyList = () => {
  const { data, loading, error } = useFetch('/hotels/countByType');
  const images = [
    '/images/hotel1.jpg',
    '/images/hotel5.jpg',
    '/images/hotel2.jpg',
    '/images/hotel3.jpg',
    '/images/hotel4.jpg',
  ];
  return (
    <div className="pList">
      {loading ? (
        'loading'
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
