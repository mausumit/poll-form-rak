import { createSlice } from '@reduxjs/toolkit';
import { IQuestion } from '../interface/IQuestion'

const questionsArr: Array<IQuestion> = [
  {
    title: "",
    options: [
      {
        icon: '',
        hoverLabel: "",
      },
    ],
    answer: "",
  },
];
export const initialState = { questionsArr };
export const questionsSlice = createSlice({
  name: 'questions',
  // initialState: {
  //   questionsArr
  // },
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.questionsArr[action.payload.quesIndex].answer=action.payload.ans;
    },
    addQuestions:(state,action)=>{
      // return {...state, questionsArr: action.payload}
      state.questionsArr=action.payload
    }
  },
});

// this is for dispatch
export const { addAnswer,addQuestions } = questionsSlice.actions;
// this is for configureStore
export default questionsSlice.reducer;