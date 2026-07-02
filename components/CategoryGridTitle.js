import { Pressable,View,Text } from "react-native";


function CategoryGridTitle({ title ,color}) {
  return (
   <Pressable>
    <View>
        <Text>{title}</Text>
    </View>
   </Pressable>
  );
}
export default CategoryGridTitle

