import React, { Component } from 'react';
import Gallery from 'react-amazon-gallery';
import Slider from 'react-slick';
import * as Styled from './styled.jsx';

const MainPicture = ({ data }) => {
  let mainPic = data.images.mainImages;

  // render() {
    return (
      <div>
        <Gallery images={mainPic} />
      </div>
    )
  // }
}

// class MainPicture extends Component {

//   render() {
//     let data = this.props.data;
//     let mainPic = data.images.mainImages

//     const settings = {
//       customPaging: i => {
//         return (
//           <a>
//             <Styled.ImageDot src={mainPic[0 + i]} />
//           </a>
//         )
//       },
//       dots: true,
//       dotsClass: 'slick-dots slick-thumb',
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       vertical: true,
//     };

//     return (

//         <Slider {...settings}>
//           {mainPic.map(image => (
//             <div key={mainPic.indexOf(image)} >
//               <Styled.Image src={image} />
//             </div>
//           ))}
//         </Slider>
//     );
//   }
// };

export default MainPicture;