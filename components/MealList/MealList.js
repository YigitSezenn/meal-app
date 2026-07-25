import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

function MealList({ items }) {
  function renderMealItem(itemData) {
    const MealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
    };
    return <MealItem {...MealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#3f2f25',
  },
  list: {
    flex: 1,
    backgroundColor: '#3f2f25',
  },
  listContent: {
    flexGrow: 1,
    backgroundColor: '#3f2f25',
  },
});
