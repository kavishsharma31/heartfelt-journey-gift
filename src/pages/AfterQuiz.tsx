
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AfterQuiz = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-2xl"
      >
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-rose-500 mb-8">
              Pari,
            </h1>
            <p className="text-2xl md:text-3xl font-playfair leading-relaxed text-foreground">
              you&apos;re the best person in this entire world. You are my home, my comfort place. I just wanna come back to you everyday after I&apos;m tired and alone.
            </p>
            <p className="text-2xl md:text-3xl font-playfair leading-relaxed text-foreground mt-8">
              On this valentines day, I want you to know that you&apos;ll always be my love, I promise, forever.
            </p>
            <p className="text-2xl md:text-3xl font-playfair leading-relaxed text-rose-500 mt-8">
              You are going to be my ghar ki lakshmi. I&apos;m gonna marry you and I&apos;m gonna give you all the happiness in the world.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={() => navigate('/blank')}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8"
              >
                Next
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AfterQuiz;
