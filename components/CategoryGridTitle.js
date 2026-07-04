import { Pressable,View,Text ,StyleSheet} from "react-native";


function CategoryGridTitle({ title,color }) {
  return (
  
    <View style={[styles.gridItem]}>
       <Pressable style={styles.button}>
      <View style={[styles.innerContainer]}>
        <Text>{title}</Text>
      </View>
       </Pressable>
    </View>
  
  );
}
export default CategoryGridTitle

const styles = StyleSheet.create({

  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8, // rounded corners
    elevation: 4, // shadow for android
    backgroundColor: 'white', // background color
    shadowColor: 'black', // shadow color for iOS
    shadowOpacity: 0.25, // shadow opacity for iOS
    shadowOffset: { width: 0, height: 2 }, // shadow offset for iOS
    shadowRadius: 8, // shadow radius for iOS

  },
  
  button: {

    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
     
  },  

});