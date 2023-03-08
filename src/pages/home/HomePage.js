import React, {useState} from 'react';

import DebugButton from '../../components/debugButton';
import ScanningVin from '../scanvin/ScanningVinPage';
import {ScreenContainer} from '../../common/theme/CommonStyles';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const changeModal = value => {
    setShowModal(value);
  };
  return !showModal ? (
    <ScreenContainer>
      <DebugButton
        label="Search Screen"
        onPress={() => {
          navigation.navigate('Search');
        }}
      />

      <DebugButton
        label="Debug Screen"
        onPress={() => {
          navigation.navigate('Debug');
        }}
      />
      <DebugButton
        label="Login Screen"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <DebugButton
        label="Tab Screen"
        onPress={() => {
          navigation.navigate('TabView');
        }}
      />

      <DebugButton
        label="Text Input"
        onPress={() => {
          navigation.navigate('TextInput');
        }}
      />

      <DebugButton
        label="Typo Icon"
        onPress={() => {
          navigation.navigate('Typo');
        }}
      />

      <DebugButton
        label="Button Component"
        onPress={() => {
          navigation.navigate('Button');
        }}
      />
      <DebugButton
        label="ScanVin"
        onPress={() => {
          setShowModal(true);
        }}
      />
    </ScreenContainer>
  ) : (
    <ScanningVin showModal={showModal} setShowModal={changeModal} />
  );
};

export default HomeScreen;
