import styled from 'styled-components/native';
import theme from '../../common/theme/Theme';
export const LineView = styled.View`
  width: 92%;
  height: 2px;
  background-color: ${theme.colors.secondary.gold_500};
  margin-left: 15px;
`;

export const ServerMessage = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  font-size: 14.22px;
  line-height: 16px;
  color: ${theme.colors.primaryBlack};
`;

export const ImageView = styled.View`
  margin-left: 5px;
  margin-right: 10px;
`;

export const InnerView = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const OuterView = styled.View`
  margin-top: 25px;
`;
