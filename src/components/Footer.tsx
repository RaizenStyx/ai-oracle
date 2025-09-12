// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2E2B59] text-gray-400 py-6 px-4 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Oracle. All Rights Reserved.
        </p>
        <span>Powered by ChatGPT</span>
        <span>Developed by Connor Reed</span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy-policy">
            <span className="text-sm hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
          </Link>
          <Link href="/terms-of-service">
            <span className="text-sm hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}