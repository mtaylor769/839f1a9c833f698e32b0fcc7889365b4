import styled from 'styled-components/native';
import theme from '../../common/theme/Theme';

// interface Props {
//   btnLabel?: string;
// }

export const ScrollView = styled.ScrollView`
  background-color: ${theme.colors.scanVinBackGround};
  height: 100%;
  margin-top: 0px;
`;
export const Container = styled.View`
  display: flex;
  align-items: center;
`;

export const Close = styled.TouchableOpacity`
  top: 15px;
  right: -150px;
`;

export const MainLabel = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  font-size: 23px;
  line-height: 55px;
  letter-spacing: -0.0766667px;
  color: ${theme.colors.white};
  margin-top: 30px;
`;

export const VinNumberImage = styled.Image`
  width: 100%;
  height: 180px;
  margin-top: 2px;
  margin-bottom: 30px;
`;

export const InnerView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
export const SuccessOval = styled.View`
  height: 40px;
  width: 40px;
  background-color: ${theme.colors.scanVinGreenOval};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;
export const ResultLabel = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 42px;
  color: ${theme.colors.white};
`;

export const Divider = styled.View`
  height: 1px;
  width: 250px;
  background-color: ${theme.colors.scanVinLineDivider};
  margin-top: 5px;
`;

export const VinNumber = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 1px;
  color: ${theme.colors.white};
  margin-top: 5px;
`;

export const VehicleInfo = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 26px;
  letter-spacing: -0.0366667px;
  margin-top: 25px;
  color: ${theme.colors.white};
`;

export const Info1 = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 25px;
  color: ${theme.colors.white};
  letter-spacing: -0.0583333px;
`;
export const Info2 = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${theme.colors.white};
`;

export const ButtonView = styled.View`
  flex-direction: row;
  display: flex;
  margin-bottom: 40px;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props =>
    props.btnLabel !== 'RESCAN'
      ? theme.colors.scanVinBlueButton
      : theme.colors.scanVinGreyButton}
  height: 41px;
  width: 100px;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.0433917px;
  color: ${theme.colors.white};
`;

export const Error = styled.Image`
  width: 30px;
  height: 30px;
`;

export const TryAgainLabel = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.05px;
  color: ${theme.colors.scanVinLineDivider};
  margin-top: 15px;
`;

export const TryAgainButton = styled.TouchableOpacity`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 260px;
`;
export const TryAgainButtonText = styled.Text`
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.05000000074505806px;
  text-align: left;
  color: ${theme.colors.white};
  margin-left: 15px;
`;
