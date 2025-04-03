import ChatInterface from '@/components/ChatInterface';
import { Box, Container } from '@mui/material';

export const metadata = {
  title: 'Next.js Chatbot with Server Actions',
  description: 'A chatbot built with Next.js, TypeScript, and Server Actions',
};

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}></Box>

      <ChatInterface />
    </Container>
  );
}
