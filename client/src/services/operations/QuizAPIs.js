import { apiConnector } from "../apiConnector";
import { quizEndpoints } from "../APIs";
import toast from "react-hot-toast";

const { CREATE_QUIZ, UPDATE_QUIZ, DELETE_QUIZ } = quizEndpoints;

export const createQuiz = async (data, token) => {
  try {
    const response = await apiConnector("POST", CREATE_QUIZ, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error(response.data.error);
    }

    console.log("CREATE_QUIZ_RESPONSE : ", response);

    return response?.data?.data;

  } catch (e) {
    console.log("ERROR WHILE CREATING QUIZ : ", e);
  }
  return null;
};
