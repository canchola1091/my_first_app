
import { SafeAreaView} from 'react-native'
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { HomeworkScreen } from './src/presentation/screens/HomeworkScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon { ...props }/>
      }}
    >

      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWordScreen name='Eduardo Canchola'/> */}
        {/* <CounterScreen/> */}
        {/* <CounterM3Screen/> */}
        {/* <BoxObjectModelScreen/> */}
        {/* <DimensionsScreen/> */}
        {/* <PositionsScreen/> */}
        {/* <FlexScreen/> */}
        {/* <FlexDirectionScreen/> */}
        <HomeworkScreen/>
      </SafeAreaView>
    
    </PaperProvider>
  )
}
