// app/page.tsx
import Link from 'next/link';
import NewsletterForm from '../components/NewsletterForm';

export default function HomePage() {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2E2B59] text-[#FDF5E6] p-4 font-sans">
      <div className="flex flex-col items-center max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-[#B8860B] mb-4">
          The AI Oracle
        </h1>
        <p className="text-lg md:text-xl text-center mb-10">
          Craft personalized rituals, ceremonies, and spells tailored to your unique intentions with the power of ancient wisdom and modern AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/ritual-generator">
            <div className="px-8 py-4 bg-[#356859] hover:bg-[#2e564d] rounded-full text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
              Unlock the Full Ritual Generator
            </div>
          </Link>
          <Link href="/free-tool">
            <div className="px-8 py-4 bg-[#8a91ac] hover:bg-[#7b8196] rounded-full text-[#2E2B59] font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
              Try the Free Intention Generator
            </div>
          </Link>
        </div>
         <NewsletterForm />
      </div>
    </div>
  );
}