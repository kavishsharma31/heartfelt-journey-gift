
import { useState } from "react";
import IntroSection from "@/components/IntroSection";

const Index = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <IntroSection onStart={handleStart} />
    </div>
  );
};

export default Index;
