import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RakhiWrapper from './Rakhi.style'

const index = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <RakhiWrapper>
      <div className="container">
        {/* <h2> Responsive </h2> */}
        <div className=" container d-flex justify-content-between pl-8 py-2">
          
          <div className="d-flex gap-3">
          <h1 className="fs-4">Deal of the day</h1>
          <i class="fa-solid fa-stopwatch"></i>
            <h2>13 : 46 : 45 Left</h2>
          </div>
          <button className="btn btn-primary">View All</button>
          
        </div>
        <Slider {...settings}  >
          <div className=" Cards d-flex flex-column text-center max-W px-2">
            <img src="/app/Rakhi/men.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Mens'wear</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W   px-2">
            <img src="/app/Rakhi/blause.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Women's Wear</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W  px-2">
            <img src="/app/Rakhi/eau.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2"> Euo Elite Appliances</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W  px-2">
            <img src="/app/Rakhi/festival.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Festival Special</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W  px-2">
            <img src="/app/Rakhi/handbags.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Women's Handbags</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W  px-2">
            <img src="/app/Rakhi/kurta.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Men Kurta Special</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W  px-2">
            <img src="/app/Rakhi/menssets.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Men's Top Offers</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W  px-2">
            <img src="/app/Rakhi/rakhi.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Rakhi Special Offers</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W  px-2">
            <img src="/app/Rakhi/saree.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Women's Offers</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W  px-2">
            <img src="/app/Rakhi/sets.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Top Offers</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W  px-2">
            <img src="/app/Rakhi/shoes.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Shoes Offers</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
          <div className=" Cards d-flex flex-column text-center max-W  px-2">
            <img src="/app/Rakhi/womens.webp" className="Sub-Card"></img>
            <h1 className="fw-bold my-2">Women's Top Offers</h1>
            <p className="text-success">Up To 50% off</p>
          </div>
        </Slider>
      </div>
      </RakhiWrapper>
    </>
  );
};

export default index;
