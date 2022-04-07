import {View, Image, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={require('../../../assets/bedu.png')} style={styles.logo} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
});

export default Header;