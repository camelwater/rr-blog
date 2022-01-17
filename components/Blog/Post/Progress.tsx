import * as React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";
import * as Theme from './ProgressBar.theme';
import useWindowDimensions from '@hooks/useWindowDimensions';

const Progress: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.975], [0, 1.05]);
  const pathLength = useSpring(yRange, { stiffness: 750, damping: 100 });
  const { height, width } = useWindowDimensions();

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

  return (
    <>
      <Theme.SVG viewBox="0 0 100% 100%">
        <motion.path
          fill="none"
          strokeWidth="7.5"
          stroke={isComplete?"#40c77d":"white"}
          strokeDasharray="0 1"
          d={`M 0,2.5 h -${width}`} 
          style={{
            pathLength,
            scaleX: -1 // Reverse direction of line animation
          }}
        />
      </Theme.SVG>
    </>
  );
}

export default Progress