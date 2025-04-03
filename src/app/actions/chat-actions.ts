'use server';

import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string,
});

/**
 * Generate a chatbot response using OpenAI
 */
export async function generateChatResponse(message: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message },
      ],
      max_tokens: 500,
    });

    return {
      success: true,
      message: completion.choices[0].message.content,
    };
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return {
      success: false,
      message: "Sorry, I'm having trouble responding right now.",
    };
  }
}

/**
 * Save chat message to database
 * This is a placeholder - implement database logic as needed
 */
export async function saveChatMessage(
  userId: string,
  message: string,
  isBot: boolean,
) {
  try {
    // Database logic would go here
    // For example with Prisma:
    // await prisma.message.create({
    //   data: {
    //     content: message,
    //     isBot,
    //     userId
    //   }
    // });

    return { success: true };
  } catch (error) {
    console.error('Error saving message:', error);
    return { success: false };
  }
}

/**
 * Get chat history
 * This is a placeholder - implement database logic as needed
 */
export async function getChatHistory(userId: string, limit: number = 50) {
  try {
    // Database logic would go here
    // For example with Prisma:
    // const messages = await prisma.message.findMany({
    //   where: { userId },
    //   orderBy: { createdAt: 'asc' },
    //   take: limit
    // });

    // For now, return empty array
    return { success: true, messages: [] };
  } catch (error) {
    console.error('Error fetching chat history:', error);
    return { success: false, messages: [] };
  }
}
