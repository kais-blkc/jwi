import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IFadeInProps {
  children: ReactNode;
}

export const FadeIn: FC<IFadeInProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};
