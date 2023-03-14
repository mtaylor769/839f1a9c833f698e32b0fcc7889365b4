import {
  Canada_States,
  Mexico_States,
  US_States,
  country,
  dummy,
} from '../../../utils/Constants';
import {Click, Container, Divider, Label, Wrapper} from './VehicleSearchStyles';
import {KeyboardAvoidingView, Platform} from 'react-native';
import React, {useState} from 'react';

import {ButtonStatus} from '../../../components/dtButton/ButtonStatus';
import DTButton from '../../../components/dtButton/index';
import DTListDropDown from '../../../components/dtListdropDown';
import ICONS_URI from '../../../utils/IconUris';
import Icon from '../../../components/icons/index';
import ScanVin from '../../scanvin/ScanVinPage';
import ServerErrorView from '../../../components/serverErrorview/index';
import {SpacerV20} from '../../../common/theme/CommonStyles';
import Strings from '../../../utils/Strings';
import {TextInputField} from '../../../components/textInput/index';
import {validateAlphaNumericVIN} from '../../../utils/Utils';

const VehicleSearchScreen = ({}) => {
  const [state, setState] = useState({
    vin: '',
    license: '',
    vinButtonStatus: ButtonStatus.primaryDisabled,
    vinButtonDisabled: true,
    showError: false,
    serverError: false,
    selectedCountryValue: 'United States',
    selectedStateValue: '',
    selectedLicenseValue: '',
    showModal: false,
  });
  const settingVin = t => {
    let upperCase = t.toUpperCase();
    setState(prevState => {
      return {
        ...prevState,
        vin: upperCase,
      };
    });
    if (t.length === 17) {
      setState(prevState => {
        return {
          ...prevState,
          vinButtonStatus: ButtonStatus.success,
          vinButtonDisabled: false,
        };
      });
    } else {
      setState(prevState => {
        return {
          ...prevState,
          vinButtonStatus: ButtonStatus.primaryDisabled,
          vinButtonDisabled: true,
        };
      });
    }
  };
  const settingLicense = t => {
    setState(prevState => {
      return {
        ...prevState,
        license: t,
      };
    });
    if (t.length === 10) {
      setState(prevState => {
        return {
          ...prevState,
          selectedLicenseValue: t,
        };
      });
    } else {
      setState(prevState => {
        return {
          ...prevState,
          selectedLicenseValue: '',
        };
      });
    }
  };
  const checkAlphaNumeric = () => {
    if (validateAlphaNumericVIN(state.vin) || state.vin.length !== 17) {
      setState(prevState => {
        return {
          ...prevState,
          showError: true,
        };
      });
    } else {
      setState(prevState => {
        return {
          ...prevState,
          showError: false,
        };
      });
    }
  };
  const searchVin = () => {
    checkAlphaNumeric();
    // if there is a server eror we need to set serverError as true
    setState(prevState => {
      return {
        ...prevState,
        serverError: false,
      };
    });
  };
  const onBlurCall = () => {
    setState(prevState => {
      return {
        ...prevState,
        showError: false,
        serverError: false,
      };
    });
  };

  const onChangeCountry = value => {
    setState(prevState => {
      return {
        ...prevState,
        selectedCountryValue: value,
        selectedStateValue: '',
      };
    });
  };

  const changeModal = value => {
    setState(prevState => {
      return {
        ...prevState,
        showModal: value,
      };
    });
  };
  const onChangeState = value => {
    setState(prevState => {
      return {
        ...prevState,
        selectedStateValue: value,
      };
    });
  };

  return !state.showModal ? (
    <>
      <KeyboardAvoidingView>
        <Container>
          <Divider height={1} width={328} pos={'top'} />

          {state.serverError ? (
            <ServerErrorView errorMessage={Strings.noCustomerFoundError} />
          ) : null}
          <Wrapper>
            <Click
              onPress={() => {
                setState(prevState => {
                  return {
                    ...prevState,
                    showModal: true,
                  };
                });
              }}>
              <Icon height={'32px'} width={'32px'} source={ICONS_URI.scanVin} />
              <Label>{Strings.scanVin}</Label>
            </Click>
            <Divider height={43} width={1} pos={'center'} />
            <Click>
              <Icon height={'32px'} width={'32px'} source={ICONS_URI.scanQR} />
              <Label>{Strings.scanQR}</Label>
            </Click>
          </Wrapper>
          <TextInputField
            maxLength={17}
            label={Strings.vin}
            value={state.vin}
            onChange={t => settingVin(t)}
            keyboardType={
              Platform.OS === 'ios' ? 'default' : 'visible-password'
            }
            errormessage={Strings.errorVin}
            showError={state.showError}
            onBlur={onBlurCall}
            showField={true}
          />
          <DTButton
            label={Strings.searchByVin}
            onPress={searchVin}
            status={state.vinButtonStatus}
            enableRedButton={false}
            disabled={state.vinButtonDisabled}
          />
          <Divider height={1} width={328} pos={'bottom'} />

          <TextInputField
            label={Strings.licensePlateNo}
            value={state.license}
            onChange={t => settingLicense(t)}
            maxLength={10}
            showField={true}
          />

          <DTListDropDown
            dropDownLabel={Strings.state}
            dropDownData={
              state.selectedCountryValue === 'United States'
                ? US_States
                : state.selectedCountryValue === 'Canada'
                ? Canada_States
                : state.selectedCountryValue === 'Mexico'
                ? Mexico_States
                : dummy
            }
            onChange={onChangeState}
            value={state.selectedStateValue}
          />

          <DTListDropDown
            dropDownLabel={Strings.country}
            dropDownData={country}
            onChange={onChangeCountry}
            value={state.selectedCountryValue}
          />

          <DTButton
            label={Strings.searchByLicensePlateNo}
            onPress={() => {}}
            status={
              state.selectedCountryValue &&
              state.selectedStateValue &&
              state.selectedLicenseValue
                ? ButtonStatus.success
                : ButtonStatus.primaryDisabled
            }
            enableRedButton={false}
            disabled={
              state.selectedCountryValue &&
              state.selectedStateValue &&
              state.selectedLicenseValue
                ? false
                : true
            }
          />
          <SpacerV20 />
        </Container>
      </KeyboardAvoidingView>
    </>
  ) : (
    <ScanVin showModal={state.showModal} setShowModal={changeModal} />
  );
};

export default VehicleSearchScreen;
