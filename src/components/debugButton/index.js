import {ButtonBox, ButtonLabel} from './styles';

import React from 'react';

export const DebugButton = _props => {
  const {label, onPress} = _props;
  return (
    <ButtonBox onPress={onPress}>
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonBox>
  );
};

export default DebugButton;
