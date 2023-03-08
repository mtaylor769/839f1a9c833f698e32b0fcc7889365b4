const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^\(\d{3}\)\s\d{3}-\d{4}/;
const NAME_REGEX = /^[a-zA-Z]+ [a-zA-Z]+$/;
const VIN_ALPHANUMERIC_REGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

export const validateEmailExpression = email => {
  const regex = EMAIL_REGEX;
  if (regex.test(email)) {
    validateEmail(email);
  }
  return true;
};

export const validateEmail = email => {
  var atSign = email.indexOf('@');
  var dotSign = email.indexOf('.com');
  return atSign < 1 || dotSign < atSign + 2 || dotSign + 2 >= email.length
    ? true
    : false;
};

export const validatePhoneNumber = phoneNumber => {
  const regex = PHONE_REGEX;
  return regex.test(phoneNumber) ? false : true;
};

export const formatPhoneNumber = phoneNumber => {
  var cleaned = ('' + phoneNumber).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  return match
    ? '(' + match[1] + ') ' + match[2] + '-' + match[3]
    : phoneNumber;
};

export const validateName = name => {
  const regex = NAME_REGEX;
  return regex.test(name);
};

export const validateAlphaNumericVIN = vin => {
  const regex = VIN_ALPHANUMERIC_REGEX;
  if (vin.match(regex)) {
    return false;
  }
  return true;
};
