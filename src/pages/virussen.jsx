import React from 'react';
import Card from '../components/ExplainSection';
import { ExplObjVirussen } from '../components/ExplainSection/Data';

const Virussen = () => {
  return (
    <>
      <Card {...ExplObjVirussen} />
    </>
  );
};

export default Virussen;
