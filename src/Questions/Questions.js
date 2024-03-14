import { Grid } from "@mui/material";
import { useState } from "react";
const Questions = ({ data,style, quesIndex,onAnsSelect }) => {
  const handleClick = (label,quesIndex,index) => {
    setClickedAns(label);
    setTimeout(()=>{
        setClickedAns(null);
        onAnsSelect(label,quesIndex,index)
    },1000)
  };
  const [clickedAns,setClickedAns]=useState()
  return (
    <Grid container className="carousel-item"  style={style}>
      <Grid item xs={6} className="ques-container">
        <h1 data-testid={"carousel-question"}>{data.title}</h1>
      </Grid>
      <Grid item xs={6} className="options-container">
        <div className="options">
          {data.options.map((item, index) => {
            return (
              <button
                onClick={(e) => {
                  handleClick(item.hoverLabel, quesIndex, index);
                }}
                key={`${item.icon}-${index}`}
                title={item.hoverLabel}
                className={`${clickedAns===item.hoverLabel?'highlight':''}`}
                data-testid={`carousel-options`}
              >
                <span className={`icon`}>{item.icon}</span>
                <span className="label">{item.hoverLabel}</span>
              </button>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};
export default Questions;
