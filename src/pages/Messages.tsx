
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const messages = [
  {
    date: "October 29, 2023",
    message: "Hey! Remember when we first started talking? Those late night conversations about life, dreams, and everything in between..."
  },
  {
    date: "March 25, 2024",
    message: "The day I gathered all my courage to ask you out. My heart was racing, but it was the best decision I ever made! ❤️"
  },
  {
    date: "August 25, 2024",
    message: "Our first meeting was magical. All those months of waiting were worth it just to see your beautiful smile in person! 🥰"
  }
];

const Messages = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-3xl"
      >
        <h1 className="text-4xl font-playfair font-bold text-center mb-12 text-gradient">
          Our Special Messages
        </h1>
        <div className="space-y-6">
          {messages.map((item, index) => (
            <motion.div
              key={item.date}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-rose-500 font-semibold text-sm">{item.date}</p>
                      <p className="mt-2 text-lg leading-relaxed">{item.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Messages;
