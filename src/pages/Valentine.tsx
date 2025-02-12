
import { motion } from "framer-motion";

const Valentine = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-playfair text-rose-500">
          So.... will you be my valentine?
        </h1>
      </motion.div>
    </div>
  );
};

export default Valentine;
