import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import comdataLogo from '../assets/logos/ComdataTextLogoTransparent-BEcFGLeV.png';

export default function Preloader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the loader after a few seconds to match original loading experience
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500); // 500ms after fade out starts
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center z-10">
            {/* Main Logo fading in and slightly floating up */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={comdataLogo} 
              alt="Comdata Innovations" 
              className="w-56 md:w-72 lg:w-80 mb-6 drop-shadow-2xl" 
            />
            
            <div className="relative overflow-hidden w-64 md:w-80 rounded-full h-px mt-2 flex justify-center">
                {/* A subtle glowing line background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                
                {/* The sweeping blue beam light */}
                <motion.div
                initial={{ x: '-150%' }}
                animate={{ x: '150%' }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-blue-400/80 mt-4 text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-center"
            >
              Infinite Possibilities
            </motion.p>
          </div>
          
          {/* Ambient background glow for high-impact effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
