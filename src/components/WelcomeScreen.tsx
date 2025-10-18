'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for fade out animation to complete
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <div className="animate-pulse">
        <Image
          src="/awanasa/awanasa.png"
          alt="Awanasa Logo"
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  );
}
