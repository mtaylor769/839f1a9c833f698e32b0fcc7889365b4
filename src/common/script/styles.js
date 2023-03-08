import Theme from '../theme/Theme';
import styled from 'styled-components/native';

const textWeight = {
  medium: 500,
  heavy: 800,
  black: 900,
};

const textFonts = {
  h1: {
    fontSize: '32.44px',
    lineHeight: '40px',
  },
  h2: {
    fontSize: '28.83px',
    lineHeight: '32px',
  },
  h3: {
    fontSize: '25.63px',
    lineHeight: '32px',
  },
  h4: {
    fontSize: '22.78px',
    lineHeight: '32px',
  },
  h5: {
    fontSize: '20.25px',
    lineHeight: '24px',
  },
  h6: {
    fontSize: '18px',
    lineHeight: '24px',
  },
  paraRegular: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  paraSmall: {
    fontSize: '14.22px',
    lineHeight: '16px',
  },
  paraExSmall: {
    fontSize: '12.64px',
    lineHeight: '16px',
  },
};

const textStyles = {
  fontFamily: 'Lato',
  fontStyle: 'normal',
  color: Theme.colors.primary.black,
};

/**
 *There are total 27 different types of text components

 *font-family, font-style and color('Lato', 'normal' and '#121213')
  is same accorss all the components.
  *for all medium(H1Medium, H2Medium, ..... ParagraphExtraSmalMedium)
   components have styled with font-weight: 500
  *for all heavy(H1Heavy, H2Heavy, ..... ParagraphExtraSmalHeavy)
   components have styled with font-weight: 800
  *for all black(H1Black, H2Black, ..... ParagraphExtraSmalBlack)
   components have styled with font-weight: 900
 */

/*for all H1 components have styles with the same font-size,
   line-height, fontSize '32.44px','40px'*/
export const H1Medium = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.medium};
  font-size: ${textFonts.h1.fontSize};
  line-height: ${textFonts.h1.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H1Heavy = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.heavy};
  font-size: ${textFonts.h1.fontSize};
  line-height: ${textFonts.h1.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H1Black = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.black};
  font-size: ${textFonts.h1.fontSize};
  line-height: ${textFonts.h1.lineHeight};
  color: ${Theme.colors.primary.black};
`;

/*for all H2 components have styles with the same font-size,
   line-height, fontSize '28.83px','32px'*/
export const H2Medium = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.medium};
  font-size: ${textFonts.h2.fontSize};
  line-height: ${textFonts.h2.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H2Heavy = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.heavy};
  font-size: ${textFonts.h2.fontSize};
  line-height: ${textFonts.h2.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H2Black = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.black};
  font-size: ${textFonts.h2.fontSize};
  line-height: ${textFonts.h2.lineHeight};
  color: ${Theme.colors.primary.black};
`;

/*for all H3 components have styles with the same font-size,
   line-height, fontSize '25.63px','32px'*/
export const H3Medium = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.medium};
  font-size: ${textFonts.h3.fontSize};
  line-height: ${textFonts.h3.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H3Heavy = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.heavy};
  font-size: ${textFonts.h3.fontSize};
  line-height: ${textFonts.h3.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H3Black = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.black};
  font-size: ${textFonts.h3.fontSize};
  line-height: ${textFonts.h3.lineHeight};
  color: ${Theme.colors.primary.black};
`;

/*for all H4 components have styles with the same font-size,
   line-height, fontSize '22.78px','32px'*/
export const H4Medium = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.medium};
  font-size: ${textFonts.h4.fontSize};
  line-height: ${textFonts.h4.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H4Heavy = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.heavy};
  font-size: ${textFonts.h4.fontSize};
  line-height: ${textFonts.h4.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H4Black = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.black};
  font-size: ${textFonts.h4.fontSize};
  line-height: ${textFonts.h4.lineHeight};
  color: ${Theme.colors.primary.black};
`;

/*for all H5 components have styles with the same font-size,
   line-height, fontSize '20.25px','24px'*/
export const H5Medium = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.medium};
  font-size: ${textFonts.h5.fontSize};
  line-height: ${textFonts.h5.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H5Heavy = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.heavy};
  font-size: ${textFonts.h5.fontSize};
  line-height: ${textFonts.h5.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H5Black = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.black};
  font-size: ${textFonts.h5.fontSize};
  line-height: ${textFonts.h5.lineHeight};
  color: ${Theme.colors.primary.black};
`;

/*for all H6 components have styles with the same font-size,
   line-height, fontSize '18px','24px'*/
export const H6Medium = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.medium};
  font-size: ${textFonts.h6.fontSize};
  line-height: ${textFonts.h6.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H6Heavy = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.heavy};
  font-size: ${textFonts.h6.fontSize};
  line-height: ${textFonts.h6.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const H6Black = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.black};
  font-size: ${textFonts.h6.fontSize};
  line-height: ${textFonts.h6.lineHeight};
  color: ${Theme.colors.primary.black};
`;

/*for all ParagraphRegular components have styles with the same font-size,
   line-height, fontSize '16px','24px'*/
export const ParagraphRegularMedium = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.medium};
  font-size: ${textFonts.paraRegular.fontSize};
  line-height: ${textFonts.paraRegular.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const ParagraphRegularHeavy = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.heavy};
  font-size: ${textFonts.paraRegular.fontSize};
  line-height: ${textFonts.paraRegular.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const ParagraphRegularBlack = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.black};
  font-size: ${textFonts.paraRegular.fontSize};
  line-height: ${textFonts.paraRegular.lineHeight};
  color: ${Theme.colors.primary.black};
`;

/*for all ParagraphSmall components have styles with the same font-size,
   line-height, fontSize '14.22px','16px'*/
export const ParagraphSmalMedium = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.medium};
  font-size: ${textFonts.paraSmall.fontSize};
  line-height: ${textFonts.paraSmall.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const ParagraphSmalHeavy = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.heavy};
  font-size: ${textFonts.paraSmall.fontSize};
  line-height: ${textFonts.paraSmall.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const ParagraphSmalBlack = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.black};
  font-size: ${textFonts.paraSmall.fontSize};
  line-height: ${textFonts.paraSmall.lineHeight};
  color: ${Theme.colors.primary.black};
`;

/*for all ParagraphMedium components have styles with the same font-size,
   line-height, fontSize '12.64px','16px'*/
export const ParagraphExtraSmalMedium = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.medium};
  font-size: ${textFonts.paraExSmall.fontSize};
  line-height: ${textFonts.paraExSmall.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const ParagraphExtraSmalHeavy = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.heavy};
  font-size: ${textFonts.paraExSmall.fontSize};
  line-height: ${textFonts.paraExSmall.lineHeight};
  color: ${Theme.colors.primary.black};
`;
export const ParagraphExtraSmalBlack = styled.Text`
  font-family: ${textStyles.fontFamily};
  font-style: ${textStyles.fontStyle};
  font-weight: ${textWeight.black};
  font-size: ${textFonts.paraExSmall.fontSize};
  line-height: ${textFonts.paraExSmall.lineHeight};
  color: ${Theme.colors.primary.black};
`;
