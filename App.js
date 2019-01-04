import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

// Importing navigator
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Importing pages
import MainPage from './pages/MainPage'


class MainScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return(
      <MainPage />
    );
  }
}

// Building the AppNavigator
const AppNavigator = createStackNavigator(
  {
    Main: MainScreen
  },
  {
    initialRouteName: "Main"
  }
);

const AppContainer = createAppContainer(AppNavigator);

// Exporting the App component
export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}