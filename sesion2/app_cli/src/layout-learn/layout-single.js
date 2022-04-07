import React from 'react';
import { StyleSheet, View } from 'react-native';

const LayoutSingle = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: "#cc4bc2"}]} />
      <View style={[styles.square, { backgroundColor: "#dd5e98"}]} />
      <View style={[styles.square, { backgroundColor: "#e16f7c"}]} />
      <View style={[styles.square, { backgroundColor: "#c1ae7c"}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"space-between",
    width: 100
  },
  square: {
    width: 100,
  },
});

export default LayoutSingle;