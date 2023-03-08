import {ButtonStatus} from './ButtonStatus';
import styled from 'styled-components/native';
import theme from '../../common/theme/Theme';
export const DTButton = styled.TouchableOpacity`
  height: 56px;
  background-color: ${props =>
    props.enableRedButton
      ? props.status === ButtonStatus.primaryEnabled
        ? theme.colors.greyButton
        : theme.colors.redButton
      : props.status === ButtonStatus.primaryDisabled ||
        props.status === ButtonStatus.primaryEnabled
      ? theme.colors.greyButton
      : theme.colors.green};
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 16px;
  margin-right: 16px;
  border-width: ${props => (props.border ? 2 : 0)}px
  border-color: ${props => (props.border ? theme.colors.grey700 : null)}
`;

export const Label = styled.Text`
  text-align: center;
  color: ${props =>
    props.enableRedButton
      ? props.status === ButtonStatus.primaryEnabled
        ? theme.colors.primaryBlack
        : theme.colors.white
      : props.status === ButtonStatus.primaryDisabled ||
        props.status === ButtonStatus.primaryEnabled
      ? props.disabled
        ? theme.colors.disabledButtonLabel
        : theme.colors.primaryBlack
      : theme.colors.white};
  font-weight: 800;
  font-size: 20.25px;
  line-height: 24px;
  display: flex;
  align-items: center;
  font-family: 'Lato';
  font-style: normal;
`;

export const ImageView = styled.View`
  margin-top: 2px;
  margin-right: 6px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
`;
