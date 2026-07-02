import { View, Text,FlatList } from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle'


function  renderCategoryItem(itemData) {
    return <CategoryGridTitle  title={itemData.item.title} color={itemData.item.color} />

}
function CategoryScreen() {
  return (
    <View>

      <Text>CategoryScreen</Text>

    

    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={(renderCategoryItem)} />
        </View>
  )
}

export default CategoryScreen;