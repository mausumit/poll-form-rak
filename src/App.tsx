import { useDispatch } from 'react-redux';
import './App.css';
import { FC } from "react";
import { addQuestions } from './redux/questionsSlice.ts';
import Carousel from './Carousel/Carousel.tsx';
import { IQuestion } from './interface/IQuestion.ts';
import ErrorBoundary from './components/ErrorBoundary';

interface IAppProps {
  questions: Array<IQuestion>;
}
const App: FC<IAppProps> = ({ questions }) => {
  const dispatch = useDispatch();
  dispatch(addQuestions(questions));
  return (
    <ErrorBoundary>
      <Carousel />
    </ErrorBoundary>
  );
};

export default App;
