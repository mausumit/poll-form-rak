import { render, screen } from "@testing-library/react";
import { PollQues } from '../../PollQues';
import ShowAnswers from './ShowAnswers';
import { renderWithProviders } from '../../utils/utils-for-tests';

describe('ShowAnswers', () => {
    it("renders question", () => {
        renderWithProviders(<ShowAnswers data={PollQues[0]} quesIndex={0} />);
        const carousal = screen.getAllByTestId("question");
        expect(carousal).toBeDefined();
    });
    it("renders answers", () => {
        renderWithProviders(<ShowAnswers data={PollQues[0]} quesIndex={0} />);
        const carousal = screen.getAllByTestId("answer");
        expect(carousal).toBeDefined();
    });
});
