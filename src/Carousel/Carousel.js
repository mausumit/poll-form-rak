import React, { useEffect, useState } from "react";
import Questions from "../Questions/Questions";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../redux/questionsSlice";
import ShowAnswers from "../Questions/ShowAnswers";

const Carousel = () => {
  const {questionsArr} = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
    }, 3000);
    return () => clearInterval(interval);
  });
  const onAnsSelect = (ans, quesIndex, index) => {
    setCurrentIndex(quesIndex + 1);
    dispatch(addAnswer({quesIndex,ans}));
  };
  return (
    <>
      <div className="carousel-container">
        <BookmarkIcon className="logo" />
        {questionsArr.map((item, index) => {
          return (
            <Questions
              data={item}
              onAnsSelect={onAnsSelect}
              key={index}
              quesIndex={index}
              style={{ transform: `translateY( -${currentIndex * 100}%` }}
            />
          );
        })}
        {currentIndex===questionsArr.length&&<ShowAnswers />}
        <div className="indicators">
          {questionsArr.map((item, index) => {
            return (
              <div
                data-key={index}
                key={index}
                className={`indicator ${
                  currentIndex === index ? "active" : ""
                } ${item.answer ? "fill" : ""}`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Carousel;
