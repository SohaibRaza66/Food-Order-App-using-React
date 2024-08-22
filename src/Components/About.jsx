import React from "react";
import FriedEgg from "../assets/Friedegg.jpg";
import Bg from "../assets/BG.jpg";
import Tamator from "../assets/AHATAMATAR.jpg";
import Pic1 from "../assets/pic1.jpg";
import Pic2 from "../assets/pic2.jpg";
import Pic3 from "../assets/pic3.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const About = () => {
  const [counterOn, setCounterOn] = React.useState(false);
  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="row tw-p-10 md:tw-p-40">
          <div className="col-md-6">
            <img src={FriedEgg} className="img-fluid rounded-3" alt="" />
          </div>
          <div className="col-md-6">
            <h1 className="h1 tw-text-6xl text-center p-5">
              We Provide healthy Food for your Family
            </h1>
            <p className="tw-font-semibold tw-ps-20 tw-pr-20">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p className="tw-ps-20 tw-pr-20 mt-5">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 position-relative">
        <img
          src={Bg}
          className="img-fluid d-grid w-100 position-relative"
          alt=""
        />
        <div className="col-md-6 position-absolute tw-top-1/4 tw-left-2/4 tw-text-white -tw-translate-x-2/4 -tw-tranlate-y-2/4">
          <i class="bi bi-play-circle-fill xl:tw-text-9xl d-grid tw-place-content-center"></i>
          <h1 className="h1 tw-text-2xl text-center xl:tw-text-7xl">
            Feel the authentic & original taste from us
          </h1>
        </div>
      </div>
      <div className="col-md-12 tw-p-20 md:tw-p-40">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-4 w-auto">
                <img src={Pic1} alt="" className="tw-w-6 img-fluid" />
              </div>

              <div className="col-md-8 w-75">
                <h4 className="h5">Multi cuisine</h4>
                <p>
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-4 w-auto">
                <img src={Pic2} alt="" className="tw-w-6 img-fluid" />
              </div>
              <div className="col-md-8 w-75">
                <h4 className="h5">Easy to Oder</h4>
                <p>
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-4 w-auto">
                <img src={Pic3} alt="" className="tw-w-6 img-fluid" />
              </div>
              <div className="col-md-8 w-75">
                <h4 className="h5">Fast Deleivery</h4>
                <p>
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="col-md-12 tw-bg-bg-900 tw-p-20 md:tw-p-40">
        <div className="row">
          <div className="col-md-6">
            <h1 className="h1 xl:tw-text-7xl">
              A little information for our valuable guest
            </h1>
            <p>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <div className="col-md-12 d-flex flex-wrap" id="about">
            <div className="col-md-6 m-auto p-5">
              <div className="txt tw-bg-white tw-p-10 tw-ps-20 tw-pr-20">
                <div className="h2 text-center">{counterOn && <CountUp start={0} end={3} duration={2} delay={1}/>}</div>
                <p className="text-center">Locations</p>
              </div>
            </div>
            <div className="col-md-6 m-auto p-5">
            <div className="txt tw-bg-white tw-p-10 tw-ps-20 tw-pr-20">
                <div className="h2 text-center">{counterOn && <CountUp start={1990} end={1995} duration={2} delay={1}/>}</div>
                <p className="text-center">Founded</p>
              </div>
            </div>
            <div className="col-md-6 m-auto p-5">
            <div className="txt tw-bg-white tw-p-10 tw-ps-20 tw-pr-20">
                <div className="h2 text-center">{counterOn && <CountUp start={0} end={65} duration={2} delay={1}/>} + </div>
                <p className="text-center">Staff Members</p>
              </div>
            </div>
            <div className="col-md-6 m-auto p-5">
            <div className="txt tw-bg-white tw-p-10 tw-ps-20 tw-pr-20">
                <div className="h2 text-center">{counterOn && <CountUp start={0} end={100} duration={2} delay={1}/>}%</div>
                <p className="text-center">Satisfied Customers</p>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-6 mt-2">
            <img src={Tamator} className="img-fluid rounded-3" alt="" />
          </div>
        </div>
      </div>
      </ScrollTrigger>
    </div>
  );
};

export default About;
