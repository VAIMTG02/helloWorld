import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import styles from './styles';


export default function App() {
  return (
    <View style={styles.box}>
      <Text style={styles.headerText}>
        Hello World from Group 2: Edgars Naglis!
      </Text>
      <Text style={styles.paragraph}>
      This is my, Edgars Naglis, first React Native application!
      </Text>
      <Text style={styles.ftext}>
      ALOHA!
      </Text>
       <Image style={styles.picture} source={require('./assets/edg.png')} />
    </View>
  );
}