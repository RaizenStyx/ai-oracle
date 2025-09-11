// app/free-tool/page.tsx
'use client';
import { useState } from 'react';
import Layout from '../../components/Layout';
import PromptSelector from '../../components/PromptSelector'; 
import Link from 'next/link';
import { freeToolPrompts } from '../../lib/mocks'; 

export default function FreeToolPage() {
  const [prompt, setPrompt] = useState('');
  const [intention, setIntention] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateIntention = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIntention('');
    setError(null);

    try {
      const response = await fetch('/api/generate-intention', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Network response was not okay');
      }

      const data = await response.json();
      if (data.success) {
        setIntention(data.intention);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to fetch intention. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#B8860B] mb-4">
          Daily Intention Generator
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          A single thought can change your day. Focus your energy with a daily intention, crafted just for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Left Column: Input and Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold font-serif text-white mb-4">Craft Your Intention</h3>
            <form onSubmit={handleGenerateIntention} className="flex flex-col gap-4">
              <textarea
                className="w-full h-32 p-4 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 text-white"
                placeholder="What do you want to achieve today? (e.g., peace, focus, abundance)"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={isLoading}
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold transition-colors duration-300 cursor-pointer"
                disabled={isLoading || !prompt.trim()}
              >
                {isLoading ? 'Generating...' : 'Generate Intention'}
              </button>
            </form>
          </div>

          {/* Right Column: Output and Upsell */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 flex flex-col justify-between">
            <h3 className="text-2xl font-bold font-serif text-white mb-4">Your Intention:</h3>
            {error && (
              <div className="text-lg text-red-500 font-medium mb-4">{error}</div>
            )}
            {intention ? (
              <p className="text-lg font-medium text-center italic text-gray-200">{intention}</p>
            ) : (
              <p className="text-lg font-medium text-center italic text-gray-400">
                Generate your first intention above.
              </p>
            )}
            <div className="mt-8 text-center">
              <Link href="/ritual-generator">
                <div className="px-6 py-3 bg-[#B8860B] hover:bg-[#a17a0a] rounded-full text-[#2E2B59] font-semibold transition-all duration-300">
                  Want a Full Ritual?
                </div>
              </Link>
            </div>
          </div>
        </div>

        <PromptSelector prompts={freeToolPrompts} onPromptSelect={setPrompt} />
      </div>
    </Layout>
  );
}