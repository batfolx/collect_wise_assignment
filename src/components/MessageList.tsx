'use client';

import { Box, CircularProgress, Typography } from '@mui/material';
import Message from './Message';
import { Message as MessageType } from '@/types';

interface MessageListProps {
  messages: MessageType[];
  isLoading: boolean;
}

export default function MessageList({ messages, isLoading }: MessageListProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {messages.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.secondary',
          }}
        >
          <Typography variant="body2">Start a conversation...</Typography>
        </Box>
      ) : (
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))
      )}

      {isLoading && (
        <Box sx={{ display: 'flex', mt: 1 }}>
          <Box
            sx={{
              bgcolor: 'grey.200',
              color: 'text.secondary',
              borderRadius: 2,
              py: 1,
              px: 2,
              maxWidth: '80%',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <CircularProgress size={16} color="inherit" />
            <Typography variant="body2">Thinking...</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}
