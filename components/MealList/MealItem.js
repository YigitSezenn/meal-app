
import { View, Text,StyleSheet,Image,Pressable,Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import MealDetails from '../MealDetail/MealDetails';

function MealItem({  id ,title,imageUrl,duration,complexity,affordability}) {
  const navigation = useNavigation();
function selectMealItemHandler() {
  // Add the space to match "Meal Detail"
  navigation.navigate('Meal Details', { mealId: id }); 
}
return (
    <View style={styles.mealItem}>
      <Pressable 
        android_ripple={{ color: '#ccc' }} 
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)} 
        onPress={selectMealItemHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        
        <MealDetails 
          duration={duration} 
          complexity={complexity} 
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
   mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
      shadowColor: 'black', // shadow color for iOS
      shadowOpacity: 0.25, // shadow opacity for iOS
      shadowOffset: { width: 0, height: 2 }, // shadow offset for iOS
      shadowRadius: 16, // shadow radius for iOS
      overflow: Platform.OS === 'ios' ? 'hidden' : 'visible', // clip children to the rounded corners

   }, 
   innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
   },
  image: {

    width: '100%',
    height: 200,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title : {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 8,
  },


});

export default MealItem;