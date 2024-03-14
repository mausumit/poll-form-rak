import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    questionsArr:[]
  },
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