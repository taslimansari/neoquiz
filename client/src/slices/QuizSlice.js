import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,
  reducers: {
    setQuiz(state, value) {
      state.quiz = value.payload;
    },
  },
});

export const { setQuiz } = quizSlice.actions;

export default quizSlice.reducer;
