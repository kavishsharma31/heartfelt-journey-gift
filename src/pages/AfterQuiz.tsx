
import { motion } from "framer-motion";

const AfterQuiz = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-2xl"
      >
        {/* This is a blank page ready for your next additions */}
      </motion.div>
    </div>
  );
};

export default AfterQuiz;
