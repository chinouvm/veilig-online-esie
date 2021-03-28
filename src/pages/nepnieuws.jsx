import React from 'react';
import Card from '../components/ExplainSection';
import { ExplObjNepnieuws } from '../components/ExplainSection/Data';

const Nepnieuws = () => {
  return (
    <>
      <Card {...ExplObjNepnieuws} />
    </>
  );
};

export default Nepnieuws;
