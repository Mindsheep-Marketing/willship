import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface Props {
    endValue: number;
    countText?: string;
}

const AnimatedCounter = ({ endValue, countText } : Props) => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce: true,
    rootMargin: "-50px",
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <span ref={ref}>
      {startCount && (
        <>
          <CountUp 
            start={0}
            duration={5}
            end={endValue}
          />
          {countText}
        </>
      )}
    </span>
  );
};

export default AnimatedCounter;