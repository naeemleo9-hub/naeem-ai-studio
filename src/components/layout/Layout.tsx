import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import AICustomizer from '../ai/AICustomizer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" role="main">
        {children}
      </main>
      <Footer />
      <AICustomizer />
    </div>
  );
};

export default Layout;
