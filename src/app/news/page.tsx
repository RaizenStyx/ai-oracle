// app/news/page.tsx
import Layout from '@/components/Layout';
import NewsletterForm from '@/components/NewsletterForm';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col font-sans">
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-8 text-gray-50">
          {/* Left Column: Hero & Intro (Full width on small, 1/3 on large) */}
          <section className="lg:col-span-1 space-y-8 p-8 bg-gray-800 rounded-xl shadow-xl ring-1 ring-[#B8860B]/20 border border-gray-700 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#B8860B] leading-tight tracking-tighter text-center sm:text-left animate-fade-in">
              <span className="block">The Oracle Awaits:</span>
              <span className="block text-indigo-600 mt-2">Crafting Your Path.</span>
            </h1>
            <p className="text-lg text-gray-50 leading-relaxed text-center sm:text-left opacity-90 animate-fade-in delay-200">
              You&apos;ve stumbled upon the digital sanctuary where intentions ignite. AI Oracle is your AI-powered guide, designed to streamline your spiritual workflow by generating rich, personalized rituals with unprecedented ease.
            </p>
          </section>

          {/* Right Column: Features & Future (Full width on small, 2/3 on large) */}
          <section className="lg:col-span-2 space-y-10 p-8 bg-gray-800 rounded-xl shadow-xl ring-1 ring-[#B8860B]/20 border border-gray-700 flex flex-col justify-start">
            <h2 className="text-3xl font-bold text-gray-50 mb-6 border-b border-gray-700 pb-4 flex items-center gap-3">
              What is The AI Oracle?
            </h2>
            <div className="text-lg text-gray-50 leading-relaxed space-y-4">
              <p>
                Say goodbye to spiritual guesswork and endless ritual research. With AI Oracle, you can swiftly generate compelling practices for daily focus, intricate ceremonies for special occasions, and personalized guides for your spiritual journey. Simply provide a high-level prompt, and watch as our advanced AI brings your intentions to life.
              </p>
              <p className="italic text-gray-400">
                &quot;Accelerate your creativity. Focus on your practice, not your research.&quot;
              </p>
            </div>

            <h3 className="text-3xl font-bold text-gray-50 mb-6 border-b border-gray-700 pb-4 flex items-center gap-3">
              The Future of Your Practice:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-50 leading-relaxed">
              <div className="space-y-3 p-4 bg-gray-900 rounded-lg border border-gray-800 shadow-inner">
                <h3 className="text-xl font-bold text-[#B8860B] flex items-center gap-2">
                  Personalized Guidance
                </h3>
                <p>Train the AI to understand your personal spiritual path, your beliefs, and your unique style to generate truly tailored rituals that fit seamlessly into your life.</p>
              </div>
              <div className="space-y-3 p-4 bg-gray-900 rounded-lg border border-gray-800 shadow-inner">
                <h3 className="text-xl font-bold text-[#B8860B] flex items-center gap-2">
                  Expanded Practices & Tools
                </h3>
                <p>Dive deeper into niche practices, explore specific traditions, or generate guides for meditation, divination, and more.</p>
              </div>
              <div className="space-y-3 p-4 bg-gray-900 rounded-lg border border-gray-800 shadow-inner">
                <h3 className="text-xl font-bold text-[#B8860B] flex items-center gap-2">
                  Collaborative Features
                </h3>
                <p>Work seamlessly with your circle. Share ritual drafts, provide feedback, and create ceremonies together in a shared workspace.</p>
              </div>
              <div className="space-y-3 p-4 bg-gray-900 rounded-lg border border-gray-800 shadow-inner">
                <h3 className="text-xl font-bold text-[#B8860B] flex items-center gap-2">
                  Direct Integrations & Export
                </h3>
                <p>Export rituals directly into your favorite spiritual apps, digital planners, or save them in a preferred format.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8 bg-gray-900 text-gray-50">
          <section className="space-y-10 p-8 bg-gray-800 rounded-xl shadow-xl ring-1 ring-[#B8860B]/20 border border-gray-700 flex flex-col justify-start">
            <div className="pt-10  mb-10 text-center">
              <h3 className="text-3xl font-bold text-gray-50 mb-6 flex items-center justify-center gap-3">
                Support The AI Oracle&apos;s Vision
              </h3>
              <p className="text-lg text-gray-50 leading-relaxed mb-8">
                The AI Oracle is a passion project, built by a solo developer dedicated to empowering spiritual seekers. If you believe in this vision and want to see the AI Oracle grow, consider supporting its development. Your contributions fuel future features and ensure this tool remains accessible to all.
              </p>
              <Link href="https://6801801549663.gumroad.com/l/nayuj" target="_blank" rel="noopener noreferrer" className="inline-block">
                <div className="inline-flex items-center justify-center bg-indigo-600 text-gray-950 px-8 py-4 rounded-lg font-bold text-xl uppercase tracking-wider shadow-lg hover:bg-[#B8860B] transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Support Development
                </div>
              </Link>
            </div>
          </section>
          <NewsletterForm />
        </div>
      </div>
    </Layout>
  );
}