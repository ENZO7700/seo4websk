
"use client";

import { useState, useEffect } from 'react';

// Define the gradient color schemes
const dayGradient = {
  '--glow-color-from': '#fde047', // yellow-300
  '--glow-color-mid': '#f97316',   // orange-500
  '--glow-color-to': '#ec4899',   // pink-500
};

const nightGradient = {
  '--glow-color-from': '#818cf8', // indigo-400
  '--glow-color-mid': '#d946ef',   // fuchsia-500
  '--glow-color-to': '#0ea5e9',   // sky-500
};

export function useTimeBasedGradient() {
  const [gradient, setGradient] = useState(dayGradient);

  useEffect(() => {
    // This effect runs only on the client side, preventing hydration mismatch.
    const determineGradient = () => {
      const hour = new Date().getHours();
      // Day is from 6 AM to 6 PM (18:00)
      if (hour >= 6 && hour < 18) {
        setGradient(dayGradient);
      } else {
        setGradient(nightGradient);
      }
    };

    // Set the initial gradient
    determineGradient();

    // Set an interval to check the time periodically.
    // We check every 30 minutes to update the gradient.
    const intervalId = setInterval(determineGradient, 30 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return gradient;
}
