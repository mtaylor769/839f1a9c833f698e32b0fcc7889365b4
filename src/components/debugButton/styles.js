import styled from 'styled-components/native';
import theme from '../../common/theme/Theme';

export const ButtonBox = styled.TouchableOpacity`
  width: 90%;
  background-color: ${theme.colors.yellow};
  border-width: 1px;
  border-color: ${theme.colors.borderColor};
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
export const ButtonLabel = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${theme.colors.black};
  font-weight: bold;
`;
