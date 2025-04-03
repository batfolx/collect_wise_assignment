'use client';

import { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

export default function MessageInput({
  onSendMessage,
  isLoading,
}: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 2,
        borderTop: 1,
        borderColor: 'divider',
        display: 'flex',
        gap: 1,
      }}
    >
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isLoading}
        autoComplete="off"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading || !message.trim()}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Paper>
  );
}
