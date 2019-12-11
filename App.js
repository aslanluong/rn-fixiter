import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Tabs from './src/components/Tabs';
// import FindFixer from './src/components/FindFixer';
import RequestDetails from './src/components/Tabs/RequestDetails';
import NavigationService from './src/services/navigate';
import ProfileDetails from './src/components/Tabs/ProfileDetails';
import ProfileEditor from './src/components/Tabs/ProfileEditor';

import Login from './src/components/Screens/Login';
import LoginByPhone from './src/components/Screens/LoginByPhone';
import Verification from './src/components/Screens/Verification';
import CreateRequest from './src/components/Screens/CreateRequest';
import FindFixer from './src/components/Screens/FindFixer';

import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
} from 'react-native-ui-kitten';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import SelectLocation from './src/components/Screens/SelectLocation';
import Rate from './src/components/Screens/Rate';

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    LoginByPhone: {
      screen: LoginByPhone,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Verification: {
      screen: Verification,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    CreateRequest: {
      screen: CreateRequest,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    RequestDetails: {
      screen: RequestDetails,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    ProfileDetails: {
      screen: ProfileDetails,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    ProfileEditor: {
      screen: ProfileEditor,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    FindFixer: {
      screen: FindFixer,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    SelectLocation: {
      screen: SelectLocation,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Rating: {
      screen: Rate,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);
const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <AppContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </ApplicationProvider>
      </>
    );
  }
}
