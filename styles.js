import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  box: {
    alignItems: 'center',
    backgroundColor: '#cabc',
    marginTop:70,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    paddingBottom: 30,
    borderColor: '#368790',
    borderWidth: 2,
    borderStyle: 'line'
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
    borderWidth: 1,
    borderRadius: 80,
    paddingHorizontal: 50,
  },
  ftext: {
    fontSize: 17,
    paddingBottom: 20,
    fontStyle: 'italic'
  }
  });