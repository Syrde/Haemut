
import {View, Text, SafeAreaView, Image} from "react-native"; 
import { selectTravelTimeInformation } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";





function OrderCompleted() {




  
  return (
    <SafeAreaView>

      <View
     style={{
      resizeMode: "contain",
      justifyContent:"center",
      top:150,
      }} >
      <Text style={tw`text-center font-bold text-3xl`}>Order Completed we are on our way!</Text>
      <Image source={require('../assets/taxi.gif')}
          style={{
            resizeMode: "contain",
            }}
         />
        
      </View>
    </SafeAreaView>
  )
}

export default OrderCompleted