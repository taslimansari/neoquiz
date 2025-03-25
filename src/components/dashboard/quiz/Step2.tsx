import React, { useEffect, useState } from "react";
import { Grid, Checkbox, TextField, MenuItem, Select, Paper } from "@mui/material";
import { Question, QuizFormData } from "./types";

interface Step2Props {
  quizData: QuizFormData;
  onSelectionChange: (selectedQuestions: Question[]) => void;
}

const Step2: React.FC<Step2Props> = ({ quizData, onSelectionChange }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    if (questions.length === 0) {
      const sampleQuestions: Question[] = Array.from(
        { length: quizData.numQuestions || 5 },
        (_, index) => ({
          id: index + 1,
          text: `In a hypothetical scenario where a person is stranded on a deserted island with limited resources, which of the following survival strategies would be the most effective in ensuring long-term survival while maintaining physical and mental well-being? ${index + 1}`,
          options: ["Option 1", "Option 2", "Option 3", "Option 4"],
          correctAnswer: "Option 1",
          selected: false,
        })
      );
      setQuestions(sampleQuestions);
    }
  }, [quizData.numQuestions, questions.length]);

  const handleSelect = (id: number) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, selected: !q.selected } : q
    );

    setQuestions(updatedQuestions);
    onSelectionChange(updatedQuestions.filter((q) => q.selected));
  };

  const handleFieldChange = (id: number, field: keyof Question, value: any) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, [field]: value } : q
    );

    setQuestions(updatedQuestions);
  };

  return (
    <Grid container spacing={2}>
      {questions.map((q) => (
        <Grid item xs={12} key={q.id}>
          <Paper
            elevation={1}
            sx={{
              padding: 2,
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
            }}
          >
            <Grid container spacing={2} alignItems="center">
              {/* Checkbox */}
              <Grid item xs={1}>
                <Checkbox checked={q.selected} onChange={() => handleSelect(q.id)} />
              </Grid>

              {/* Question Input Field */}
              <Grid item xs={11}>
                <TextField
                  value={q.text}
                  fullWidth
                  label="Question"
                  variant="outlined"
                  onChange={(e) => handleFieldChange(q.id, "text", e.target.value)}
                  onFocus={() => setFocusedField(`question-${q.id}`)}
                  onBlur={() => setFocusedField(null)}
                  sx={{
                    transition: "box-shadow 0.3s",
                    boxShadow: focusedField === `question-${q.id}` ? "0 0 8px rgba(0, 123, 255, 0.5)" : "none",
                  }}
                />
              </Grid>

              {/* Options - Display in two columns */}
              {q.options.map((opt, index) => (
                <Grid item xs={6} key={index}>
                  <TextField
                    value={opt}
                    fullWidth
                    label={`Option ${index + 1}`}
                    variant="outlined"
                    onChange={(e) => {
                      const newOptions = [...q.options];
                      newOptions[index] = e.target.value;
                      handleFieldChange(q.id, "options", newOptions);
                    }}
                    onFocus={() => setFocusedField(`option-${q.id}-${index}`)}
                    onBlur={() => setFocusedField(null)}
                    sx={{
                      transition: "box-shadow 0.3s",
                      boxShadow: focusedField === `option-${q.id}-${index}` ? "0 0 8px rgba(0, 123, 255, 0.5)" : "none",
                    }}
                  />
                </Grid>
              ))}

              {/* Correct Answer - Dropdown */}
              <Grid item xs={12}>
                <Select
                  value={q.correctAnswer}
                  fullWidth
                  variant="outlined"
                  onChange={(e) => handleFieldChange(q.id, "correctAnswer", e.target.value)}
                  onFocus={() => setFocusedField(`correctAnswer-${q.id}`)}
                  onBlur={() => setFocusedField(null)}
                  sx={{
                    transition: "box-shadow 0.3s",
                    boxShadow: focusedField === `correctAnswer-${q.id}` ? "0 0 8px rgba(0, 123, 255, 0.5)" : "none",
                  }}
                >
                  {q.options.map((opt, index) => (
                    <MenuItem key={index} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Step2;
