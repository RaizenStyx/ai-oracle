// app/ritual-generator/page.tsx
'use client';
import { useState } from 'react';
import Layout from '../../components/Layout';
import PromptSelector from '../../components/PromptSelector';
import { fullGeneratorPrompts } from '../../lib/mocks';
import { stripHtml } from '@/lib/utils';
import Link from 'next/link';

export default function RitualGeneratorPage() {
    const [prompt, setPrompt] = useState('');
    const [teaser, setTeaser] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateRitual = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTeaser('');
        setError(null);

        try {
            const response = await fetch('/api/generate-sampler-ritual', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (data.success) {
                setTeaser(data.teaser);
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Failed to fetch ritual from the AI. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Teaser copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <Layout>
            <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#B8860B] mb-4">
                    The Full Ritual Generator
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mb-8">
                    Unlock the full power of the AI Oracle. Get detailed, personalized rituals for any intention, from cleansing your space to manifesting your desires.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                    {/* Left Column: Input and Form */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
                        <h3 className="text-2xl font-bold font-serif text-white mb-4">Craft Your Ritual</h3>
                        <form onSubmit={handleGenerateRitual} className="flex flex-col gap-4">
                            <textarea
                                className="w-full h-48 p-4 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 text-white"
                                placeholder="Describe your intention and any specific elements you want to include (e.g., 'A full moon ceremony for spiritual growth using fire and crystals')."
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                disabled={isLoading}
                            ></textarea>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#B8860B] hover:bg-[#a17a0a] rounded-md text-[#2E2B59] font-semibold transition-colors duration-300 cursor-pointer"
                                disabled={isLoading || !prompt.trim()}
                            >
                                {isLoading ? 'Generating...' : 'Generate Ritual'}
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Output */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
                        <h3 className="text-2xl font-bold font-serif text-white mb-4">Your Starter Ritual:</h3>
                        {error && (
                            <div className="text-lg text-red-500 font-medium mb-4">{error}</div>
                        )}
                        {teaser ? (
                            <div className="mt-8 prose prose-invert text-left max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: teaser }} />
                                <div className="text-center italic mt-4 text-gray-400">
                                    <p>The full AI Access will include supplies needed, full ceremony, and other content!</p>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button
                                        onClick={() => handleCopy(stripHtml(teaser))}
                                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white text-sm font-semibold transition-colors cursor-pointer"
                                    >
                                        <span>Copy Teaser</span>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-lg font-medium text-center italic text-gray-400">
                                Your ritual starter content will appear here.
                            </p>
                        )}
                    </div>
                </div>
                {teaser && (
                    <div className="mt-8 text-center">
                        <Link href="https://6801801549663.gumroad.com/l/nayuj" target="_blank" rel="noopener noreferrer">
                            <div className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-bold transform hover:scale-105 transition-all duration-300">
                                Unlock the Full Ritual & Download
                            </div>
                        </Link>
                    </div>
                )}
                <PromptSelector prompts={fullGeneratorPrompts} onPromptSelect={setPrompt} />
            </div>
        </Layout>
    );
}