import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './sceen/Login';
import Picture from './sceen/Picture';
import Photo from './sceen/Photo';

// sử dụng createStackNavigator để chuyển màn hình
const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        // Mỗi màn hình được khai báo trong 1 thẻ stack.screen với 3 tham số chính
        // tên màn hình
          name='Login'
          // tham chiếu tới file js ở màn hình Login 
          component={Login}
          //khai báo một sô thông tin cho màn hình Login như tiêu đề,nút back 
         //options={{title:'Hello'}}
        />

        <Stack.Screen
          name='Picture'
          component={Picture}
        />

        <Stack.Screen
          name='Photo'
          component={Photo}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
