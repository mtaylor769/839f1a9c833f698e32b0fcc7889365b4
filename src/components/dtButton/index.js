import {DTButton, ImageView, Label, Wrapper} from './styles';

import {ButtonStatus} from './ButtonStatus';
import Icon from '../icons';
import IconUris from '../../utils/IconUris';
import React from 'react';

export const DTButtonView = _props => {
  const {label, onPress, status, enableRedButton, disabled, border} = _props;
  return (
    <DTButton
      onPress={onPress}
      status={status}
      enableRedButton={enableRedButton}
      disabled={disabled}
      border={border}>
      <Wrapper>
        {status === ButtonStatus.primaryEnabled &&
        !enableRedButton &&
        !disabled ? (
          <ImageView>
            <Icon width={'18px'} height={'18px'} source={IconUris.plusSign} />
          </ImageView>
        ) : null}
        <Label
          status={status}
          enableRedButton={enableRedButton}
          disabled={disabled}>
          {label}
        </Label>
      </Wrapper>
    </DTButton>
  );
};

export default DTButtonView;
