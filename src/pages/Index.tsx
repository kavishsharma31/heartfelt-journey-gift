
import { useState } from "react";
import IntroSection from "@/components/IntroSection";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const Index = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <IntroSection onStart={handleStart} key="intro" />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex flex-col items-center justify-center p-6"
            key="journey"
          >
            <Heart className="w-12 h-12 text-rose-500 animate-pulse" />
            <h2 className="text-3xl font-playfair font-bold mt-4 text-gradient">
              Our Journey Begins...
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
