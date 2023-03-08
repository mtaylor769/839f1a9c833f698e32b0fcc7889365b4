import {IconView, Img} from './styles';

import React from 'react';

const Icon = _props => {
  const {height, width, source} = _props;
  return (
    <IconView height={height} width={width}>
      <Img source={source} />
    </IconView>
  );
};

export default Icon;
