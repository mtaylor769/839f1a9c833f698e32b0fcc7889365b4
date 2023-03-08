import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import ButtonView from './pages/button/ButtonViewPage';
import DebugScreen from './pages/debug/DebugPage';
import HomeScreen from './pages/home/HomePage';
import LoginScreen from './pages/login/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ScanningVin from './pages/scanvin/ScanningVinPage';
import SearchScreen from './pages/search/SearchPage';
import TabPage from './pages/tab/TabPage';
import TextInputPage from './pages/textInput/TextInputPage';
import Typo from './utils/Typo';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <RootStack.Screen
          name="Debug"
          component={DebugScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <RootStack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <RootStack.Screen
          name="TabView"
          component={TabPage}
          options={{headerTitleAlign: 'center'}}
        />
        <RootStack.Screen
          name="TextInput"
          component={TextInputPage}
          options={{headerTitleAlign: 'center'}}
        />
        <RootStack.Screen
          name="Typo"
          component={Typo}
          options={{headerTitleAlign: 'center'}}
        />

        <RootStack.Screen
          name="Button"
          component={ButtonView}
          options={{headerTitleAlign: 'center'}}
        />
        <RootStack.Screen
          name="ScanVin"
          component={ScanningVin}
          options={{headerTitleAlign: 'center'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
