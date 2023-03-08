import {
  ErrorView,
  MaterialTextInput,
  TextInputErrorField,
  TextInputWrapperComponent,
} from './styles';

import ICONS_URI from '../../utils/IconUris';
import Icon from '../icons';
import React from 'react';
import theme from '../../common/theme/Theme';

export const TextInputField = _props => {
  const {
    label,
    keyboardType,
    variant,
    value,
    onChange,
    onBlur,
    showError,
    errormessage,
    maxLength,
    showField,
    isError,
  } = _props;
  const goldColor = theme.colors.secondary.gold_500;
  const greyColor = theme.colors.neutral.grey_600;
  const blackColor = theme.colors.black;

  const inputColor = isError ? goldColor : greyColor;
  return showField ? (
    <TextInputWrapperComponent>
      <MaterialTextInput
        label={label}
        keyboardType={keyboardType || 'default'}
        mode={variant || 'outlined'}
        outlineColor={inputColor}
        activeOutlineColor={inputColor}
        value={value || ''}
        onChangeText={onChange}
        maxLength={maxLength}
        onBlur={onBlur}
        textColor={blackColor}
        style={{fontWeight: 'bold', backgroundColor: '#fff'}}
      />
      {showError ? (
        <ErrorView>
          <Icon width="15.8px" source={ICONS_URI.warning} />
          <TextInputErrorField>{errormessage}</TextInputErrorField>
        </ErrorView>
      ) : null}
    </TextInputWrapperComponent>
  ) : null;
};

export default TextInputField;
