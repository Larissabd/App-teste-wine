import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  wineimg: {
    left: 338,
    top: -15,
  },

  left: {
    top: 30,
    fontSize: 35,
    left: 10,
  },

  rotulo: {
    height: 333,
    width: 218,
    alignSelf: 'center',
  },

  titulo: {
    fontWeight: '700',
    color: '#333333',
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'Lato',
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
  },

  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
    alignItems: 'center',
    left: 75,
  },

  flag: {
    width: 16,
    height: 16,
  },

  country: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Lato',
    padding: 5,
  },

  type: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Lato',
  },

  classification: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Lato',
  },

  size: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Lato',
  },

  description: {
    color: '#333333',
    fontSize: 20,
    fontFamily: 'Lato',
    padding: 16,
    fontWeight: '700',
  },

  text: {
    color: '#555555',
    fontSize: 16,
    fontFamily: 'Lato',
    paddingHorizontal: 17,
  },

  footer: {
    height: 80,
    width: 420,
    flexDirection: 'row',
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12, },
    shadowOpacity: 0.58,
    elevation: 24,
    shadowRadius: 16,
    zIndex: 9,
  },

  areabtn: {
    width: 180,
    height: 48,
    backgroundColor: "#7EBC43",
    padding: 10,
    borderRadius: 6,
    top: 17,
    left: 45,
  },

  btn: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },

  backgroundiscount: {
    height: 17,
    width: 58,
    top: -10,
    left: -25,
    backgroundColor: '#F26649',
    alignSelf: 'center',
    borderRadius: 2,
  },

    discount: {
      color: 'white',
      fontFamily: 'Lato',
      alignSelf: 'center',
      fontSize: 12,
  },

  price: {
    color: "#555555",
    fontSize: 13,
    left: 25,
    fontFamily: 'Lato',
    top: -5,
    textDecorationLine: 'line-through',
  },

  priceMember: {
    color: '#C81A78',
    fontSize: 24,
    fontWeight: 'bold',
    left: 25,
    top: -8,
    fontFamily: 'Lato',
  },
  
  priceNonMember: {
    color: "#555555",
    fontSize: 12,
    alignSelf: 'center',
    fontFamily: 'Lato',
    top: -6,
    left: 25,
  },

});