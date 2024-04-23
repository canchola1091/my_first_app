

import { StyleSheet, View } from 'react-native'

export const TareaSiete = () => {
  return (
    <View style={ styles.container }>

      <View style={[ styles.box, styles.purpleBox]}/>
      <View style={[ styles.box, styles.orangeBox]}/>
      <View style={[ styles.box, styles.blueBox]}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white'
  },
  purpleBox: {
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  }
})