
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";

interface IntroSectionProps {
  onStart: () => void;
}

const IntroSection = ({ onStart }: IntroSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-rose-50 to-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center space-y-8 max-w-2xl mx-auto"
      >
        <div className="space-y-2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gradient">
            My Love Story
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 font-inter">
            A journey through our most precious moments together
          </p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button
            onClick={onStart}
            className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Our Journey
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IntroSection;
