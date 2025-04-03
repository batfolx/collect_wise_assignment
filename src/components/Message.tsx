'use client';

import { Box, Typography, Paper } from '@mui/material';
import { Message as MessageType } from '@/types';

interface MessageProps {
  message: MessageType;
}

export default function Message({ message }: MessageProps) {
  const { text, sender, isError } = message;
  const isUser = sender === 'user';

  return (
    <Box
      sx={{
        display: 'flex',
        mb: 1.5,
        justifyContent: isUser ? 'flex-end' : 'flex-start',
      }}
    >
      <Paper
        elevation={1}
        sx={{
          py: 1,
          px: 2,
          maxWidth: '80%',
          bgcolor: isUser
            ? 'primary.main'
            : isError
              ? 'error.light'
              : 'grey.100',
          color: isUser
            ? 'primary.contrastText'
            : isError
              ? 'error.contrastText'
              : 'text.primary',
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Paper>
    </Box>
  );
}
