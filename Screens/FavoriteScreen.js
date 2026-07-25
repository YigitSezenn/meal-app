import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import MealList from '../components/MealList/MealList';
import { FavoritesContext } from '../store/context/favorite-context';
import { MEALS } from '../data/dummy-data';

function FavoriteScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={[styles.container, styles.empty]}>
        <Text style={styles.text}>Favoriniz yok</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MealList items={favoriteMeals} />
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f2f25',
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
