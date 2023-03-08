import {
  formatPhoneNumber,
  validateEmail,
  validatePhoneNumber,
} from '../../../utils/Utils';

export const isValidForm = props => {
  if (
    (props.lastName.length ||
      props.emailAddress.length ||
      props.phoneNumber.length ||
      props.companyName.length ||
      props.selectedStateValue.length) === 0
  ) {
    return 'primaryDisabled';
  }
  return 'success';
};

export const isDisable = props => {
  return isValidForm(props) === 'primaryDisabled' ? true : false;
};

export const isValidName = lastName => {
  return lastName.length !== 0 ? false : true;
};

export const isValidEmail = emailAddress => {
  return emailAddress.length !== 0 ? validateEmail(emailAddress) : false;
};
export const isValidPhone = phoneNumber => {
  return phoneNumber.length !== 0 ? validatePhoneNumber(phoneNumber) : false;
};

export const formatNumber = phoneNumber => {
  return formatPhoneNumber(phoneNumber);
};
