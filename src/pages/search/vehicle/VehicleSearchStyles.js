import styled from 'styled-components/native';
import theme from '../../../common/theme/Theme';

export const Click = styled.TouchableOpacity`
  flex-direction: row;
  display: flex;
  margin-top: 15px;
`;
export const Wrapper = styled.View`
  flex-direction: row;
  display: flex;
  margin-top: 15px;
  justify-content: space-around;
  margin-right: 8px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const Container = styled.ScrollView`
  background-color: ${theme.colors.white};
`;

export const Divider = styled.View`
  height: ${props => props.height}px
  width: ${props => props.width}px
  background-color: ${theme.colors.offgrey};
  margin-top: ${props => (props.pos === 'bottom' ? 25 : 8)}px;
  margin-left: ${props =>
    props.pos === 'top' || props.pos === 'bottom' ? 15 : 0}px
    margin-bottom: ${props => (props.pos === 'bottom' ? 15 : 0)}px;
`;

export const Label = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 800;
  font-size: 20.25px;
  line-height: 24px;
  color: ${theme.colors.secondaryBlue};
  margin-left: 10px;
`;
