// components/Layout.tsx
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#2E2B59] min-h-screen text-[#FDF5E6]">
      <Header />
      <main className="container mx-auto p-8">
        {children}
      </main>
    </div>
  );
}