
import { View, Text, StyleSheet } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={ styles.container }>

      <View style={ styles.box1 }/>
      <View style={ styles.box2 }/>
      <View style={ styles.box3 }/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
  box1: {
    flex: 1,    // 1 + 2 + 3 = 6  1/6
    backgroundColor: '#5856D6'
  },
  box2: {
    flex: 2,   // 2/6  =  1/3
    backgroundColor: '#4240A2'
  },
  box3: {
    flex: 3,  // 3/6   = 1/2
    backgroundColor: '#2E2D71'
  }
})
