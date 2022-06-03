import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingBottom: 24,
    paddingLeft: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    width: 156,
    height: 350,
    shadowColor: "#3a3737",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    elevation: 3,
    borderRadius: 4,
    marginVertical: 10,
  },

  titulo: {
    top: 5,
    fontWeight: '700',
    color: '#111111',
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: 'Lato',
  },

  capa: {
    width: 120,
    height: 180,
    alignSelf: 'center',
  },

  areabtn: {
    width: 156,
    height: 40,
    backgroundColor: "#7EBC43",
    padding: 10,
    borderRadius: 4,
  },

  btn: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  },

  price: {
    color: "#888888",
    fontSize: 10,
    right: 38,
    fontFamily: 'Lato',
    top: 15,
    textDecorationLine: 'line-through',
  },

  discount: {
    top: -2,
    color: 'white',
    fontFamily: 'Lato',
    alignSelf: 'center',
  },

  backgroundiscount: {
    height: 17,
    width: 68,
    top: -2,
    left: 28,
    backgroundColor: '#F79552',
    alignSelf: 'center',
    borderRadius: 2,
  },

  sociowine: {
    right: 33,
    top: 5,
    fontFamily: 'Lato',
  },

  priceMember: {
    color: '#C81A78',
    fontSize: 16,
    fontWeight: 'bold',
    left: 30,
    top: -23,
    fontFamily: 'Lato',
  },

  priceNonMember: {
    color: "#888888",
    fontSize: 10,
    alignSelf: 'center',
    fontFamily: 'Lato',
  },

});
