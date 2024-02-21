import React from "react";
import "./quiz.css";
import Lottie from "lottie-react";
const quizani = require("../../assests/quiz1.json");
function QuizSliderElement() {
  return (
    <div className="quiz">
      <div className="quizimg">
        <Lottie animationData={quizani} />
      </div>
      <div className="quizfeature">
        <h2 className="qtitle">
          <span className="qititle">Code in Color:</span> Multi-Language Quizzes
        </h2>
        <h4 className="qsubtitle">
          Embark on a coding adventure! Private room challenges, multilingual
          quizzes, and collaborative solutions await at
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
          Dive into the world of coding with our captivating quizzes! Experience
          the thrill of private room challenges, attend quizzes in multiple
          languages, and connect with fellow developers through chat. Elevate
          your coding journey – where every challenge is a step towards mastery,
          every language is an opportunity, and every solution is a story
          shared. Join the excitement at [Your Portal Name] and code your way to
          brilliance!
        </p>
        <button className="custom-btn btn-12">
            <span>Click!</span>
            <span>Join Now</span>
          </button>
      </div>
    </div>
  );
}

export default QuizSliderElement;
