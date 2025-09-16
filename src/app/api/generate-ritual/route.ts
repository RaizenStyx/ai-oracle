// app/api/generate-ritual/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const newPrompt = `
      You are a mystical and knowledgeable guide. Create a detailed, inspiring, and comprehensive ritual or ceremony based on the following intention: "${prompt}".

      Format the entire response using HTML tags. It should include a clear title (<h2>), an introductory paragraph, a list of supplies (<ul>), and a detailed step-by-step ceremony (<ul> or <ol>). Be creative, using elements from nature and spiritual practices. The ritual should be comprehensive and easy to follow.
    `;

    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: newPrompt,
      max_tokens: 1000,
      temperature: 0.7,
    });

    const ritual = completion.choices[0].text;

    return NextResponse.json({ success: true, ritual });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate ritual.' });
  }
}