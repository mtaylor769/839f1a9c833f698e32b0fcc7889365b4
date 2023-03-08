// import {StatusBar} from 'react-native';

import styled from 'styled-components/native';
import theme from '../../common/theme/Theme';

export const ButtonBox = styled.TouchableOpacity`
  width: 90%;
  align-self: center;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-width: 1px;
  border-radius: 5px;
  margin-top: 16px;
  border-color: ${theme.colors.darkGray};
`;
export const ButtonBoxFocus = styled.TouchableOpacity`
  width: 90%;
  align-self: center;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-width: 1px;
  border-radius: 5px;
  margin-top: 10px;
  border-color: ${theme.colors.secondary.gold_500};
`;
export const ModalView = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.black};
  opacity: 0.8;
  justify-content: flex-end;
`;
export const ModalVisbleView = styled.View`
  width: 100%;
  height: 50%;
  opacity: 1;
  background-color: ${theme.colors.white};
  border-width: 1px;
  border-color: ${theme.colors.secondaryBlue};
`;
export const Placeholder = styled.View`
  width: 100%;
  border-bottom-color: ${theme.colors.grey700};
  border-bottom-width: 1px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 7px;
  height: 40px;
`;

export const ListView = styled.ScrollView`
  width: 90%;
  align-self: center;
  position: relative;
  top: 0;
`;

export const List = styled.TouchableOpacity`
  width: 100%;
  border-color: ${theme.colors.grey700};
  border-width: 1px;
  align-items: center;
  border-top-width: 0px;
  flex-direction: row;
  padding: 7px;
  height: 56px;
`;
export const Label = styled.Text`
  position: absolute;
  background-color: ${theme.colors.white};
  left: 10px;
  top: -10px;
  padding-horizontal: 8px;
  font-size: 14px;
  color: ${theme.colors.black};
`;
//  zindex: 999px;

export const ListText = styled.Text`
  color: ${theme.colors.grey700};
  text-align: center;
  font-size: 16px;
`;
