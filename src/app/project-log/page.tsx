// app/project-log/page.tsx
import Layout from '../../components/Layout';
import NewsletterForm from '../../components/NewsletterForm';
import { projectUpdates } from '../../lib/project-log';

export default function ProjectLogPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#B8860B] mb-4 text-center">
          Project Log
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8 text-center">
          Stay up-to-date with news, future ideas, and changes as the AI Oracle evolves.
        </p>

        <div className="w-full max-w-4xl space-y-8">
          {projectUpdates.map((update, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-indigo-600">
              <span className="text-xs font-bold uppercase text-indigo-400">{update.category}</span>
              <h2 className="text-2xl font-bold text-white mt-2 mb-1">{update.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{update.date}</p>
              <p className="text-gray-300">{update.content}</p>
            </div>
          ))}
        </div>
        <NewsletterForm />
      </div>
    </Layout>
  );
}