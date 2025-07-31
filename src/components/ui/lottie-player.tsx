
'use client';

import Lottie from "lottie-react";

interface LottiePlayerProps {
  animationData: any;
  className?: string;
}

const LottiePlayer = ({ animationData, className }: LottiePlayerProps) => {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottiePlayer;
