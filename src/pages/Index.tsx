
import { useState, useEffect } from "react";
import IntroSection from "@/components/IntroSection";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    date: "26th-29th October 2023",
    title: "The moment my life changed",
    image: "/lovable-uploads/344012fc-9d3d-455b-9e1b-3e8a09a0db26.png"
  },
  {
    date: "25th March 2024",
    title: "The moment I took the leap and asked you out",
    image: "/lovable-uploads/bde0f35b-dafe-461a-a0bc-9f2ad7699028.png"
  },
  {
    date: "25th August 2024",
    title: "Meeting for the first time after dating",
    image: "photo-1472396961693-142e6e269027"
  },
  {
    date: "25th October 2024",
    title: "Exactly one year after we met",
    image: "/lovable-uploads/c0520120-f210-435b-b443-232b10d38c03.png"
  },
  {
    date: "19th January 2025",
    title: "When I sneaked into IIM Rohtak for your birthday",
    image: "photo-1487058792275-0ad4aaf24ca7"
  },
  {
    date: "25th March 2025",
    title: "One Year Anniversary- upcoming event",
    image: "photo-1581091226825-a6a2a5aee158"
  }
];

const Index = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  useEffect(() => {
    if (hasStarted) {
      const timer = setTimeout(() => {
        setShowTimeline(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasStarted]);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <IntroSection onStart={handleStart} key="intro" />
        ) : !showTimeline ? (
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
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto py-12 px-4"
            key="timeline"
          >
            <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-gradient">
              Our Love Story Timeline
            </h2>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.date}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="hover-scale">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-full md:w-1/3 aspect-[4/3] bg-accent rounded-lg overflow-hidden relative group">
                          <img
                            src={event.image.startsWith('/') ? event.image : `https://images.unsplash.com/${event.image}?auto=format&fit=crop&w=800`}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <p className="text-rose-500 font-semibold">{event.date}</p>
                          <h3 className="text-2xl font-playfair font-bold">{event.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index < timelineEvents.length - 1 && (
                    <div className="flex justify-center my-4">
                      <div className="w-1 h-8 bg-rose-100 rounded-full"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
