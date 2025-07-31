
'use client';

import Lottie from "lottie-react";

interface LottiePlayerProps {
  src: string;
  className?: string;
}

const LottiePlayer = ({ src, className }: LottiePlayerProps) => {
  return (
    <div className={className}>
      <Lottie animationData={src} loop={true} />
    </div>
  );
};

// To get the JSON URL for a Lottie animation from lottiefiles.com:
// 1. Go to the animation page.
// 2. Look for the "Asset Link" or similar option in the download/export section.
// 3. Copy the URL that ends with .json.
// Example: https://lottie.host/b65f5859-2996-415d-ab9b-35b818f9bd8a/l8w2MDB3P9.json

export default LottiePlayer;
