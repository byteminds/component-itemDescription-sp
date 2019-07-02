import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 10pt;
  }
`;

export const DescriptionContainer = styled.div`
  margin-left: 4%;
  margin-right: 270px;
`;

export const ProductName = styled.div`
  font-size: 15.8pt;
  line-height: 1.3;
  font-weight: 400;
`;

export const StarsAndReviewsContainer = styled.div`
  margin-top: 3px;
  margin-bottom: -4px;
`;

export const Stars = styled.img`
  width: 80px;
  height: 18px;
  margin-right: 20px;
  margin-bottom: -5px;
`;

export const HR = styled.hr`
  color: #878787;
  margin-bottom: 20px;
`;

export const PriceAndPrimeContainer = styled.div`
  display: flex;
  margin-bottom: 7px;
`;

export const PriceText = styled.span`
  margin-right: 5px;
`;

export const Price = styled.span`
  font-size: 13pt;
  font-weight: 500;
  color: #B12704;
  margin-right: 5px;
`;

export const FreeShipping = styled.span`
  margin-top: 3px;
`;

export const Prime = styled.img`
  width: 54px;
  height: 15px;
  margin-top: 3px;
`;

export const LinkedList = styled.li`
  margin-left: -25px;
`;

export const BlueText = styled.span`
  color: #0066c0;
`;

export const Container = styled.div`
  display: flex;
`;