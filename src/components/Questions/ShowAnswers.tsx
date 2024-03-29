import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { IQuestion } from "../../interface/IQuestion";

const ShowAnswers = () => {
  const { questionsArr } = useSelector((state) => state.questions);
  const submitAnswers = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(questionsArr),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <Grid
      container
      className="carousel-item"
      style={{ transform: `translateY( -${questionsArr.length * 100}%` }}
    >
      {questionsArr.map((item: IQuestion, index: number) => {
        return (
          <Grid item xs={12} className="ques-container" key={`${Math.ceil(Math.random()*100)}-${index}`}>
            <h1 data-testid={"question"}>{item.title}</h1>
            <h1 data-testid={"answer"}>{item.answer}</h1>
          </Grid>
        );
      })}
      <Grid item xs={12} className="ques-container submit">
        <Button
          data-testid={"submit-btn"}
          variant="outlined"
          onClick={submitAnswers}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
export default ShowAnswers;
