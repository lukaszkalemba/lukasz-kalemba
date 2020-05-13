import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const getSize = () => ({
    width: typeof window !== 'undefined' && window.innerWidth,
    height: typeof window !== 'undefined' && window.innerHeight,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
