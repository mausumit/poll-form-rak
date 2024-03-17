import { Button, Grid } from "@mui/material";
import { FC, useState } from "react";
import { IQuestion } from '../../interface/IQuestion';

interface IQuestionsProps {
  data: IQuestion;
  style: any;
  quesIndex: number;
  onAnsSelect: (label: string, quesIndex:number) => void;
}
const Questions: FC<IQuestionsProps> = ({ data, style, quesIndex, onAnsSelect }) => {
  const [clickedAns, setClickedAns] = useState<string|null>('');
  const handleClick = (label:string,quesIndex:number) => {
    setClickedAns(label);
    setTimeout(()=>{
        setClickedAns(null);
        onAnsSelect(label,quesIndex)
    },1000)
  };
  return (
    <Grid container className="carousel-item"  style={style}>
      <Grid item xs={6} className="ques-container">
        <h1 data-testid={"carousel-question"}>{data.title}</h1>
      </Grid>
      <Grid item xs={6} className="options-container">
        <div className="options">
          {data.options.map((item, index) => {
            return (
              <Button
                variant="text"
                onClick={(e) => {
                  handleClick(item.hoverLabel, quesIndex);
                }}
                key={`${item.icon}-${index}`}
                title={item.hoverLabel}
                className={`${
                  clickedAns === item.hoverLabel ? "highlight" : ""
                }`}
                data-testid={`carousel-options`}
              >
                <span className={`icon`}>{item.icon}</span>
                <span className="label">{item.hoverLabel}</span>
              </Button>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};
export default Questions;
