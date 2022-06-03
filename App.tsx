import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container} >
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEDEDE",

  }
});

