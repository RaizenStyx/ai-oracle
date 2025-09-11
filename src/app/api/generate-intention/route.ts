// app/api/generate-intention/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `Based on the following request, provide a single, concise intention or affirmation that is less than 20 words: "${prompt}"`,
      max_tokens: 30, // Keep tokens very low for cost control
      temperature: 0.5,
    });

    const intention = completion.choices[0].text.trim();

    return NextResponse.json({ success: true, intention });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate intention.' });
  }
}