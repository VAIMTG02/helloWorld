import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import styles from './styles';


export default function App() {
  return (
    <View style={styles.box}>
      <Text style={styles.headerText}>
        Hello World from Group 2: Anna Vostrikova!
      </Text>
      <Text style={styles.paragraph}>
      This is my, Anna Vostrikova, first React Native application!
      </Text>
      <Text style={styles.fancy}>
      Nice to see you here!
      </Text>
       <Image style={styles.picture} source={require('./assets/picture.jpg')} />
    </View>
  );
}