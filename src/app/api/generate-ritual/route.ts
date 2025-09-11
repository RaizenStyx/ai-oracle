// app/api/generate-ritual/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    // The updated, more specific prompt
    const newPrompt = `
      You are a mystical and knowledgeable guide. Create a detailed, inspiring ritual or ceremony based on the following intention: "${prompt}".

      At the very beginning of your response, please provide a title and a summary of the ritual. The title and summary together must be under 250 characters.

      Format the entire response using HTML tags. The title should be in an <h2> tag and the summary should be in a <p> tag. Wrap both the title and the summary in a single <div class="ritual-teaser"> element.

      Following the teaser, provide the full, comprehensive ritual. It should be easy to follow and include sections like "Supplies" and "The Ceremony" with headings (<h3>) and lists (<ul> or <ol>). Be creative, using elements from nature and spiritual practices.
    `;

    // Use a powerful, low-cost model like gpt-3.5-turbo-instruct
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