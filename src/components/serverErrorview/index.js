import {
  ImageView,
  InnerView,
  LineView,
  OuterView,
  ServerMessage,
} from './styles';

import ICONS_URI from '../../utils/IconUris';
import Icon from '../icons';
import React from 'react';

export const ServerErrorView = _props => {
  const {errorMessage} = _props;
  return (
    <>
      <OuterView>
        <LineView />
        <InnerView>
          <ImageView>
            <Icon
              width={'16px'}
              height={'14px'}
              source={ICONS_URI.serverErrorWarning}
            />
          </ImageView>
          <ServerMessage>{errorMessage}</ServerMessage>
        </InnerView>
        <LineView />
      </OuterView>
    </>
  );
};

export default ServerErrorView;
