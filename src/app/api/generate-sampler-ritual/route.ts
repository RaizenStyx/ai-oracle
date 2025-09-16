// app/api/generate-sampler-ritual/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const newPrompt = `
      You are a mystical and knowledgeable guide. Create a brief, captivating, and inspiring ritual sample based on the following intention: "${prompt}".

      The response should be very concise, including a short, simple title and a short but catchy summary. The total response must be under 300 characters. It should sound intriguing but not provide the full ritual content. Do not include a supplies list or ceremony steps.

      Format the response using HTML. The title should be in an <h2> tag and the summary should be in a <p> tag.
    `;

    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: newPrompt,
      max_tokens: 50, // Very low token count for cost control
      temperature: 0.8, // High creativity to make it catchy
    });

    const teaser = completion.choices[0].text;

    return NextResponse.json({ success: true, teaser });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate ritual sampler.' });
  }
}