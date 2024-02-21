import React, { useEffect, useState } from "react";
import "./index.css";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import QuizSliderElement from "./slider/quiz.tsx";
import Blogs from "./slider/blogs.tsx";

function Types() {
  const [types, setTypes] = useState(["Student", "Developers"]);
  const [type, setType] = useState(0);

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Students",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Developers",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "3em", display: "inline-block", color: "#EFA928" }}
      repeat={Infinity}
    />
  );
}

function Home() {
  return (
    <div className="contai">
      <div className="intro">
        <div className="leftintro">
          <div>
            <h1>Portal for</h1>
            <Types />
          </div>
          <div className="description">
            <p>
              Unlock your coding potential at [Your Portal Name], where
              developers and students converge for a one-stop destination of
              coding quizzes, project clones, collaborative project matchmaking,
              and insightful tech blogs. Elevate your skills, build with
              purpose, and join a dynamic community passionate about code
              mastery and innovation. Welcome to your go-to hub for coding
              excellence and collaborative learning!
            </p>
          </div>
        </div>
        <div className="rightintro">
          <img
            style={{ width: "60%", height: "100%" }}
            src={require("../assests/pexels-cottonbro-studio-4709289.png")}
          ></img>
        </div>
      </div>
      <div className="titlecontainer">
        <h2 className="title">
          Explore, Learn, Build: Unleashing{" "}
          <span className="subtitle">
            Codematchhub Dynamic Quartet of Coding Excellence!
          </span>
        </h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          allowTouchMove
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, hide: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ marginTop: 40 }}
        >
          <SwiperSlide>
            <QuizSliderElement />
          </SwiperSlide>
        </Swiper>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          allowTouchMove
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, hide: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ marginTop: 40 }}
        >
          <SwiperSlide>
            <Blogs />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
