import React from 'react';
import Gallery from 'react-amazon-gallery';

const MainPicture = ({ data }) => {
  let mainPic = data.images.mainImages;

  return (
    <div>
      <Gallery images={mainPic} />
    </div>
  )
};

export default MainPicture;