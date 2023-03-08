import styled from 'styled-components/native';
import theme from '../../common/theme/Theme';

export const Bar = styled.View`
  width: 95%;
  margin-top: 24px;
  align-self: center;
  height: 38px;
  background-color: ${theme.colors.offgrey};
  border-radius: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  margin-bottom: 20px;
  box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.05);
  elevation: 2;
`;
export const TabsNotClicked = styled.TouchableOpacity`
  width: 33%;
  height: 30px;
  padding: 4px;
  align-items: center;
  border-radius: 100px;
  align-text: center;
`;
export const TabsClicked = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  width: 33%;
  height: 30px;
  padding: 4px;
  align-items: center;
  border-radius: 100px;
  align-text: center;
  box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.3);
  elevation: 2;
`;
export const ClickedText = styled.Text`
  font-weight: 700;
  font-size: 18px;
  line-height: 21.6px;
  color: ${theme.colors.black};
`;
export const NotClickedText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.6px;
  color: ${theme.colors.grey700};
`;
export const ComponentOne = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;
export const ComponentTwo = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const TabBarView = styled.View`
  background-color: ${theme.colors.primary.white};
`;
