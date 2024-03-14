import { useDispatch } from 'react-redux';
import './App.css';
// import Carousel from './Carousel/Carousel';
import { addQuestions } from './redux/questionsSlice';
import Carousel from './Carousel/Carousel';

function App({questions}) {
  const dispatch = useDispatch();
  dispatch(addQuestions(questions))
  return (
   <Carousel questions={questions}/>
  );
}

export default App;
