import {
  ButtonViewPage,
  DebugPage,
  HomePage,
  LoginPage,
  ScanVinPage,
  SearchPage,
  TabPage,
  TextInputPage,
} from '../';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {gql, useQuery} from '@apollo/client';

import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import Typo from '../../utils/Typo';
import {atomWithStorage} from 'jotai/utils';
import {useAtom} from 'jotai';

const RootStack = createStackNavigator();

const basicQuery = gql`
  query Hello {
    hello
  }
`;

const dataAtom = atomWithStorage('hello', 'loading...');

const DashboardPage = _props => {
  const [currdata, setData] = useAtom(dataAtom);
  const {loading, error, data} = useQuery(basicQuery);
  useEffect(() => {
    if (data) setData(data);
  }, [data, setData]);

  return (
    <>
      <NavigationContainer>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {JSON.stringify(error)}</Text>}
        <Text>{JSON.stringify(currdata.hello)}</Text>
        <RootStack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <RootStack.Screen
            name="Home"
            component={HomePage}
            options={{headerTitleAlign: 'center'}}
          />
          <RootStack.Screen
            name="Debug"
            component={DebugPage}
            options={{headerTitleAlign: 'center'}}
          />
          <RootStack.Screen
            name="Login"
            component={LoginPage}
            options={{headerTitleAlign: 'center'}}
          />
          <RootStack.Screen
            name="Search"
            component={SearchPage}
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
            component={ButtonViewPage}
            options={{headerTitleAlign: 'center'}}
          />
          <RootStack.Screen
            name="ScanVin"
            component={ScanVinPage}
            options={{headerTitleAlign: 'center'}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default DashboardPage;
