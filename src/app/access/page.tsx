// app/access/page.tsx
'use client';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { fullRitualPrompts, fullRitualResponses } from '../../lib/mocks';
import Link from 'next/link';

export default function AccessPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handlePromptClick = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
    setResponse(fullRitualResponses[selectedPrompt] || 'Response not found.');
  };

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse(fullRitualResponses[prompt] || 'No mock response for this prompt. A real AI-generated ritual would appear here!');
  };

  return (
    <Layout>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#B8860B] mb-4">
          Welcome, Seeker
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Your access to the full AI Oracle is now unlocked. Generate as many personalized rituals as you desire.
        </p>

        <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleGenerate} className="flex flex-col gap-4">
            <textarea
              className="w-full h-48 p-4 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 text-white"
              placeholder="Describe your intention and any specific elements you want to include (e.g., 'A full moon ceremony for spiritual growth using fire and crystals')."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-[#B8860B] hover:bg-[#a17a0a] rounded-md text-[#2E2B59] font-semibold transition-colors duration-300"
            >
              Generate Ritual
            </button>
          </form>

          {response && (
            <div className="mt-8 prose prose-invert text-left max-w-none" dangerouslySetInnerHTML={{ __html: response }} />
          )}
        </div>

        <h2 className="text-xl md:text-2xl font-bold font-serif mt-10 mb-4">
          Try these prompts:
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mb-8">
          {fullRitualPrompts.map((p, index) => (
            <button
              key={index}
              onClick={() => handlePromptClick(p)}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-sm transition-colors"
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}