import React from "react";
import { TextField, Grid, MenuItem, FormControlLabel, Switch } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";

const subjectList = ["Math", "Science", "History", "Geography", "English", "Computer Science"];
const moduleList = Array.from({ length: 15 }, (_, i) => `Module ${i + 1}`);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Step1 = ({ control, setValue }: any) => (
    <Grid container spacing={2}>
    {/* Title */}
    <Grid item xs={12}>
      <Controller
        name="title"
        control={control}
        rules={{ maxLength: 255 }}
        render={({ field }) => (
          <TextField {...field} label="Quiz Title" variant="outlined" fullWidth inputProps={{ maxLength: 255 }} />
        )}
      />
    </Grid>
  
    {/* Duration */}
    <Grid item xs={6}>
      <Controller
        name="duration"
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Duration (minutes)" type="number" variant="outlined" fullWidth />
        )}
      />
    </Grid>
  
    {/* No. of Questions */}
    <Grid item xs={6}>
      <Controller
        name="numQuestions"
        control={control}
        render={({ field }) => (
          <TextField select {...field} label="No. of Questions" variant="outlined" fullWidth>
            {[5, 10, 15, 20].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </Grid>
  
    {/* Score per Question */}
    <Grid item xs={6}>
      <Controller
        name="scorePerQuestion"
        control={control}
        render={({ field }) => (
          <TextField select {...field} label="Score per Question" variant="outlined" fullWidth>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </Grid>
  
    {/* Subject Selection */}
    <Grid item xs={6}>
      <Controller
        name="subject"
        control={control}
        render={({ field }) => (
          <TextField select {...field} label="Subject" variant="outlined" fullWidth>
            {subjectList.map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </Grid>
  
    {/* Module Selection */}
    <Grid item xs={6}>
      <Controller
        name="module"
        control={control}
        render={({ field }) => (
          <TextField select {...field} label="Module" variant="outlined" fullWidth>
            {moduleList.map((mod) => (
              <MenuItem key={mod} value={mod}>
                {mod}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </Grid>
  
     {/* Schedule Date-Time Picker */}
     <Grid item xs={6}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name="schedule"
          control={control}
          render={({ field }) => (
            <DateTimePicker
              {...field}
              label="Schedule"
              value={field.value}
              onChange={(date) => setValue("schedule", date)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          )}
        />
      </LocalizationProvider>
    </Grid>
  
    {/* Description */}
    <Grid item xs={12}>
      <Controller
        name="description"
        control={control}
        rules={{ maxLength: 1023 }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            inputProps={{ maxLength: 1023 }}
          />
        )}
      />
    </Grid>
  
    {/* Toggles */}
    <Grid item xs={6}>
      <FormControlLabel
        control={
          <Controller
            name="generateWithAI"
            control={control}
            render={({ field }) => <Switch {...field} checked={field.value} />}
          />
        }
        label="Generate with AI"
      />
    </Grid>
  
    <Grid item xs={6}>
      <FormControlLabel
        control={
          <Controller
            name="publish"
            control={control}
            render={({ field }) => <Switch {...field} checked={field.value} />}
          />
        }
        label="Publish"
      />
    </Grid>
  </Grid>
  );

  export default Step1;