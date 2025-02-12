
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const messages = [];

const Messages = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-3xl"
      >
        <h1 className="text-4xl font-playfair font-bold text-center mb-12 text-gradient">
          Some Thoughts For You
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
