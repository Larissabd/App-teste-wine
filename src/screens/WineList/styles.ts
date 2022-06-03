import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header:{
    height: 96,
    width: 420,
    flexDirection: 'row',
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 4,
  },

  wine:{
    alignItems: 'flex-start',
    left: 16,
    top: 56,
  },

  logo:{
    left: 255,
    top: 48,
  },

  input: {
    width: 370,
    height: 40,
    padding: 8,
    top: 32,
    left: 18,
    right: 14,
    backgroundColor: "#EAEAEA"
  },

  produtos: {
    fontSize: 16,
    color: '#555555',
    top: 40,
    right: 181,
    left: 18,
  },

  load: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  
    background: {
      top: 60,
    },
  
});
