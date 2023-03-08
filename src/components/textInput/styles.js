import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';
import theme from '../../common/theme/Theme';

export const MaterialTextInput = styled(TextInput)`
  margin-top: -7px;
  margin-left: 0px;
  margin-bottom: 0px;
  margin-right: 0px;
`;

export const TextInputErrorField = styled.Text`
  color: ${theme.colors.black};
  height: 32px;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const ErrorView = styled.View`
  background-color: ${theme.colors.secondary.gold_500};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  border-radius: 4px;
`;
export const TextInputWrapperComponent = styled.View`
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 4px;
  flex: 1;
  background-color: ${theme.colors.secondary.gold_500};
`;
