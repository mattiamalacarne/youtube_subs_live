import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

import SearchButton from '../components/SearchButton';
import SearchBarMain from '../components/SearchBarMain';

import '../global.js';

const mainPage = props => {

    this.state = {
        urlToSearch : null,
    }

    return(
    <View style = {styles.container}>

        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'YouTube Subs', style: { color: '#fff', fontSize: 22 } }}
          backgroundColor= {"#c62828"}
          innerContainerStyles={{ backgroundColor: '#c62828' }}
          outerContainerStyles={{borderBottomColor: '#c62828',}}
        />

        <SearchBarMain state = {this.state}/>
        <SearchButton url = {global.urlToSearch}/>

    </View>
    );
}

export default mainPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c62828',
      alignContent: 'center',
    },
  });