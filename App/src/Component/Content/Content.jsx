import React from "react";
import "./Content.css";
import Empower from "../../Images/Empower.png";
import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Content = () => {
  return (
    <div className="content-top">
      <div className="left-side-content">
        <div>
          <b className="heading">Empowering Youth for a Brighter Future</b>
          <p className="thought">
            United Youth Network (UNYN) is a dynamic and impactful international
            student society committed to nurturing the talents and potential of
            young individuals across colleges and universities of different
            countries. Join us today to be a part of our mission to create a
            brighter and more promising future.
          </p>
          <div className="join">
            <button>Join</button>
            <p className="learn">Learn More > </p>
          </div>
        </div>
      </div>
      <div className="right-box">
        <div className="empower-img">
          <img src={Empower} alt="empower" />
        </div>
        <div className="slider-box">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <h4>Empower the Youth Today</h4>
              <p className="idea">
                Unlock Your Potential and Make a Diffrence{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4>Empower the Youth Today</h4>
              <p className="idea">
                Unlock Your Potential and Make a Diffrence{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4>Empower the Youth Today</h4>
              <p className="idea">
                Unlock Your Potential and Make a Diffrence{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4>Empower the Youth Today</h4>
              <p className="idea">
                Unlock Your Potential and Make a Diffrence{" "}
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Content;
