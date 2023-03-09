import React, {useState} from 'react';

import {ButtonStatus} from '../../components/dtButton/ButtonStatus';
import DTButton from '../../components/dtButton';
import LinkButton from '../../components/linkButton';
import Strings from '../../utils/Strings';
import {View} from 'react-native';

const ButtonViewPage = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      {/* To acheive the link button */}
      <LinkButton
        label={Strings.advancedCustomerSearchButton}
        onPress={() => setShow(true)}
        show={show}
      />
      {/* To achieve the green button */}
      <DTButton
        label={Strings.searchCustomer}
        onPress={() => {}}
        status={ButtonStatus.success}
        enableRedButton={false}
        disabled={false}
      />
      {/* To achieve the grey disabled button */}
      <DTButton
        label={Strings.createNewCustomer}
        onPress={() => {}}
        status={ButtonStatus.primaryDisabled}
        enableRedButton={false}
        disabled={true}
      />
      {/*  To achieve the grey enabled button with plus icon */}
      <DTButton
        label={Strings.createNewCustomer}
        onPress={() => {}}
        status={ButtonStatus.primaryEnabled}
        enableRedButton={false}
        disabled={false}
      />
      {/* To achieve the red button */}
      <DTButton
        label={Strings.yesClearSearch}
        onPress={() => {}}
        status={ButtonStatus.failure}
        enableRedButton={true}
        disabled={false}
      />
      {/* to achieve the grey enabled button without plus icon */}
      <DTButton
        label={Strings.noReturnToSearch}
        onPress={() => {}}
        status={ButtonStatus.primaryEnabled}
        enableRedButton={true}
        disabled={false}
      />
      {/* to achieve grey enabled button with black border */}
      <DTButton
        label={Strings.selectVTV}
        onPress={() => {}}
        status={ButtonStatus.primaryEnabled}
        enableRedButton={true}
        disabled={false}
        border={true}
      />
    </View>
  );
};

export default ButtonViewPage;
