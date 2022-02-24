import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, Animated } from 'react-native';

export default function App() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      useNativeDriver: true
    }).start();
  }, [])

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('./src/assets/logo.png')}/>      
        <StatusBar style="light" />
      </View>

      <Animated.View 
        style={[
            styles.containerView,
            {
              transform: [
                { translateY: offset.y}
              ]
            }
          ]}>

          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.input}
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkRegister}>
            <Text style={styles.linkRegisterText}>Cadastre-se</Text>
          </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },

  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 40
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },

  button: {
    backgroundColor: '#35AAFF',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 7
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18
  },

  linkRegister: {
    paddingTop: 10
  },

  linkRegisterText: {
    color: '#FFF'
  },
});
