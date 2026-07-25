import { Pressable,View,Text ,StyleSheet,Platform} from "react-native";


function CategoryGridTitle({ title,color ,onPress}) {
  return (
  
    <View style={[styles.gridItem]}>
       <Pressable android_ripple={{color:'#ccc'}}  style={ ({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}   onPress={onPress}>
      <View style={[styles.innerContainer, {backgroundColor: color}]}>
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
    overflow: Platform.OS === 'ios' ? 'hidden' : 'visible', // clip children to the rounded corners

  },
  
  button: {

    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
     
  },  

});