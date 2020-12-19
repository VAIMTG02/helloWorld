import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  box: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginTop:60,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    paddingBottom: 30,
    borderColor: '#163604',
    borderWidth: 3,
    borderStyle: 'dashed'
  },
  paragraph: {
    margin: 10,
    fontSize: 16,
    textAlign: 'left',
    },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
  },
  picture: {
    height: 128,
    width: 128,
    borderRadius: 80,
    paddingHorizontal: 100
  },
  fancy: {
    fontSize: 17,
    paddingBottom: 20,
    fontStyle: 'italic'
  }
  });