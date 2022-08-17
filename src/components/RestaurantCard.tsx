import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LocationMarkerIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

type cardProps = {
  id: number;
  img: string;
  title: string;
  rating: string;
  genre: string;
  address: string;
  shortDesc: string;
  long: number;
  lat: number;
};

const RestaurantCard = ({
  id,
  img,
  title,
  rating,
  genre,
  address,
  shortDesc,
  long,
  lat,
}: cardProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow-sm"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          img,
          title,
          rating,
          genre,
          address,
          shortDesc,
          long,
          lat,
        });
      }}
    >
      <Image
        source={{
          uri: img,
        }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
