import styled from 'styled-components/native';
import theme from './Theme';

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.lightGray};
  align-items: center;
`;

export const SpacerV20 = styled.View`
  width: 100%;
  height: 20px;
`;
export const BoldText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.black};
`;
export const CommonView = styled.View`
  flex: 1;
`;
