import './globals.css';
import { Sidebar } from './components/Sidebar';

export const metadata = {
  title: '{{projectName}} - Dashboard',
  description: 'Admin dashboard for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-700 bg-gray-100 leading-relaxed">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-64 p-8 overflow-x-hidden max-md:ml-[70px] max-md:p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
