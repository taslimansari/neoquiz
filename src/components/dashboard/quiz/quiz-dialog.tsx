/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  Stack,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Copy, X } from "@phosphor-icons/react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { QuizFormData, Question } from "./types";

const steps = ["Quiz Details", "Select Questions", "Review & Submit"];

interface NewQuizDialogProps {
  open: boolean;
  handleClose: () => void;
}

const NewQuizDialog: React.FC<NewQuizDialogProps> = ({ open, handleClose }) => {
  const { control, handleSubmit, reset, setValue, watch } = useForm<QuizFormData>({
    defaultValues: {
      title: "",
      duration: 30,
      numQuestions: 5,
      scorePerQuestion: 1,
      description: "",
      schedule: null,
      subject: "",
      module: "",
      generateWithAI: false,
      publish: false,
      code: "",
      questions: []
    },
  });


  const [activeStep, setActiveStep] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const quizData = watch(); // Watch for form changes

  // Update quiz data when questions are selected
  const handleQuestionSelection = (selectedQuestions: Question[]) => {
    setValue("questions", selectedQuestions); // Update form state
  };

  const handleNext = handleSubmit(() => {
    if (activeStep === 0 && !quizData.title) return alert("Please enter quiz details!");
    setActiveStep((prev) => prev + 1);
  });

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => reset();
  const handleSubmitQuiz = handleSubmit(() => {
    const newCode = generateQuizCode();
    setValue("code", newCode);
    setSnackbarOpen(true);
  });

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return; // Prevent closing when clicking outside
    setSnackbarOpen(false);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(quizData.code);
    setSnackbarOpen(false);
    reset(); // Resets the form to default values
    setActiveStep(0); // Resets the stepper to the first step
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 3, py: 2 }}>
          <Typography variant="h6" fontWeight={600}>
            Create New Quiz
          </Typography>
          <IconButton onClick={handleClose}>
            <X size={20} weight="bold" />
          </IconButton>
        </Stack>

        <DialogContent dividers>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (<Step key={label}><StepLabel>{label}</StepLabel></Step>))}
          </Stepper>
          <Box sx={{ p: 4 }}>
            {activeStep === 0 && <Step1 control={control} setValue={setValue} />}
            {activeStep === 1 && <Step2 quizData={quizData} onSelectionChange={handleQuestionSelection} />}
            {activeStep === 2 && <Step3 quizData={quizData} />}
          </Box>

        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          {activeStep === 0 && <Button onClick={handleReset} color="secondary">Reset</Button>}
          {activeStep > 0 && <Button onClick={handleBack} color="secondary">Back</Button>}
          {activeStep < 2 ? (
            <Button onClick={handleNext} variant="contained" color="primary">Next</Button>
          ) : (
            <Button onClick={handleSubmitQuiz} variant="contained" color="success">Submit</Button>
          )}
        </DialogActions>


      </Dialog>

      {/* Snackbar for showing quiz code */}
      <Snackbar
      open={snackbarOpen}
      // autoHideDuration={6000}
      onClose={() => setSnackbarOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity="success"
        variant="outlined"
        sx={{
          width: "auto",
          backgroundColor: "white",
          border: "1px solid #d8d8d8",
          boxShadow: 3,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          p: 2,
        }}
        action={
          <IconButton onClick={() => setSnackbarOpen(false)} size="small">
            <X size={16} />
          </IconButton>
        }
      >
        <Stack direction="column" spacing={1}>
          <Typography fontWeight={600} color="success.main">
            Quiz Created Successfully!
          </Typography>

          <Box display="flex" alignItems="center" justifyContent="space-around" border="1px solid #d8d8d8" borderRadius={1} p={1}>
            <Typography fontWeight={600} color="primary">
              CODE:
            </Typography>
            <Typography fontWeight={600} sx={{ ml: 1 }}>
              {quizData.code}
            </Typography>
            <IconButton onClick={handleCopyCode} size="small">
              <Copy size={16} />
            </IconButton>
          </Box>

          <Button variant="contained" fullWidth onClick={() => setSnackbarOpen(false)} color="primary" size="small">
            Close
          </Button>
        </Stack>
      </Alert>
    </Snackbar>
    </>
  );
};


const generateQuizCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();

export default NewQuizDialog;
