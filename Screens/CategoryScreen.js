import { View, FlatList, StyleSheet } from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle'



function CategoryScreen({navigation}) {

  function  renderCategoryItem(itemData) {
  function pressHandler() {
    navigation.navigate('Meals Overview', { categoryId: itemData.item.id });
     }
    return <CategoryGridTitle  title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />

}
  return (
    <View style={styles.container}>
    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={(renderCategoryItem)} numColumns={2} />
        </View>
  )
}

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f2f25',
  },
});
