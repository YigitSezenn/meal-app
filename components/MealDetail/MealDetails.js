import { View ,Text,StyleSheet} from "react-native"

function MealDetails({ duration, complexity, affordability,style ,textstyle}) {
  return (
        <View style={[styles.details,style]}>
            <Text style={[styles.detailItem,textstyle]}>{duration}m</Text>
            <Text style={[styles.detailItem,textstyle]}>{complexity?.toUpperCase()}</Text>
            <Text style={[styles.detailItem,textstyle]}>{affordability?.toUpperCase()}</Text>
          </View>
  )
}

export default MealDetails

const  styles = StyleSheet.create({
    details:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  }
})