import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
const InfoSection = lazy(() => import('../components/InfoSection'));

const Home = () => {
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
