import React from 'react';
import {
  SafeAreaView, StyleSheet, Text,
  View,
} from 'react-native';
import Home from "./Component/Home/Home";

function App(): JSX.Element {
  return (
    <SafeAreaView >

      {/* <ScrollView> */}
      {/* <Header /> */}
      <View>
        <Text> This is our first APP </Text>
      </View>
      <Home></Home>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
