import React from 'react';
import * as Styled from './styled.jsx';
import boldFont from '../../dist/fonts/AmazonEmber_Bd.ttf';

const MainDescription = ({ data }) => {
  return (
    <Styled.DescriptionContainer>

      <Styled.ProductName>
        {data.productName}
      </Styled.ProductName>

      by
      {' '}
      <Styled.BlueText>
        {data.seller}
      </Styled.BlueText>

      <Styled.StarsAndReviewsContainer>
        <Styled.Stars src={data.images.stars} />
        {' '}
        <Styled.BlueText>
          {data.numOfReviews} customer reviews |
          {' '}
          {data.numOfQAndA} answered questions
        </Styled.BlueText>
      </Styled.StarsAndReviewsContainer>

      <Styled.HR></Styled.HR>

      <Styled.PriceAndPrimeContainer>
        <Styled.PriceText>
          Price:
        </Styled.PriceText>
        <Styled.Price>
          {data.price}
        </Styled.Price>
        {data.isPrime[0] === '&' ?
        <Styled.FreeShipping style={{ fontFamily: boldFont }}>
          {data.isPrime}
        </Styled.FreeShipping> :
        <Styled.Prime src={data.isPrime}/>
        }
      </Styled.PriceAndPrimeContainer>

      <span style={{ fontFamily: boldFont }}>
        Note:
      </span>
      {' '}
      Available at a lower price from
      {' '}
      <Styled.BlueText>
        other sellers
      </Styled.BlueText>
      , potentially without free Prime shipping.

      <ul>
        {data.description.map(line => (
          <Styled.LinkedList key={data.description.indexOf(line)}>
            {line}
          </Styled.LinkedList>
        ))}
      </ul>

      <Styled.BlueText>
        Compare with similar items
      </Styled.BlueText>

      <br/>
      <br/>

      <Styled.BlueText>
        <span style={{ fontFamily: boldFont }}>
          {data.otherCondition}
        </span>
        {' '}
        {data.otherSellers}
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