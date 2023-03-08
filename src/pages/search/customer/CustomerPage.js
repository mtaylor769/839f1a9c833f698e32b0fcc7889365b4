import {
  Canada_States,
  Mexico_States,
  US_States,
  country,
  dummy,
} from '../../../utils/Constants';
import {
  CustomerSearchScrollView,
  Horizontal,
} from '../vtvAir/VTVAirCheckStyles';
import {
  formatNumber,
  isDisable,
  isValidEmail,
  isValidForm,
  isValidName,
  isValidPhone,
} from './CustomerController';

import DTButton from '../../../components//dtButton/index';
import DTListDropDown from '../../../components/dtListdropDown';
import LinkButton from '../../../components/linkButton';
import React from 'react';
import {SpacerV20} from '../../../common/theme/CommonStyles';
import Strings from '../../../utils/Strings';
import {TextInputField} from '../../../components/textInput/index';
import {View} from 'react-native';
import {useState} from 'react';

const CustomerSearchScreen = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    companyName: '',
    stateField: '',
    countryValue: '',
    fleetNumber: '',
    isAdvancedSearch: false,
    selectedStateValue: '',
  });

  const [formErrors, setFormErrors] = useState({
    isNameValid: false,
    isPhoneValid: false,
    isEmailValid: false,
  });

  const [selectedCountryValue, setSelectedCountryValue] =
    useState('United States');

  const validateFormData = () => {
    setFormErrors(prevData => ({
      ...prevData,
      isNameValid: isValidName(formData.lastName),
      isEmailValid: isValidEmail(formData.emailAddress),
      isPhoneValid: isValidPhone(formData.phoneNumber),
    }));
  };

  const validateField = (name, value) => {
    let errors = formErrors;
    switch (name) {
      case 'phoneNumber':
        errors = {...errors, isPhoneValid: isValidPhone(value)};
        break;
      case 'email':
        errors = {...errors, isEmailValid: isValidEmail(value)};
        break;
    }
    setFormErrors(errors);
  };

  const onChangeCountry = value => {
    setSelectedCountryValue(value);
    setFormData(prevData => ({
      ...prevData,
      selectedStateValue: '',
    }));
  };
  const onChangeState = value => {
    setFormData(prevData => ({
      ...prevData,
      selectedStateValue: value,
    }));
  };

  const onPhoneNumberChange = value => {
    setFormData(prevData => ({...prevData, phoneNumber: value}));
  };

  const onPhoneNumberBlurHandler = () => {
    const number = formatNumber(formData.phoneNumber);
    setFormData(prevData => ({...prevData, phoneNumber: number}));
    validateField('phoneNumber', number);
  };

  const onEmailChange = value => {
    setFormData(prevData => ({...prevData, emailAddress: value}));
  };

  const onFirstNameChange = value => {
    setFormData(prevData => ({...prevData, firstName: value}));
  };

  const onLastNameChange = value => {
    setFormData(prevData => ({...prevData, lastName: value}));
  };
  const onFleetNumberChange = value => {
    setFormData(prevData => ({...prevData, fleetNumber: value}));
  };

  const onCompanyNameChange = value => {
    setFormData(prevData => ({...prevData, companyName: value}));
  };

  const advanceSearchClickHandler = () => {
    setFormData(prevData => ({
      ...prevData,
      isAdvancedSearch: true,
    }));
  };

  return (
    <CustomerSearchScrollView>
      <Horizontal />
      <TextInputField
        label={Strings.phoneNumber}
        keyboardType="phone-pad"
        value={formData.phoneNumber}
        showField={true}
        onChange={onPhoneNumberChange}
        errormessage={Strings.errorPhoneNumber}
        showError={formErrors.isPhoneValid}
        isError={formErrors.isPhoneValid}
        onBlur={onPhoneNumberBlurHandler}
      />

      <TextInputField
        label={Strings.emailAddress}
        keyboardType="email-address"
        value={formData.emailAddress}
        showField={true}
        onChange={onEmailChange}
        onBlur={() => validateField('email', formData.emailAddress)}
        errormessage={Strings.errorEmail}
        showError={formErrors.isEmailValid}
        isError={formErrors.isEmailValid}
      />

      <TextInputField
        label={Strings.firstName}
        value={formData.firstName}
        keyboardType="name-phone-pad"
        showField={true}
        errormessage={Strings.errorName}
        showError={false}
        isError={formErrors.isNameValid}
        maxLength={Strings.textMaxLength}
        onChange={onFirstNameChange}
      />
      <TextInputField
        label={Strings.lastName}
        value={formData.lastName}
        keyboardType="name-phone-pad"
        showField={true}
        errormessage={Strings.errorName}
        showError={formErrors.isNameValid}
        isError={formErrors.isNameValid}
        maxLength={Strings.textMaxLength}
        onChange={onLastNameChange}
      />

      {formData.isAdvancedSearch ? (
        <View>
          <DTListDropDown
            dropDownLabel={'State'}
            dropDownData={
              selectedCountryValue === 'United States'
                ? US_States
                : selectedCountryValue === 'Canada'
                ? Canada_States
                : selectedCountryValue === 'Mexico'
                ? Mexico_States
                : dummy
            }
            onChange={onChangeState}
            value={formData.selectedStateValue}
          />

          <DTListDropDown
            dropDownLabel={'Country'}
            dropDownData={country}
            onChange={onChangeCountry}
            value={selectedCountryValue}
          />
        </View>
      ) : null}

      <TextInputField
        label={Strings.companyName}
        value={formData.companyName}
        showField={true}
        onChange={onCompanyNameChange}
      />

      <TextInputField
        label={Strings.fleet}
        value={formData.fleetNumber}
        showField={formData.isAdvancedSearch}
        keyboardType="numeric"
        maxLength={5}
        onChange={onFleetNumberChange}
      />

      <LinkButton
        label={Strings.advancedCustomerSearchButton}
        onPress={advanceSearchClickHandler}
        show={formData.isAdvancedSearch}
      />

      <DTButton
        label={Strings.searchCustomer}
        onPress={validateFormData}
        status={isValidForm(formData)}
        enableRedButton={false}
        disabled={isDisable(formData)}
      />

      <DTButton
        label={Strings.createNewCustomer}
        onPress={() => console.log('Button is Pressed')}
        status={'primaryDisabled'}
        enableRedButton={false}
        disabled={true}
      />
      <SpacerV20 />
    </CustomerSearchScrollView>
  );
};

export default CustomerSearchScreen;
