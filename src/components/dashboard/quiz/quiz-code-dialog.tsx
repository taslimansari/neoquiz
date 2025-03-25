import React from "react";
import { Dialog, DialogContent, DialogActions, Box, Typography, Button, IconButton, Stack } from "@mui/material";
import { X, Copy } from "@phosphor-icons/react";

interface QuizCodeDialogProps {
  open: boolean;
  onClose: () => void;
  quizCode: string;
}

const QuizCodeDialog: React.FC<QuizCodeDialogProps> = ({ open, onClose, quizCode }) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(quizCode);
    onClose(); // Auto-close after copying
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs">
      {/* Header */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 3, py: 2 }}>
        <Typography variant="h6" fontWeight={600}>
          Quiz Creation Success !!
        </Typography>
        <IconButton onClick={onClose}>
          <X size={20} weight="bold" />
        </IconButton>
      </Stack>

      {/* Content */}
      <DialogContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <Box 
          p={2} 
          display="flex" 
          alignItems="center" 
          borderRadius={1} 
          border="1px solid #d8d8d8"
        >
          <Typography variant="h5" fontWeight="600" color="primary">
            CODE:
          </Typography>
          <Typography variant="h5" fontWeight="600" sx={{ ml: 1 }}>
            {quizCode}
          </Typography>
          <IconButton onClick={handleCopyCode}>
            <Copy size={20} weight="bold" />
          </IconButton>
        </Box>
      </DialogContent>

      {/* Footer */}
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button variant="contained" fullWidth onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuizCodeDialog;
