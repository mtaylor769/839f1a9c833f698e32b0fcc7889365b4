import {CustomerSearchScrollView} from '../search/vtvAir/VTVAirCheckStyles';
import React from 'react';
import {SpacerV20} from '../../common/theme/CommonStyles';
import {TextInputField} from '../../components/textInput/index';
import {useState} from 'react';

const TextInputPage = () => {
  const [text, setText] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    fleetNumber: '',
  });

  return (
    <CustomerSearchScrollView>
      <TextInputField
        label="Phone Number"
        keyboardType="phone-pad"
        showField={true}
        value={text.phoneNumber}
        onChange={t =>
          setText(prevState => {
            return {
              ...prevState,
              phoneNumber: t,
            };
          })
        }
      />

      <TextInputField
        label="First Name"
        value={text.firstName}
        showField={true}
        errormessage="This field is required"
        showError={true}
        isError={true}
        onChange={t => {
          setText(prevState => {
            return {
              ...prevState,
              firstName: t,
            };
          });
        }}
      />
      <TextInputField
        label="Last Name"
        value={text.lastName}
        showField={true}
        onChange={t =>
          setText(prevState => {
            return {
              ...prevState,
              lastName: t,
            };
          })
        }
      />

      <TextInputField
        label="Fleet #"
        keyboardType="numeric"
        value={text.fleetNumber}
        showField={true}
        onChange={t =>
          setText(prevState => {
            return {
              ...prevState,
              fleetNumber: t,
            };
          })
        }
      />
      <SpacerV20 />
    </CustomerSearchScrollView>
  );
};
export default TextInputPage;
