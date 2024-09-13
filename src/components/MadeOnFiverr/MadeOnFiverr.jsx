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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          fontSize: "15px",
          padding: "20px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        <span>
          <i class="fa-solid fa-chevron-right text-black"></i>
        </span>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          fontSize: "15px",
          padding: "20px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        <span className="">
          <i class="fa-solid fa-chevron-left text-black"></i>
        </span>
      </div>
    );
  }
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container mx-auto px-2 my-3 pb-10">
      <h2 className="mx-3 my-5" style={{ fontWeight: 400, fontSize: "46px" }}>
        Made on Fiverr
      </h2>
      <div className="grid grid-cols-4 grid-rows-5 gap-3 my-3">
        <div>1</div>
        <div className="row-span-2">2</div>
        <div className="row-span-3">3</div>
        <div>4</div>
        <div>5</div>
        <div className="col-start-1 row-start-3">6</div>
        <div className="row-span-2 col-start-1 row-start-4">7</div>
        <div className="row-span-3 col-start-2 row-start-3">8</div>
        <div className="row-span-2 col-start-4 row-start-2">9</div>
        <div className="col-start-4 row-start-4">10</div>
        <div className="row-span-2 col-start-3 row-start-4">11</div>
        <div className="col-start-4 row-start-5">12</div>
      </div>
      {/* Guides */}
      <div className="guides py-8">
        <Carousel
          {...settings}
          className=""
          arrows
          slidesToShow={"3"}
          slidesToScroll={"1"}
          dots={false}
          infinite={false}
        >
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
        </Carousel>
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
