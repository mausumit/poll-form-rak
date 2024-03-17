import { screen } from "@testing-library/react";
import { PollQues } from '../PollQues';
import Carousel from "./Carousel";
import Questions from '../components/Questions/Questions';
import { renderWithProviders } from '../utils/utils-for-tests';
import questionsSlice,{ initialState } from '../redux/questionsSlice';

describe('Carousel', () => {
    it("initialize slice with initialValue", () => {
        const quesSliceInit = questionsSlice(initialState, { type: "unknown" });
        expect(quesSliceInit).toBe(initialState);
    });
    it("renders carousel", () => {
        renderWithProviders(<Carousel questions={PollQues} />);
        const carousal = screen.getAllByTestId("carousel");
        expect(carousal).toBeDefined();
    });
    it("renders logo", () => {
        renderWithProviders(<Carousel questions={PollQues} />);
        const carousal = screen.getByTestId('logo')
        expect(carousal).toBeInTheDocument();
    });
    it("renders options", () => {
        renderWithProviders(<Carousel data={PollQues[0]} quesIndex={0} />);
        const carousal = screen.getAllByTestId("carousel-options");
        expect(carousal).toBeTruthy()
    });
});
