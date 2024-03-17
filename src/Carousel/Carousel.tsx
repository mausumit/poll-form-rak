import React, { useState } from "react";
import Questions from "../components/Questions/Questions.tsx"
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../redux/questionsSlice.ts";
import ShowAnswers from "../components/Questions/ShowAnswers.tsx";
import { IQuestion } from "../interface/IQuestion.ts";

const Carousel = () => {
  const { questionsArr } = useSelector((state) => {
console.log("state", state);
    return state.questions
  });
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onAnsSelect = (ans:string, quesIndex:number) => {
    setCurrentIndex(quesIndex + 1);
    dispatch(addAnswer({quesIndex,ans}));
  };
  return (
    <>
      <div className="carousel-container" data-testid={"carousel"}>
        <BookmarkIcon className="logo" data-testid={"logo"} />
        {questionsArr.map((item: IQuestion, index: number) => {
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
        {currentIndex === questionsArr.length && <ShowAnswers />}
        <div className="indicators">
          {questionsArr.map((item: IQuestion, index: number) => {
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
