import styled from 'styled-components/native';
import theme from '../../common/theme/Theme';
export const LinkButton = styled.TouchableOpacity`
  height: 56px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 10px;
`;

export const LinkButtonText = styled.Text`
  text-align: center;
  font-weight: 800;
  font-size: 20.25px;
  line-height: 24px;
  text-align: center;
  font-family: 'Lato';
  font-style: normal;
  color: ${theme.colors.secondaryBlue};
`;

//hover && textDecorationLine: "underline";
