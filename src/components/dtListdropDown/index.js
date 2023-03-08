import {BoldText, CommonView} from '../../common/theme/CommonStyles';
import {
  ButtonBox,
  ButtonBoxFocus,
  Label,
  List,
  ListText,
  ListView,
} from './styles';
import React, {useState} from 'react';

import ICONS_URI from '../../utils/IconUris';
import Icon from '../icons';
import {Text} from 'react-native';

const DTListDropDown = _props => {
  const {dropDownLabel, dropDownData, onChange, value} = _props;
  const [isFocus, setIsFocus] = useState(false);
  const FocusButton = () => {
    return (
      <ButtonBoxFocus onPress={() => setIsFocus(false)}>
        <Label> {dropDownLabel}</Label>
        <Text>
          {value === '' ? dropDownLabel : <BoldText>{value}</BoldText>}
        </Text>
        <Icon width="14px" height="7px" source={ICONS_URI.upArrow} />
      </ButtonBoxFocus>
    );
  };
  const NotFocusButton = () => {
    return (
      <ButtonBox onPress={() => setIsFocus(true)}>
        {value === '' ? null : <Label> {dropDownLabel}</Label>}
        <Text>
          {value === '' ? dropDownLabel : <BoldText>{value}</BoldText>}
        </Text>
        <Icon width="14px" height="7px" source={ICONS_URI.DownArrow} />
      </ButtonBox>
    );
  };
  return (
    <>
      {isFocus === true ? FocusButton() : NotFocusButton()}
      <CommonView>
        {isFocus === true ? (
          <ListView>
            {dropDownData.map((item, i) => {
              return (
                <List
                  key={i}
                  onPress={() => {
                    setIsFocus(false);
                    onChange(item?.value);
                  }}>
                  <ListText> {item.label}</ListText>
                </List>
              );
            })}
          </ListView>
        ) : null}
      </CommonView>
    </>
  );
};

export default DTListDropDown;
