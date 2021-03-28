import React from 'react';
import zxcvbn from 'zxcvbn';
import {
  ContainerCheck,
  ProgressText,
  P,
  Progress,
  ProgressBar,
} from './CheckerElements';

const CheckerMeter = ({ passwordCheck }) => {
  const testResult = zxcvbn(passwordCheck);
  const num = (testResult.score * 100) / 4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return 'Zeer zwak';
      case 1:
        return 'Zwak';
      case 2:
        return 'Matig';
      case 3:
        return 'Goed';
      case 4:
        return 'Sterk';
      default:
        return '';
    }
  };

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '7px',
  });

  return (
    <>
      <ContainerCheck>
        <ProgressText>
          <P style={{ color: funcProgressColor() }}>{createPassLabel()}</P>
        </ProgressText>
      </ContainerCheck>
      <Progress style={{ height: '7px' }}>
        <ProgressBar style={changePasswordColor()}></ProgressBar>
      </Progress>
    </>
  );
};

export default CheckerMeter;
