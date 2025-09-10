// // app/ritual-generator/page.tsx
// import Layout from '../../components/Layout';
// import Link from 'next/link';

// export default function RitualGeneratorPage() {
//   return (
//     <Layout>
//       <div className="flex flex-col items-center text-center">
//         <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#B8860B] mb-4">
//           The Full Ritual Generator
//         </h1>
//         <p className="text-lg text-gray-300 max-w-2xl mb-8">
//           Unlock the full power of the AI Oracle. Get detailed, personalized rituals for any intention, from cleansing your space to manifesting your desires.
//         </p>

//         {/* The paid tool's form and AI output will go here */}
//         <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg">
//           <form className="flex flex-col gap-4">
//             <textarea
//               className="w-full h-48 p-4 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 text-white"
//               placeholder="Describe your intention and any specific elements you want to include (e.g., 'A full moon ceremony for spiritual growth using fire and crystals')."
//             ></textarea>
//             <button
//               type="submit"
//               className="px-6 py-3 bg-[#B8860B] hover:bg-[#a17a0a] rounded-md text-[#2E2B59] font-semibold transition-colors duration-300"
//             >
//               Generate Ritual
//             </button>
//           </form>

//           {/* This is the area where the gated content will appear */}
//           <div className="mt-8 prose prose-invert text-left max-w-none">
//             <h2 className="text-2xl font-bold text-white mb-4">Your Ritual Teaser:</h2>
//             <p className="italic text-gray-400">
//               {/* This is where the first paragraph of the AI-generated ritual will be */}
//               A powerful ritual for spiritual growth begins with the cleansing flame of a single candle.
//             </p>
//             <p className="text-gray-400">
//               The flickering light represents your inner fire and the transformative energy of the universe...
//             </p>
//             <div className="mt-8 text-center">
//               <Link href="https://6801801549663.gumroad.com/l/nayuj" target="_blank" rel="noopener noreferrer">
//                 <div className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-bold transform hover:scale-105 transition-all duration-300">
//                   Unlock the Full Ritual & Download
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// app/ritual-generator/page.tsx
'use client';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { fullRitualPrompts, fullRitualResponses } from '../../lib/mocks';

export default function RitualGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handlePromptClick = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
    setResponse(fullRitualResponses[selectedPrompt] || 'Response not found for this prompt.');
    setIsUnlocked(false); // Reset unlock status
  };

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse(fullRitualResponses[prompt] || 'No pre-generated response for this prompt. You will get a unique ritual from the AI once integrated!');
    setIsUnlocked(false); // Reset unlock status
  };

  // This will eventually be called after a successful Gumroad purchase
  // For now, we'll use a mock button to simulate it.
  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const getTeaserContent = () => {
    if (!response) return 'Your ritual teaser will appear here...';
    // This is a simple way to split by a section for the teaser.
    // In a real app, we'd have a more robust way to handle this.
    const parts = response.split('</p>');
    return `<h2 className="text-2xl font-bold font-serif text-[#B8860B] mb-2">Your Ritual Teaser:</h2><p classname="italic text-gray-400">${parts[0]}</p>`;
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
            <div className="mt-8 prose prose-invert text-left max-w-none">
              {!isUnlocked ? (
                <>
                  <div dangerouslySetInnerHTML={{ __html: getTeaserContent() }} />
                  <div className="mt-8 text-center">
                    <button
                      onClick={handleUnlock}
                      className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-bold transform hover:scale-105 transition-all duration-300"
                    >
                      Unlock the Full Ritual & Download
                    </button>
                  </div>
                </>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: response }} />
              )}
            </div>
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