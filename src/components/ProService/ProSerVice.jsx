import React from "react";
import "./style.scss";
import BannerConnect from "../../assets/Img/bannerConnect1.png";
import connectImg from "../../assets/Img/connectImg.png";
import processImg1 from "../../assets/Img/processImg1.png";
import processImg2 from "../../assets/Img/processImg2.png";
import processImg3 from "../../assets/Img/processImg3.png";
import processImg4 from "../../assets/Img/processImg4.png";
import benefitsImg1 from "../../assets/Img/benefitsImg11.png";
import benefitsImg2 from "../../assets/Img/benefitsImg2.png";
import benefitsImg3 from "../../assets/Img/benefitsImg3.png";
import benefitsImg4 from "../../assets/Img/benefitsImg4.png";
import benefitsImg5 from "../../assets/Img/benefitsImg5.png";
import benefitsImg6 from "../../assets/Img/benefitsImg6.png";
import checkImg from "../../assets/Img/checkImg.png";

const ProSerVice = () => {
  return (
    <div>
      {/* Banner */}
      <div
        className="banner_connect  "
        style={{
          backgroundColor: "#003912",
          height: "450px",
        }}
      >
        <div className="container mx-auto px-2 flex items-center justify-around">
          <div className="text-white space-y-5">
            <h1>
              <div className="">
                <p style={{ fontWeight: 600, fontSize: "39px" }}>
                  Connect with clients
                </p>
                <p style={{ fontWeight: 600, fontSize: "39px" }}>
                  in your <em>league</em>
                </p>
              </div>
            </h1>
            <p style={{ fontSize: "20px" }}>
              Fiverr Pro is the place for top-tier, vetted freelancers to <br />{" "}
              advance their careers and access exclusive opportunities.
            </p>
            <button
              className="text-black bg-white py-3 px-3 rounded-xl hover:bg-opacity-90"
              style={{ fontWeight: 600 }}
            >
              Submit your application
            </button>
          </div>
          <div className="">
            <img src={connectImg} alt="" />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="benefits container max-w-[1110px] mx-auto px-2 ">
        <div className="">
          <div className="">
            <h3
              className="text-center"
              style={{ fontSize: "28px", fontWeight: 600 }}
            >
              Bring on the benefits
            </h3>
          </div>
          <div className="text-center flex justify-center space-x-3">
            <div className="w-1/3">
              <div className="flex justify-center">
                <img
                  src={benefitsImg1}
                  className=""
                  style={{ backgroundColor: "" }}
                  alt=""
                />
              </div>
              <div className="">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Pro badge
                </span>
                <p style={{ color: "#62646a" }}>
                  Stand out with a blue Pro badge on your profile and services,
                  signifying your vetted status on Fiverr.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={benefitsImg2} alt="" />
              </div>
              <div className="">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Access to premium clients
                </span>
                <p style={{ color: "#62646a" }}>
                  Take your place in a curated Pro catalog. Connect with clients
                  looking for bigger, ongoing projects.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={benefitsImg3} alt="" />
              </div>
              <div className="">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Get paid by the hour
                </span>
                <p style={{ color: "#62646a" }}>
                  Expand your offerings to support flexible project scopes and
                  build ongoing, long-term relationships.
                </p>
              </div>
            </div>
          </div>
          <div className="flex text-center justify-center space-x-3">
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={benefitsImg4} alt="" />
              </div>
              <div className="">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Onboarding support
                </span>
                <p style={{ color: "#62646a" }}>
                  Kickstart your Pro journey with a dedicated session where
                  we’ll go over expectations, benefits, and tips to work
                  effectively with business clients.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={benefitsImg5} alt="" />
              </div>
              <div className="">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Exclusive community
                </span>
                <p style={{ color: "#62646a" }}>
                  Join our Pro-only hub for strategic partnerships, upskilling
                  opportunities, and perks.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={benefitsImg6} alt="" />
              </div>
              <div className="">
                <span
                  className=""
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Customer protection
                </span>
                <p style={{ color: "#62646a" }}>
                  We have your back. If a Pro client is unsatisfied and cancels
                  an order, you’ll still get paid within 14 days*.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div
        className="flex justify-center items-center"
        style={{ backgroundColor: "rgb(255 245 248)", height: "567px" }}
      >
        <div
          className="max-w-[1200px] px-[63px] py-[50px] bg-white rounded-xl"
          style={{ borderTop: "6px solid #003912" }}
        >
          <div className="">
            <h3
              className="text-center"
              style={{ fontSize: "25px", fontWeight: 600 }}
            >
              The application process
            </h3>
            <p className="text-center" style={{ color: "#74767E" }}>
              To pass the Pro test, freelancers undergo a multi-stage process
              which includes hand-vetting by our Talent Evaluators.
            </p>
          </div>
          <div className="flex justify-around">
            <div className="w-1/4">
              <img src={processImg1} alt="" />
            </div>
            <div className="w-1/4">
              <img src={processImg2} alt="" />
            </div>
            <div className="w-1/4">
              <img src={processImg3} alt="" />
            </div>
            <div className="w-1/4">
              <img src={processImg4} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* how we vet */}
      <div className="container mx-auto px-2 max-w-[1110px]">
        <div className="">
          <h3>Here’s how we vet freelancers</h3>
        </div>
        <div className="">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="">
            <span></span>
            <p></p>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {/* Apply  */}
      <div className="" style={{ backgroundColor: "rgba(0, 57, 18, 1)" }}>
        <div
          className="container mx-auto px-2"
          style={{ height: "340px" }}
        ></div>
      </div>
    </div>
  );
};

export default ProSerVice;
