import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

const Challenge = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>Alpha</Text>
          <Text style={styles.text}>Bravo</Text>
          <Text style={styles.text}>Charlies</Text>
          <Text style={styles.text}>Delta</Text>
          <Text style={styles.text}>Echo</Text>
          <Text style={styles.text}>Foxtrot</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: '#6804CD',
    with: '100%',
    height: 30,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
export default Challenge;
