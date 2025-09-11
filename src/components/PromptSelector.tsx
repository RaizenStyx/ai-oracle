// components/PromptSelector.tsx
'use client';
import { useState } from 'react';

interface PromptSelectorProps {
  prompts: string[];
  onPromptSelect: (prompt: string) => void;
}

export default function PromptSelector({ prompts, onPromptSelect }: PromptSelectorProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const handleSelect = (prompt: string) => {
    setSelectedPrompt(prompt);
    onPromptSelect(prompt);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mt-16">
      <h2 className="text-xl md:text-2xl font-bold font-serif mb-6 text-[#B8860B] text-center">
        Or, try one of these prompts to get started:
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {prompts.map((p, index) => (
          <button
            key={index}
            onClick={() => handleSelect(p)}
            className={`
              px-6 py-3 rounded-full text-base font-semibold transition-all duration-300
              transform hover:-translate-y-1 hover:shadow-lg cursor-pointer
              ${selectedPrompt === p
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }
            `}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}