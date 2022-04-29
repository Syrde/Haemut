import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "ride",
    title: "Get a ride",
    image: "https://purepng.com/public/uploads/large/purepng.com-taxi-cabcaryellowvehicletransporttravelautotaxicab-961524636173mwmjb.png",
    screen: "MapScreen",
  },
  {
    id: "food",
    title: "Coming Soon",
    image: "https://www.picng.com/upload/pizza/png_pizza_15268.png",
    screen: "FoodScreen",
  },
];

const NavOptions = () => {
  const navigaiton = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigaiton.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}> {item.title}</Text>
            <Icon
              style={tw`p-1 bg-black rounded-full w-10 mt-4 ml-6`}
              name="arrow-right"
              color="white"
              type="antdisign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});