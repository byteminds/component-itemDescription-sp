import React from 'react';

const MainDescription = ({ data }) => {
  return (
    <div className='description-container'>
      {console.log('MainD', data)}

      <div className='description'>
        {data.productName}
      </div>

      <div className='seller'>
        by
        {' '}
        <span className='blue-text'>
          {data.seller}
        </span>
      </div>

      <img className='stars' src={data.images.stars} />

      <div className='reviews-and-questions'>
        {data.numOfReviews} customer reviews |
        {' '}
        {data.numOfQAndA} answered questions
      </div>

      <div className='price'>
        Price:
        {' '}
        {data.price}
        {' '}
        {data.isPrime[0] === '&' ?
        <span>
          {data.isPrime}
        </span> :
        <img className='is-prime' src={data.isPrime}/>
        }
      </div>

      <div>
        <strong>Note:</strong>
        {' '}
        Available at a lower price from
        {' '}
        <span className='blue-text'>
          other sellers
        </span>
        , potentially without free Prime shipping.
      </div>

      <div className='details'>
        {data.description}
      </div>

      <span className='blue-text'>
        Compare with similar items
      </span>

      <div className='other-prices'>
        {data.otherCondition} {data.otherSellers}
      </div>

      <span className='blue-text'>
        Report incorrect product information
      </span>

    </div>
  );
};

export default MainDescription;