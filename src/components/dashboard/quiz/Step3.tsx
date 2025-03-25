import React from "react";
import { QuizFormData } from "./types";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import QuizCodeDialog from "./quiz-code-dialog";

interface Step3Props {
  quizData: QuizFormData;
}

const Step3: React.FC<Step3Props> = ({ quizData }) => {


  return (
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Kindly review the details
        </Typography>

        {/* Two Column Layout for Quiz Details */}

        <Paper elevation={3} style={{ padding: "20px", marginBottom: "10px" }}>
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={6}>
              <Typography><strong>Title:</strong> {quizData.title}</Typography>
              <Typography><strong>Subject:</strong> {quizData.subject}</Typography>
              <Typography><strong>Module:</strong> {quizData.module}</Typography>
              <Typography><strong>Schedule:</strong> {quizData.schedule?.format("DD-MM-YYYY HH:mm") || "Not Scheduled"}</Typography>
            </Grid>

            {/* Right Column */}
            <Grid item xs={6}>
              <Typography><strong>Duration:</strong> {quizData.duration} mins</Typography>
              <Typography><strong>Score per Question:</strong> {quizData.scorePerQuestion}</Typography>
              <Typography><strong>AI Generated:</strong> {quizData.generateWithAI ? "Yes" : "No"}</Typography>
              <Typography><strong>Published:</strong> {quizData.publish ? "Yes" : "No"}</Typography>
            </Grid>
          </Grid>

        </Paper>

        {/* Questions Table */}
        <Typography variant="h5" gutterBottom>Questions</Typography>
        <TableContainer component={Paper} style={{ maxHeight: "400px", overflowY: "auto", overflowX: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No.</TableCell>
                <TableCell>Question</TableCell>
                <TableCell>Option 1</TableCell>
                <TableCell>Option 2</TableCell>
                <TableCell>Option 3</TableCell>
                <TableCell>Option 4</TableCell>
                <TableCell>Correct Answer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quizData.questions.map((q, index) => (
                <TableRow key={q.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{q.text}</TableCell>
                  {q.options.map((opt, optIndex) => (
                    <TableCell key={optIndex}>{opt}</TableCell>
                  ))}
                  <TableCell>{q.correctAnswer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
  );
};

export default Step3;
