import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../../sections/components/Header';

const Home =(props)=> {
  const handleClose = () =>{
    alert("On Press");
  }
  return (
    <View>
      <Header>
        <TouchableOpacity onPress={handleClose} style={styles.button}>
          <Text style={styles.button}>Cerrar</Text>
        </TouchableOpacity>
      </Header>
    </View>
  );
};

const styles=StyleSheet.create({
    button:{
        backgroundColor:'#e350a8',
        borderRadius:5,
    },
});

export default Home;