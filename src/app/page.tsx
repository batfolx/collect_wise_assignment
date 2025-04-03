import ChatInterface from '@/components/ChatInterface';
import { Box, Typography, Container } from '@mui/material';

export const metadata = {
  title: 'Next.js Chatbot with Server Actions',
  description: 'A chatbot built with Next.js, TypeScript, and Server Actions',
};

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js Chatbot
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Built with Next.js, TypeScript, and Server Actions
        </Typography>
      </Box>

      <ChatInterface />
    </Container>
  );
}
