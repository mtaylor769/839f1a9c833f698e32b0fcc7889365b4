import {
  Button,
  ButtonLabel,
  ButtonView,
  Close,
  Container,
  Divider,
  Error,
  Info1,
  Info2,
  InnerView,
  MainLabel,
  ResultLabel,
  ScrollView,
  SuccessOval,
  TryAgainButton,
  TryAgainButtonText,
  TryAgainLabel,
  VehicleInfo,
  VinNumber,
  VinNumberImage,
} from './ScanVinStyles';
import React, {useState} from 'react';

import Icon from '../../components/icons';
import IconUris from '../../utils/IconUris';
import {Modal} from 'react-native';
import Strings from '../../utils/Strings';

let happy = true; // if value of happy is false, the screen with unhappy path will get rendered

export const ScanVinPage = _props => {
  const {showModal, setShowModal} = _props;
  const [scan, setScan] = useState(false);
  const [buttonLabel, setButtonLabel] = useState(Strings.scan);
  const showView = () => {
    return (
      <InnerView>
        <SuccessOval>
          <Icon height={'20px'} width={'30px'} source={IconUris.tick} />
        </SuccessOval>
        <ResultLabel>{Strings.vinScanResult}</ResultLabel>
        <Divider />
        <VinNumber>{Strings.vinNoStatic}</VinNumber>
        <VehicleInfo>{Strings.vehicleInformation}</VehicleInfo>
        <Info1>{Strings.scanVinInfo1}</Info1>
        <Info2>{Strings.scanVinInfo2}</Info2>
      </InnerView>
    );
  };
  const showUnhappyView = () => {
    return (
      <InnerView>
        <Error source={IconUris.error} />
        <ResultLabel>{Strings.scanError}</ResultLabel>
        <Divider />
        <TryAgainLabel>{Strings.tryAgainVin}</TryAgainLabel>
        <TryAgainButton>
          <Icon width={'35px'} height={'35px'} source={IconUris.scanWhite} />
          <TryAgainButtonText>{Strings.scanAgain}</TryAgainButtonText>
        </TryAgainButton>
        <TryAgainButton>
          <Icon width={'35px'} height={'35px'} source={IconUris.magnify} />
          <TryAgainButtonText>{Strings.typeVinManually}</TryAgainButtonText>
        </TryAgainButton>
      </InnerView>
    );
  };
  const onScanPress = () => {
    setTimeout(() => {
      setScan(true);
      setButtonLabel(Strings.reScan);
    }, 2000);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <ScrollView>
        <Container>
          <Close onPress={() => setShowModal(false)}>
            <Icon width={'15px'} height={'15px'} source={IconUris.closeModal} />
          </Close>

          <MainLabel>{Strings.scanVin}</MainLabel>
          {happy ? (
            <VinNumberImage source={IconUris.staticVinNo} />
          ) : (
            <VinNumberImage source={IconUris.hazyVinNo} />
          )}
          {happy ? (scan ? showView() : null) : showUnhappyView()}
          {happy ? (
            <ButtonView>
              <Button onPress={() => onScanPress()} btnLabel={buttonLabel}>
                <ButtonLabel>{buttonLabel}</ButtonLabel>
              </Button>
              <Button onPress={() => setShowModal(false)}>
                <ButtonLabel>{Strings.done}</ButtonLabel>
              </Button>
            </ButtonView>
          ) : null}
        </Container>
      </ScrollView>
    </Modal>
  );
};

export default ScanVinPage;
