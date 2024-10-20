// import React, { useEffect } from 'react';
// import front from '../../images/front.png';
// import mariamImage from '../../images/mariam.jpg';
// import { Carousel } from 'react-bootstrap'
// import './Home.css'
// export default function Home() {
  
// return(<>
//         <Carousel interval={2000}>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100 nav"
//                     src={front}
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3 className='text-primary'>Hi I am Mariam Wageeh</h3>
//                     <button type="button">Show My cv</button>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100 nav"
//                     src={mariamImage}
//                     alt="Second slide"
//                 />
//                 <Carousel.Caption>
//                     <h3 className='text-primary'>For contact me </h3>
//                     <div className="icons">
//                     <i className="fa-solid fa-envelope-open-text"></i>
//                     <i className="fa-brands fa-linkedin"></i>
//                     </div>
//                 </Carousel.Caption>
//             </Carousel.Item>
         
//         </Carousel>
    
// </>
// );
// }
// import React from 'react';
// import front from '../../images/front.png';
// import mariamImage from '../../images/mariam.jpg';
// import { Carousel } from 'react-bootstrap';
// import './Home.css';

// export default function Home() {
//   return (
//     <>
//       <Carousel interval={2000}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 nav"
//             src={front}
//             alt="First slide"
//           />
//           <Carousel.Caption className="custom-caption">
//             <h3 className="text-primary">Hi, I am Mariam Wageeh</h3>
//             <button type="button">Show My CV</button>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 nav"
//             src={mariamImage}
//             alt="Second slide"
//           />
//           <Carousel.Caption className="custom-caption">
//             <h3 className="text-primary">For contact me</h3>
//             <div className="icons">
//               <i className="fa-solid fa-envelope-open-text"></i>
//               <i className="fa-brands fa-linkedin"></i>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </>
//   );
// }
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

export default function Home() {
    const handleButtonClick = () => {
        window.open("https://drive.google.com/file/d/1ncYUGelPoiLbwpAjozGvf165Rnkj6QhP/view?usp=sharing", "_blank"); // Replace with your Google Drive link
      };
  return (
    <>
      <Carousel interval={2000}>
        <Carousel.Item className="carousel-item-custom white-background">
          <Carousel.Caption className="custom-caption">
            <h3 className='text-dark '>Hi, I am Mariam Wageeh<br></br>Frontend developer and code instructor</h3>
            <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
              Show My CV
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item-custom black-background">
          <Carousel.Caption className="custom-caption">
            <h3 className='text-light t'>Hi, I am Mariam Wageeh<br></br>Frontend developer and code instructor</h3>
            <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
              Show My CV
            </button>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
