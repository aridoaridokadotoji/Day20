import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff'
  },
  headerStyle: {
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    paddingBottom: 20
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  lineStyle: {
    paddingTop: 10,
    flexDirection: 'row',
    marginLeft: 52,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  txtStyle: {
    fontSize: 30,
    color: '#ff9249',
    fontWeight: 'bold'
  },
  checkStyle: {
    // flex: 1,
    borderRadius: 50,
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    paddingRight: 10
    // backgroundColor: '#ff9249'
  },
  checked: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#efebe8',
    // padding: 10,
    backgroundColor: '#ff9249'
  }
})
