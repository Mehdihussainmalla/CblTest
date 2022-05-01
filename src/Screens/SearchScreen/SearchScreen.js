import { View, Text, ScrollView, FlatList , ScrollView} from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import TextInputComponent from '../../Components/TextInputComponent'
import { styles } from './styles'
import strings from '../../constants/lang'


const data=[
  {
    id:'1',
    title:'Sector 21 A,',

  },
  {
    id:'2',
    title:'Sector 20,',

  },
  {
    id:'3',
    title:'Sector 78.',

  },
  {
    id:'4',
    title:'Sector 21,',

  },
  {
    id:'5',
    title:'Sector 21 C,',

  },
]
const SearchScreen = () => {
  const renderItem =({item})=>(
<ScrollView>
  <View style={styles.textview}>
    <Text  style={styles.textstyle}>{item.title}  <Text>{strings.CHANDIGARH}</Text> </Text>
  </View>
</ScrollView>

  )
 
 
  return (
    <WrapperContainer>
    <View style ={styles.container}>
      <ScrollView>
      <View style={{marginTop:22}}>
      <TextInputComponent placeholder={strings.MANUALLY}/>
      </View>
       
      <Text style={styles.suggestionstyle}>{strings.SUGGESTIONS}</Text>
     

<FlatList 
data={data}
renderItem={renderItem}
keyExtractor={item=>item.id}
/>
</ScrollView>

</View>
      </WrapperContainer>
   
  )
}

export default SearchScreen