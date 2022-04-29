import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectTravelTimeInformation } from "../slices/navSlice";
import { useSelector } from "react-redux";
import OrderCompleted from "../screens/OrderCompleted";

const data = [
  {
    id: "basic",
    title: "taxi",
    multiplier: 1,
    image: "https://i.pinimg.com/originals/e0/4c/9c/e04c9c78ef1dd5fca8816eb3d13ba622.png",
  },
  {
    id: "mid",
    title: "Taxi large",
    multiplier: 1.2,
    image: "https://purepng.com/public/uploads/large/purepng.com-taxi-cabcaryellowvehicletransporttravelautotaxicab-961524636173mwmjb.png",
  },
  {
    id: "Prime",
    title: "Taxi deluxe",
    multiplier: 1.75,
    image: "https://www.pngall.com/wp-content/uploads/2/Rolls-Royce-PNG-HD-Image.png",
  },
];

const SURGE_CHANGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("NavigateCard")}
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full `}
      >
        <Icon name="chevron-left" type="fontawesome" />
      </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>
        Select a Ride - {travelTimeInformation?.distance?.text}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-6 ${
              id === selected?.id && "bg-green-500"
              
            }`}
          >
            <Image
            style={[tw`mr-7 bg-transparent`, {
              
                width:100,
                height: 100,
                resizeMode: "contain",
                
              }]}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("fi", {
                style: "currency",
                currency: "EUR", 
              }).format(
                (travelTimeInformation?.duration.value * 
                  SURGE_CHANGE_RATE * 
                  multiplier) / 100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
          onPress={() => navigation.navigate("OrderCompleted")}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
          
          
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
