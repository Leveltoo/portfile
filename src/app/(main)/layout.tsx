import Header from '@/components/layout/Header';
import '@unocss/reset/tailwind.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={` antialiased`}>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      {/* Footer will go here */}
    </div>
  );
}
