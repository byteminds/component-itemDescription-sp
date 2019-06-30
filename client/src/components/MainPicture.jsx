import React, { Component } from 'react';
import Gallery from 'react-amazon-gallery';
import ReactImageMagnify from 'react-image-magnify';
import * as Styled from './styled.jsx';

const MainPicture = ({ data }) => {
  let mainPic = data.images.mainImages;

  return (
    <div>
      <Gallery images={mainPic} />
        {mainPic.map(image => (
          <div>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Testing for first Magnify',
                isFluidWidth: true,
                src: image,
              },
              largeImage: {
                src: image,
                width: 1200,
                height: 1800,
              },
            }} />
          </div>
        ))}
    </div>
  )
};

export default MainPicture;