import {LinkButton, LinkButtonText} from './styles';

import React from 'react';

export const LinkButtonView = _props => {
  const {label, onPress, show} = _props;
  return !show ? (
    <LinkButton onPress={onPress}>
      <LinkButtonText>{label}</LinkButtonText>
    </LinkButton>
  ) : null;
};

export default LinkButtonView;
