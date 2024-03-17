import { render, screen } from "@testing-library/react";
import Questions from "./Questions";
import { PollQues } from '../../PollQues';

describe('Questions', () => {
  it("renders question", () => {
    render(<Questions data={PollQues[0]} quesIndex={0} />);
    const carousal = screen.getAllByTestId("carousel-question");
    expect(carousal).toBeDefined();
  });
  it("renders options", () => {
    render(<Questions data={PollQues[0]} quesIndex={0} />);
    const carousal = screen.getAllByTestId("carousel-options");
    expect(carousal).toBeDefined();
  });
});
