// app/access/page.tsx
'use client';
import { useState } from 'react';
import Layout from '../../components/Layout';
import PromptSelector from '../../components/PromptSelector'; 
import { fullGeneratorPrompts } from '../../lib/mocks';
import { stripHtml } from '@/lib/utils';

export default function AccessPage() {
    const [prompt, setPrompt] = useState('');
    const [ritual, setRitual] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateRitual = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setRitual('');
        setError(null);

        try {
            const response = await fetch('/api/generate-ritual', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (data.success) {
                setRitual(data.ritual);
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

    // Split the AI response into teaser and full content
    const getTeaserAndFullContent = (fullResponse: string) => {
        // Find the index where the full ritual starts
        const splitIndex = fullResponse.indexOf('</div>');
        if (splitIndex === -1) {
            // Fallback for a malformed response
            return {
                teaser: fullResponse.substring(0, 250) + '...',
                full: fullResponse,
            };
        }
        const teaser = fullResponse.substring(0, splitIndex + 6);
        const full = fullResponse.substring(splitIndex + 6);
        return { teaser, full };
    };

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Ritual copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleDownload = () => {
        // We'll strip HTML from the full ritual content
        const textToDownload = stripHtml(ritual);

        // Create a Blob with the text content
        const blob = new Blob([textToDownload], { type: 'text/plain' });

        // Create a temporary link element
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ai-oracle-ritual.txt'; // Set the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url); // Clean up the URL object
    };

     //const content = getTeaserAndFullContent(ritual);
    
  return (
    <Layout>
        <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#B8860B] mb-4">
                Welcome, Seeker
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-8">
                Your access to the full AI Oracle is now unlocked. Generate as many personalized rituals as you desire.
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
                <h3 className="text-2xl font-bold font-serif text-white mb-4">Your AI Oracle</h3>
                {error && (
                    <div className="text-lg text-red-500 font-medium mb-4">{error}</div>
                )}
                {ritual ? (
                    <div className="mt-8 prose prose-invert text-left max-w-none">
                    {/* Teaser Content Section */}
                    <div className='text-center mb-8'>
                        <h3 className="text-xl font-bold text-white mb-4">Thank you for using the AI Oracle</h3>
                        <div>
                        We appreciate your support! As a full access user, you can generate detailed rituals complete with supplies and ceremony steps. The full content is below, and can be copied or downloaded.
                        </div> 
                    </div>                
            </div>
            ) : (
              <p className="text-lg font-medium text-center italic text-gray-400">
                Thank you for using the full AI Oracle. Your detailed ritual content will appear below once generated.
              </p>
            )}
          </div>
        </div>
         {ritual && (
            <div className="mt-12 w-full max-w-6xl bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
                <div className="mt-8 prose prose-invert text-left max-w-none">     
                    <div dangerouslySetInnerHTML={{ __html: ritual }} />
                        <div className="flex justify-end mt-4">
                        <button
                            onClick={handleDownload}
                            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold transition-colors duration-300 cursor-pointer mr-4"
                            
                        >
                            Download Ritual
                        </button>
                        <button
                            onClick={() => handleCopy(stripHtml(ritual))}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white text-sm font-semibold transition-colors cursor-pointer"
                        >
                            <span>Copy Ritual</span>
                        </button>
                    </div>
                </div>
            </div>
            )}

        <PromptSelector prompts={fullGeneratorPrompts} onPromptSelect={setPrompt} />
      </div>    
    </Layout>
  );
}