// app/api/chat/route.js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, convertToModelMessages } from 'ai';
import { promises as fs } from 'fs';
import path from 'path';

// Configure Groq with OpenAI-compatible API
const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: process.env.GROQ_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req) {
    try {
        const { messages } = await req.json();

        // Read Company Data file
        const filePath = path.join(process.cwd(), 'src', 'app', 'company_data.txt');
        let fileContent = '';

        try {
            fileContent = await fs.readFile(filePath, 'utf8');
        } catch (error) {
            console.error('Error reading file:', error);
            fileContent = 'Error loading company data.';
        }

        // Create the System Prompt
        const systemPrompt = `
        You are the official AI Support Agent for "Ingenious Techworks".
        
        Your Knowledge Base:
        --------------------
        ${fileContent}
        --------------------

        Instructions:
        1. Answer strictly based on the Knowledge Base above.
        2. Be polite, professional, friendly, and concise.
        3. Use emojis sparingly to make responses engaging (1-2 per response max).
        4. If the user asks about pricing, ALWAYS mention that it depends on project requirements and they should contact the team directly for a customized quote.
        5. If the user asks about contact, tell them to use the contact form on the website or reach out through the provided communication channels.
        6. If the answer is not in the Knowledge Base, say: "I'm sorry, I don't have that specific information. Please contact our team directly for more details! 📞"
        7. Do not make up facts or provide information outside the Knowledge Base.
        8. Keep responses concise but helpful - aim for 2-4 sentences when possible.
        9. If someone greets you, greet them back warmly and ask how you can help them today.
        `;

        // Convert UI messages to model messages
        const modelMessages = await convertToModelMessages(messages);

        // Call Groq Model with llama-3.3-70b-versatile
        const result = streamText({
            model: groq('llama-3.3-70b-versatile'),
            system: systemPrompt,
            messages: modelMessages,
        });

        return result.toUIMessageStreamResponse();
    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response(JSON.stringify({ error: 'Failed to process chat request', details: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
