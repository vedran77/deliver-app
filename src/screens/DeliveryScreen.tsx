import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/Restaurant";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-4xl font-bold">30-50 Minutes</Text>
          </View>

          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: 43.6532,
          longitude: 79.3832,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 43.6532,
            longitude: 79.3832,
          }}
          title={restaurant.title}
          description={restaurant.shortDesc}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/94656982?v=4",
          }}
          className="h-12 w-12 rounded-full p-4 bg-gray-500"
        />
        <View className="flex-1">
          <Text className="text-lg">Vedran Dev</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
