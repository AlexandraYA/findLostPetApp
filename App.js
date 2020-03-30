import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { useScreens } from 'react-native-screens';

import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import SignInScreen from './src/screens/SignInScreen';
import MainScreen from './src/screens/MainScreen';
import PostShowScreen from './src/screens/PostShowScreen';
import PostCreateScreen from './src/screens/PostCreateScreen';
import MapScreen from './src/screens/MapScreen';
import AnketaScreen from './src/screens/AnketaScreen';
import ProfileScreen from './src/screens/ProfileScreen';

useScreens();

const AuthStack = createStackNavigator(
  { SignIn: SignInScreen },
  { headerMode: 'none' }
);

const ProfileStack = createStackNavigator(
  { Profile: ProfileScreen, Anketa: AnketaScreen },
  { headerMode: 'none' }
);

const AppStack = createMaterialBottomTabNavigator(
  {
    Main: { screen: MainScreen },
    Map: { screen: MapScreen },
    User: { screen: ProfileStack }
  },
  {
    initialRouteName: 'Main',
    activeColor: '#f0edf6',
    inactiveColor: '#c158dc',
    barStyle: { backgroundColor: '#5c007a' },
    defaultNavigationOptions: ({ navigation }) => {

      const { routeName } = navigation.state;

      let tabBarLabel;

        if (routeName === 'Main') {
          tabBarLabel = 'Главная';
        } else if (routeName === 'Map') {
          tabBarLabel = 'Карта';
        } else if (routeName === 'User') {
          tabBarLabel = 'Профиль';
        }

      return {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {

          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Main') {
            iconName = `md-paper`;
          } else if (routeName === 'Map') {
            iconName = `md-map`;
          } else if (routeName === 'User') {
            iconName = `md-person`;
          }

          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
        tabBarLabel,
      }
    },
  }
);

const RootStack = createStackNavigator(
  {
    App: {
      screen: AppStack,
    },
    Create: {
      screen: PostCreateScreen,
    },
    Post: { 
      screen: PostShowScreen 
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Root: RootStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
