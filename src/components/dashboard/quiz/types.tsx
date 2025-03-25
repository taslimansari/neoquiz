import { Dayjs } from "dayjs";

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  selected?: boolean;
}

export interface QuizFormData {
  title: string;
  duration: number;
  numQuestions: number;
  scorePerQuestion: number;
  description: string;
  schedule: Dayjs | null;
  subject: string;
  module: string;
  generateWithAI: boolean;
  publish: boolean;
  code: string;
  questions: Question[];
}
