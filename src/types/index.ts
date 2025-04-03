export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  isError?: boolean;
}

export interface ChatHistory {
  messages: Message[];
  conversationId?: string;
}

export interface ChatResponse {
  success: boolean;
  message: string;
}

export interface User {
  id: string;
  name?: string;
}
