import React from "react";
import Lottie from "lottie-react";
const quizani = require("../../assests/blog1.json");
import './blogs.css'

function Blogs(){

    return (
        <div className="blogcontainer">
        <div className="leftblog">
        <div className="quizfeature">
        <h2 className="qtitle">
          <span className="qititle">Blog Bay:</span> Where Tech Tales Unfold and Ideas Ignite
        </h2>
        <h4 className="qsubtitle">
        Discover the tech universe with our insightful blogs at [Your Portal Name]. From coding tips to industry trends, stay informed and inspired in just a click!
          <span className="name">
            <p> Codematchhub</p>
            <span>
              <svg width="400" height="35" xmlns="http://www.w3.org/2000/svg">
                <path
                  id="pathItem"
                  d="M5 2 Q 35 -5 170 5"
                  stroke="black"
                  fill="transparent"
                  stroke-width="7"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </span>
         
        </h4>
        <p className="desc">
        Embark on a journey through the techscape with our captivating blogs at [Your Portal Name]. Uncover coding secrets, explore industry trends, and ignite your passion for innovation. Welcome to Blog Bay – where bytes meet brilliance!
        </p>
        <button className="custom-btn btn-12">
            <span>Blogs!</span>
            <span>Join Now</span>
          </button>
      </div>
        </div>
        <div className="rightblog">
        <Lottie animationData={quizani} />

        </div>
        </div>
    )
}

export default Blogs;