import React, { useState, Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
const InfoSection = lazy(() => import('../components/InfoSection'));

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeroSection />
      <Suspense fallback={<div></div>}>
        <InfoSection />
      </Suspense>
    </>
  );
};

export default Home;
