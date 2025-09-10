// // app/free-tool/page.tsx
// import Layout from '../../components/Layout';
// import Link from 'next/link';

// export default function FreeToolPage() {
//   return (
//     <Layout>
//       <div className="flex flex-col items-center text-center">
//         <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#B8860B] mb-4">
//           Daily Intention Generator
//         </h1>
//         <p className="text-lg text-gray-300 max-w-2xl mb-8">
//           A single thought can change your day. Focus your energy with a daily intention, crafted just for you.
//         </p>

//         {/* This will be your AI form */}
//         <div className="w-full max-w-xl bg-gray-800 p-8 rounded-lg shadow-lg">
//           <form className="flex flex-col gap-4">
//             <textarea
//               className="w-full h-32 p-4 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 text-white"
//               placeholder="What do you want to achieve today? (e.g., peace, focus, abundance)"
//             ></textarea>
//             <button
//               type="submit"
//               className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold transition-colors duration-300"
//             >
//               Generate Intention
//             </button>
//           </form>
//           <div className="mt-8 text-lg font-medium text-center italic">
//             {/* The generated intention will appear here */}
//             Your intention will appear here...
//           </div>
//         </div>

//         <Link href="/ritual-generator">
//           <div className="mt-8 px-6 py-3 bg-[#B8860B] hover:bg-[#a17a0a] rounded-full text-[#2E2B59] font-semibold transition-all duration-300">
//             Want a Full Ritual?
//           </div>
//         </Link>
//       </div>
//     </Layout>
//   );
// }

// app/free-tool/page.tsx
'use client'; // This is needed to use client-side features like useState and event handlers.
import { useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { dailyIntentionPrompts, dailyIntentionResponses } from '../../lib/mocks';

export default function FreeToolPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handlePromptClick = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
    setResponse(dailyIntentionResponses[selectedPrompt] || 'Response not found for this prompt.');
  };

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse(dailyIntentionResponses[prompt] || 'No pre-generated response for this prompt. You will get a unique response from the AI once integrated!');
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

        <div className="w-full max-w-xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleGenerate} className="flex flex-col gap-4">
            <textarea
              className="w-full h-32 p-4 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 text-white"
              placeholder="What do you want to achieve today? (e.g., peace, focus, abundance)"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold transition-colors duration-300"
            >
              Generate Intention
            </button>
          </form>
          {response && (
            <div className="mt-8 text-lg font-medium text-center italic">
              {response}
            </div>
          )}
        </div>

        <h2 className="text-xl md:text-2xl font-bold font-serif mt-10 mb-4">
          Try these prompts:
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mb-8">
          {dailyIntentionPrompts.map((p, index) => (
            <button
              key={index}
              onClick={() => handlePromptClick(p)}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-sm transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        <Link href="/ritual-generator">
          <div className="mt-8 px-6 py-3 bg-[#B8860B] hover:bg-[#a17a0a] rounded-full text-[#2E2B59] font-semibold transition-all duration-300">
            Want a Full Ritual?
          </div>
        </Link>
      </div>
    </Layout>
  );
}