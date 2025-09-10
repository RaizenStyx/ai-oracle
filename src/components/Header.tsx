// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#2E2B59] bg-opacity-80 backdrop-blur-sm shadow-md text-[#FDF5E6] p-4 font-sans">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-xl font-bold font-serif text-[#B8860B] hover:text-white transition-colors">
            AI Oracle
          </div>
        </Link>
        <div className="flex gap-6">
          <Link href="/free-tool">
            <div className="hover:text-gray-300 transition-colors">
              Free Tool
            </div>
          </Link>
          <Link href="/ritual-generator">
            <div className="hover:text-gray-300 transition-colors">
              Full Generator
            </div>
          </Link>
          <Link href="/blog">
            <div className="hover:text-gray-300 transition-colors">
              Blog
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}