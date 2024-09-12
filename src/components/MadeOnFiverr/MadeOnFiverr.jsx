import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import GuideBanner from "../../assets/Img/Guides-Banner.png";
import pathDefault from "../../common/path.js";

const MadeOnFiverr = () => {
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
        <div className="grid grid-cols-6 grid-rows-1 gap-3">
          <div className="col-span-5 items-end justify-end">
            <h2 className="" style={{ fontWeight: 400, fontSize: "46px" }}>
              Guides to help you grow
            </h2>
          </div>
          <div className="col-start-6">
            <div className="my-3">
              <Link className="my-3">See more</Link>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-3 grid-rows-1 gap-3">
          <div className="slide">
            <Link>
              <img src="" alt="" />
              <p>Start a side business</p>
            </Link>
          </div>
          <div className="slide">
            <Link>
              <img src="" alt="" />
              <p>Ecommerce business Ideas </p>
            </Link>
          </div>
          <div className="slide">
            <Link>
              <img src="" alt="" />
              <p>Start an online business and work from home</p>
            </Link>
          </div>
        </div>
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
              // to={pathDefault.login}
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
