/**
 * Helper functions for interacting with AI services
 * These are client-side utilities to work with the server actions
 */

import { generateChatResponse } from '@/app/actions/chat-actions';

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  isError?: boolean;
}

/**
 * Process a user message and get an AI response
 */
export async function processUserMessage(
  userMessage: string,
): Promise<Message> {
  try {
    // Call the server action
    const response = await generateChatResponse(userMessage);

    return {
      id: Date.now(),
      text: response.message ?? '',
      sender: 'bot',
      timestamp: new Date().toISOString(),
      isError: !response.success,
    };
  } catch (error) {
    console.error('Error processing message:', error);

    return {
      id: Date.now(),
      text: "Sorry, I'm having trouble responding right now.",
      sender: 'bot',
      timestamp: new Date().toISOString(),
      isError: true,
    };
  }
}

/**
 * Format a user message object
 */
export function createUserMessage(text: string): Message {
  return {
    id: Date.now(),
    text,
    sender: 'user',
    timestamp: new Date().toISOString(),
  };
}
