import {Horizontal, VtvAircheckView} from './VTVAirCheckStyles';

import DTButtonView from '../../../components/dtButton/index';
import React from 'react';

const VtvAircheck = () => {
  return (
    <VtvAircheckView>
      <Horizontal />
      <DTButtonView
        label="Select a VTV"
        onPress={() => {}}
        status={'primaryEnabled'}
        enableRedButton={true}
        disabled={false}
        border={true}
      />
      <DTButtonView
        label="Select an Aircheck"
        onPress={() => {}}
        status={'primaryEnabled'}
        enableRedButton={true}
        disabled={false}
        border={true}
      />
    </VtvAircheckView>
  );
};

export default VtvAircheck;
