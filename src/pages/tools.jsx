import React from 'react';
import Checker from '../components/Tools/PasswordCheck';
import PasswordGenerator from '../components/Tools/PasswordGen';
import Pwnd from '../components/Tools/Pwnd';

const Tools = () => {
  return (
    <>
      <PasswordGenerator />
      <Checker />
      <Pwnd />
    </>
  );
};

export default Tools;
