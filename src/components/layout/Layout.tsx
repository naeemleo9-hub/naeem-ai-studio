import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import AICustomizer from '../ai/AICustomizer';
import { AdminBar } from '../cms/AdminBar';
import { EditModeToggle } from '../cms/EditModeToggle';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminBar />
      <Header />
      <main className="flex-1" role="main">
        {children}
      </main>
      <Footer />
      <AICustomizer />
      <EditModeToggle />
    </div>
  );
};

export default Layout;
