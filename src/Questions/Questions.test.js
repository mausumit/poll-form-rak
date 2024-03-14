import { render, screen } from "@testing-library/react";
import Questions from "./Questions";
const question = {
  title: "How was your week overall?",
  options: [
    {
      icon: String.fromCodePoint(0x1f44d),
      hoverLabel: "Like",
    },
    {
      icon: String.fromCodePoint(0x1f914),
      hoverLabel: "Thinking",
    },
    {
      icon: String.fromCodePoint(0x1f44e),
      hoverLabel: "Dislike",
    },
  ],
  answer: "",
};
describe(Questions, () => {
  it("renders question", () => {
    render(<Questions data={question} quesIndex={0} />);
    const carousal = screen.getAllByTestId("carousel-question");
    expect(carousal).toBeDefined();
  });
  it("renders options", () => {
    render(<Questions data={question} quesIndex={0} />);
    const carousal = screen.getAllByTestId("carousel-options");
    expect(carousal).toBeDefined();
  });
});
