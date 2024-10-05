import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import GuideBanner from "../../assets/Img/Guides-Banner.png";
import { pathDefault } from "../../common/path.js";
import { Carousel } from "antd";
import GuideItem1 from "../../assets/Img/guide-item1.png";
import GuideItem2 from "../../assets/Img/guide-item2.png";
import GuideItem3 from "../../assets/Img/guide-item3.png";
import GuideItem4 from "../../assets/Img/guide-item4.png";
import GuideItem5 from "../../assets/Img/guide-item5.png";
import Mof1 from "../../assets/Img/mof11.png";
import Mof2 from "../../assets/Img/mof2.png";
import Mof3 from "../../assets/Img/mof3.png";
import Mof4 from "../../assets/Img/mof4.png";
import Mof5 from "../../assets/Img/mof5.png";
import Mof6 from "../../assets/Img/mof6.png";
import Mof7 from "../../assets/Img/mof7.png";
import Mof8 from "../../assets/Img/mof8.png";
import Mof9 from "../../assets/Img/mof9.png";
import Mof10 from "../../assets/Img/mof10.png";
import Mof12 from "../../assets/Img/mof12.png";
import Slider from "react-slick";

const MadeOnFiverr = () => {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: "",
          right: "20px",
          display: "block",
          fontSize: "15px",
          // borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "",
          left: "20px",
          zIndex: "10",
          // background: "white",
          // padding: "10px",
          fontSize: "15px",
          // borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container mx-auto px-2 my-3 pb-10">
      <h2 className="mx-3 my-5" style={{ fontWeight: 400, fontSize: "46px" }}>
        Made on Fiverr
      </h2>
      <div className="grid grid-cols-4 grid-rows-5 gap-3 my-3">
        <div>
          <img src={Mof1} alt="" />
        </div>
        <div className="row-span-2">
          <img src={Mof7} alt="" />
        </div>
        <div className="row-span-3">
          <img src={Mof9} alt="" />
        </div>
        <div>
          <img src={Mof3} alt="" />
        </div>
        <div>
          <img src={Mof2} alt="" />
        </div>
        <div className="col-start-1 row-start-3">
          <img src={Mof3} alt="" />
        </div>
        <div className="row-span-2 col-start-1 row-start-4">
          <img src={Mof7} alt="" />
        </div>
        <div className="row-span-3 col-start-2 row-start-3">
          <img src={Mof10} alt="" />
        </div>
        <div className="row-span-2 col-start-4 row-start-2 flex items-center">
          <img src={Mof7} alt="" />
        </div>
        <div className="col-start-4 row-start-4">
          <img src={Mof1} alt="" />
        </div>
        <div className="row-span-2 col-start-3 row-start-4">
          <img src={Mof12} alt="" />
        </div>
        <div className="col-start-4 row-start-5 flex items-center">
          <img src={Mof2} alt="" />
        </div>
      </div>
      {/* Guides */}

      <div className="guides py-8 slider-container">
        <div className="py-5 my-3">
          <h3 style={{ fontSize: "45px", fontWeight: 600 }}>
            Guides to help you grow
          </h3>
        </div>
        <Slider {...settings}>
          <div className="slide">
            <a href="">
              <div className="">
                <img src={GuideItem1} alt="" />
              </div>
              <span>Start a side business</span>
            </a>
          </div>
          <div className="slide">
            <a href="">
              <div>
                <img src={GuideItem2} alt="" />
              </div>
              <span>Ecommerce business ideas</span>
            </a>
          </div>
          <div className="slide">
            <a href="">
              <div className="">
                <img src={GuideItem3} alt="" />
              </div>
              <span>Start an online business and work from home</span>
            </a>
          </div>
          <div className="slide">
            <a href="">
              <div className="">
                <img src={GuideItem4} alt="" />
              </div>
              <span>Build a website from scratch</span>
            </a>
          </div>
          <div className="slide">
            <a href="">
              <div className="">
                <img src={GuideItem5} alt="" />
              </div>
              <span>Grow your business with AI</span>
            </a>
          </div>
        </Slider>
      </div>
      {/* guides banner */}
      <div className="guides_banner py-6">
        <div className=""></div>
        <div
          className="w-full flex justify-center items-end "
          style={{
            backgroundImage: `url(${GuideBanner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "276px",
          }}
        >
          <div className=""></div>
          <div className="mb-8" style={{}}>
            <Link
              to={pathDefault.login}
              style={{
                backgroundColor: "#fff",
                color: "#222325",
                fontWeight: 600,
              }}
              className="py-3 px-5 rounded-lg hover:bg-gray-300 hover:opacity-90"
            >
              Join Fiverr
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeOnFiverr;
