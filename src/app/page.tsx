'use client';

import { useState } from 'react';
import AwanasaGDD from "./home";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  
  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      <AwanasaGDD />
    </>
  );
}
