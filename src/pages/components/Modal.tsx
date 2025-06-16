import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, y: "-20%" },
  visible: { opacity: 1, y: "0%" },
  exit: { opacity: 0, y: "-10%" },
};

export default function Modal({ isOpen, onClose, children }: Props) {

    useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#00000079] backdrop-blur-sm z-50 flex items-center justify-center "
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-[#0f172a] text-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg border border-cyan-400/30"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-xl hover:text-cyan-400 transition"
            >
                <X />
            </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
