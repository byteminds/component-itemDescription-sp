import React from 'react';
import * as Styled from './styled.jsx';

const MainDescription = ({ data }) => {
  return (
    <Styled.DescriptionContainer>

      <Styled.ProductName>
        {data.productName}
      </Styled.ProductName>

      <div className='seller'>
        by
        {' '}
        <Styled.BlueText>
          {data.seller}
        </Styled.BlueText>
      </div>


      <Styled.Stars src={data.images.stars} />

      {' '}

      <Styled.BlueText>
        {data.numOfReviews} customer reviews |
        {' '}
        {data.numOfQAndA} answered questions
      </Styled.BlueText>

      <Styled.HR></Styled.HR>

      {/* <br /> */}

      <div className='price'>
        Price:
        {' '}
        {data.price}
        {' '}
        {data.isPrime[0] === '&' ?
        <span>
          {data.isPrime}
        </span> :
        <Styled.Prime src={data.isPrime}/>
        }
      </div>

      <div>
        <strong>Note:</strong>
        {' '}
        Available at a lower price from
        {' '}
        <Styled.BlueText>
          other sellers
        </Styled.BlueText>
        , potentially without free Prime shipping.
      </div>

      <ul className='details'>
        {data.description.map(line => (
          <li key={data.description.indexOf(line)}>
            {line}
          </li>
        ))}
      </ul>

      <Styled.BlueText>
        Compare with similar items
      </Styled.BlueText>

      <br/>
      <br/>

      <Styled.BlueText>
        {data.otherCondition} {data.otherSellers}
      </Styled.BlueText>

      <br/>
      <br/>

      <Styled.BlueText>
        Report incorrect product information
      </Styled.BlueText>

    </Styled.DescriptionContainer>
  );
};

export default MainDescription;