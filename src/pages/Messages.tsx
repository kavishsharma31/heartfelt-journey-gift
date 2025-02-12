
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MailOpen } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const messages = [
  {
    id: 1,
    message: "Ever since you came into my life, it has totally changed babe, all of my days are filled with your messages, my last message before sleeping is sent to you, and my first message after waking up is sent to you"
  },
  {
    id: 2,
    message: "Our spark has always been the same. I remember we instantly clicked when we met as friends, I knew that you were the one, I wanted you forever with me"
  },
  {
    id: 3,
    message: "I'm so proud of myself for asking you to go out with me on 28th October 2023. Best Decision Ever."
  },
  {
    id: 4,
    message: "The next best decision I made was asking you out on 25th March. Man the adrenaline was so high that day, I loved that night and I love you the most."
  },
  {
    id: 5,
    message: "Meeting you after that initial phase of long distance was like heaven to me. Finally getting to see you, touch you, hug you, kiss you. Everything was heavenly."
  },
  {
    id: 6,
    message: "I promise that I'll always be yours, you'll be my valentine every year from now on. NO MATTER WHAT."
  }
];

const Messages = () => {
  const navigate = useNavigate();
  const [openEnvelopes, setOpenEnvelopes] = useState<number[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);

  const handleEnvelopeClick = (id: number, message: string) => {
    if (!openEnvelopes.includes(id)) {
      setOpenEnvelopes([...openEnvelopes, id]);
      setSelectedMessage(message);
    } else {
      setSelectedMessage(message);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-3xl"
      >
        <h1 className="text-4xl font-playfair font-bold text-center mb-3 text-gradient">
          Some Thoughts For You
        </h1>
        <p className="text-center text-lg text-rose-500 mb-12 font-medium">
          Click on these envelopes to unlock lovely messages
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {messages.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => handleEnvelopeClick(item.id, item.message)}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-center justify-center">
                  {openEnvelopes.includes(item.id) ? (
                    <MailOpen className="w-12 h-12 text-rose-500" />
                  ) : (
                    <Mail className="w-12 h-12 text-rose-500" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={() => navigate('/blank')}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8"
          >
            Next
          </Button>
        </div>
      </motion.div>

      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-playfair text-rose-500 mb-4">
              A Message For You ❤️
            </DialogTitle>
          </DialogHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-lg leading-relaxed p-4"
          >
            {selectedMessage}
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Messages;
