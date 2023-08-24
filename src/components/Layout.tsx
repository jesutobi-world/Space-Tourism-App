import { Navbar } from "./Navbar";
import { ReactNode } from 'react';
import { Transition } from "./Transition";
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <motion.div className="transition-container">
          <Transition component={children} />
        </motion.div>
      </main>
    </div>
  );
};
