import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation: any = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row items-center mx-4 pb-3 space-x-2">
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/94656982?v=4",
          }}
          className="h-7 w-7 rounded-full p-4 bg-gray-500"
        />

        <View className="flex-1">
          <Text className="text-gray-500 text-xs font-bold">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-2 rounded-md">
          <SearchIcon color="gray" size={20} />
          <TextInput placeholder="Search..." keyboardType="default" />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
