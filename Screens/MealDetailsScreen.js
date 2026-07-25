import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useContext, useLayoutEffect } from 'react';
import MealDetails from '../components/MealDetail/MealDetails';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import IconButtons from '../components/IconButtons';
import { FavoritesContext } from '../store/context/favorite-context';

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButtons
          onPress={changeFavoriteStatusHandler}
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color="white"
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

  return (
    <ScrollView style={styles.rootcontainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textstyle={styles.detailtext}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listcontainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  detailtext: {
    color: 'white',
  },
  listcontainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  rootcontainer: {
    marginBottom: 32,
  },
});
