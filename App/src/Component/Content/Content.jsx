import React from "react";
import "./Content.css";
import Empower from "../../Images/Empower.png";
import star from "../../Images/Star.png";
import Mentorship from "../../Images/Mentorship.png";
import Collaboration from "../../Images/Collaboration.png";
import Network from "../../Images/Networking.png";
import Union from "../../Images/Union.png";
import phone from "../../Images/Phone.png";
import location from "../../Images/Location.png";
import email from "../../Images/Email.png";
import Connected from "../../Images/connected.png";
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
      <div className="bright-future">
        <div className="left-side-content">
          <div>
            <b className="heading">Empowering Youth for a Brighter Future</b>
            <p className="thought">
              United Youth Network (UNYN) is a dynamic and impactful
              international student society committed to nurturing the talents
              and potential of young individuals across colleges and
              universities of different countries. Join us today to be a part of
              our mission to create a brighter and more promising future.
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
      <div className="empower-bright">
        <div>
          <span className="hightlight-black">
            Empowering Youth for a Brighter Future:{" "}
            <span className="highlight-blue">
              UNYN’s Impact on Youth Individuals
            </span>
          </span>
        </div>
        <div>
          <p>
            United Youth Network (UNYN) is dedicated to empowering young
            individuals by providing them with opportunities for growth and
            development. Through our international student society, we aim to
            nurture their talents and unlock their full potential. By investing
            in the youth today, we believe that we can create a brighter and
            more promising future for tomorrow.
          </p>
        </div>
      </div>
      <div className="star-image">
        <img src={star} alt="Star" />
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "600",
          paddingTop: "2rem",
        }}
      >
        Empower
      </p>
      <div className="center">
        <h3 className="unlock">Unlock Your Potential with UNYN</h3>
        <p>
          At UNYN, we offer a range of impactful programs and events designed to
          empower young individuals. From mentorship programs to networking
          events and international collaborations, we provide the resources and
          support needed to help you thrive.
        </p>
      </div>
      <div className="mentorship">
       <div className="metorship-box">
        <img src={Mentorship} alt="mentorship" />
        <h6>Mentorship Programs</h6>
        <p>Connect with experienced mentors who will guide you towards success.</p>
       </div>
       <div className="metorship-box">
        <img src={Network} alt="network" />
        <h6>Networking Events</h6>
        <p>Expand your network and forge valuable connections with like- minded individual.</p>
       </div>
       <div className="metorship-box">
        <img src={Collaboration} alt="collaboration" />
        <h6>International Collaborations</h6>
        <p>Gain global exposure and collaborate with students from different ocuntries.</p>
       </div>
      </div>
      <div className="join" style={{textAlign:"center"}}>
              <button style={{marginRight:"20px"}}>Join</button>
              <p className="learn">Learn More > </p>
      </div>
      <div className="bright-future">
        <div className="left-side-content">
          <div>
            <b className="heading">Unlock Your Potential and Make a Lasting Impact with UNYN</b>
            <p className="thought">
            Joining UNYN offers a unique opportunity for personal growth, professional development, and making a positive difference 
            in the world. Our dynamic and impactful international student society is dedicated to nurturing the talents and potential of young individuals across colleges and universities worldwide. Through our diverse range of programs,
             events, and initiatives, we empower the youth today to create a brighter and more promising future for tomorrow.
            </p>
            <div className="join">
              <button>Join</button>
              <p className="learn">Learn More > </p>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="union-img">
            <img src={Union} alt="union" />
          </div>
        </div>
      </div>
      <div className="blue-box">
      <h2>Empowering Your Potential with UNYN </h2>
      <p>Join UNYN and unlock endless opportunities for growth </p>
      <div className="join" style={{textAlign:"center"}}>
              <button style={{marginRight:"20px",background:"none",border:"1px solid #fff"}}>Join</button>
             <button style={{background:"none",border:"1px solid #fff"}}>Get Envolved</button>
      </div>
      </div>
      <div className="stay-connected">
        <div className="left-side-connected">
          <h4>Stay Updated with UNYN Newsletter</h4>
          <p>Gets the latest updates, news and exciting opportunities for UNYN. </p>
          <div>
            <input placeholder="Enter your email" type="email" />
            <button>Sign Up</button>
          </div>
          <p>By signing up, you agree to our Term and Conditions.</p>
        </div>
        <div className="right-side-connected">
          <img src={Connected} alt="connected" />
        </div>
      </div>
      <div className="get-in-touch">
        <div className="left-side-touch">
          <h4>Get in touch</h4>
          <span><span style={{color:"#0B4765"}}>Contact with our team</span>  to talk about 
          how we can help your business process at scale, or sign up for more info </span>
          <div className="touch-link">
            <img  src={location} alt="location" />
            <p>1-4929, Lane No. 6, Balbirnagar Ext., Shahdara, Delhi 110032</p>
          </div>
          <div className="touch-link">
            <img  src={phone} alt="phone" />
            <p>+91-8888888888</p>
          </div>
          <div className="touch-link">
            <img  src={email} alt="email" />
            <p>info@unyn.com</p>
          </div>
        </div>
        <div className="right-side-touch">
          <h4>Say something</h4>
          <div>
            <input placeholder="Your name" type="text" /> <br />

            <input placeholder="Your email" type="email" />
            <br />
            <textarea placeholder="Message"></textarea> <br />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
