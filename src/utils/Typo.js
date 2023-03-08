import {
  H1Black,
  H1Heavy,
  H1Medium,
  H2Black,
  H2Heavy,
  H2Medium,
  H3Black,
  H3Heavy,
  H3Medium,
  H4Black,
  H4Heavy,
  H4Medium,
  H5Black,
  H5Heavy,
  H5Medium,
  H6Black,
  H6Heavy,
  H6Medium,
  ParagraphExtraSmalBlack,
  ParagraphExtraSmalHeavy,
  ParagraphExtraSmalMedium,
  ParagraphRegularBlack,
  ParagraphRegularHeavy,
  ParagraphRegularMedium,
  ParagraphSmalBlack,
  ParagraphSmalHeavy,
  ParagraphSmalMedium,
} from '../common/script/styles';
import {ScrollView, Text} from 'react-native';

import Icon from '../components/icons';
import IconUris from './IconUris';
import React from 'react';
import {ScreenContainer} from '../common/theme/CommonStyles';

const Typo = () => {
  return (
    <ScreenContainer>
      <H1Black>VSS-66</H1Black>
      <ScrollView>
        <H1Medium>Attempt attach child</H1Medium>
        <H1Heavy>Attempt attach child</H1Heavy>
        <H1Black>Attempt attach child</H1Black>

        <H2Medium>Attempt attach child</H2Medium>
        <H2Heavy>Attempt attach child</H2Heavy>
        <H2Black>Attempt attach child</H2Black>

        <H3Medium>Attempt attach child</H3Medium>
        <H3Heavy>Attempt attach child</H3Heavy>
        <H3Black>Attempt attach child</H3Black>

        <H4Medium>Attempt attach child</H4Medium>
        <H4Heavy>Attempt attach child</H4Heavy>
        <H4Black>Attempt attach child</H4Black>

        <H5Medium>Attempt attach child</H5Medium>
        <H5Heavy>Attempt attach child</H5Heavy>
        <H5Black>Attempt attach child</H5Black>

        <H6Medium>Attempt attach child</H6Medium>
        <H6Heavy>Attempt attach child</H6Heavy>
        <H6Black>Attempt attach child</H6Black>

        <ParagraphRegularMedium>Attempt attach child</ParagraphRegularMedium>
        <ParagraphRegularHeavy>Attempt attach child</ParagraphRegularHeavy>
        <ParagraphRegularBlack>Attempt attach child</ParagraphRegularBlack>

        <ParagraphSmalMedium>Attempt attach child</ParagraphSmalMedium>
        <ParagraphSmalHeavy>Attempt attach child</ParagraphSmalHeavy>
        <ParagraphSmalBlack>Attempt attach child</ParagraphSmalBlack>

        <ParagraphExtraSmalMedium>
          Attempt attach child
        </ParagraphExtraSmalMedium>
        <ParagraphExtraSmalHeavy>Attempt attach child</ParagraphExtraSmalHeavy>
        <ParagraphExtraSmalBlack>Attempt attach child</ParagraphExtraSmalBlack>
        <Text>{'\n'}</Text>
        <Icon width="40px" height="32px" source={IconUris.carBuilding} />
        <Text>{'\n'}</Text>
        <Icon width="24px" height="24.06px" source={IconUris.close} />
        <Text>{'\n'}</Text>
        <Icon width="16px" height="16px" source={IconUris.search} />
        <Text>{'\n'}</Text>
        <Icon width="14px" height="14px" source={IconUris.userCircle} />
        <Text>{'\n'}</Text>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Typo;
