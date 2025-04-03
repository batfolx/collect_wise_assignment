'use client';
import { useState, useRef, useEffect } from 'react';
import { Paper, Box, Typography } from '@mui/material';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import { Message } from '@/types';
import { processUserMessage, createUserMessage } from '@/lib/ai-service';

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const generateDebtAmount = () => {
    const min = 1000;
    const max = 10000;
    const randomAmount = Math.random() * (max - min) + min;
    return randomAmount.toFixed(2);
  };

  useEffect(() => {
    const debtAmount = generateDebtAmount();
    const initialMessage: Message = {
      id: Date.now(),
      text: `Hello! Our records show that you currently owe $${debtAmount}. Are you able to resolve this debt today?`,
      sender: 'bot',
      timestamp: new Date().toISOString(),
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage = createUserMessage(text);
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const botResponse = await processUserMessage(text, messages);
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Error in chat:', error);
      // Add error message
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble responding right now.",
        sender: 'bot',
        isError: true,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          p: 2,
          borderBottom: 0,
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="h6">Payment Assistance</Typography>
      </Box>

      <MessageList messages={messages} isLoading={isLoading} />
      <div ref={messagesEndRef} />

      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </Paper>
  );
}
