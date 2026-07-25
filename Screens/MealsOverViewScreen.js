import { MEALS,CATEGORIES } from '../data/dummy-data'; 
import  {useLayoutEffect} from 'react';
import MealList from '../components/MealList/MealList';
import { View, FlatList, StyleSheet } from 'react-native';
function MealsOverViewScreen( {route,navigation} ) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0; //  
  });
  useLayoutEffect(() => {
    const selectedCategory = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: selectedCategory,
    });
  }, [catId, navigation]);

  return <MealList items={displayMeals}/>
  
}
 



export default MealsOverViewScreen;