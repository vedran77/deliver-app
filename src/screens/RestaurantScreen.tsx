import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/Restaurant";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl: img,
        title,
        rating,
        genre,
        address,
        shortDesc,
        long,
        lat,
      })
    );
  }, [dispatch]);

  const {
    params: { id, img, title, rating, genre, address, shortDesc, long, lat },
  } = useRoute();
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: img,
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-10 left-5 rounded-full p-2 bg-gray-100"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white ">
          <View className="px-4 pt-4 ">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={22} color="green" opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> - {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon size={22} color="gray" opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  Nearby - {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{shortDesc}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          <DishRow
            key={1}
            id={1}
            description="Description #1Description #1Description #1Description #1Description #1"
            image="https://media.istockphoto.com/photos/supreme-pizza-picture-id1270988485?b=1&k=20&m=1270988485&s=170667a&w=0&h=XIeAEF_2j6EzsSotoyjXjzBAUzj6cvDyl9NMpdR5l0g="
            name="Pizza"
            price={20}
          />
          <DishRow
            key={3}
            id={3}
            description="Description #3Description #3Description #3Description #3"
            image="https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            name="Food"
            price={100}
          />
          <DishRow
            key={4}
            id={4}
            description="Description #2Description #2Description #2Description #2Description #2Description #2Description #2Description #2Description #2"
            image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
            name="Food"
            price={30}
          />
          <DishRow
            key={5}
            id={5}
            description="Description #1Description #1Description #1Description #1Description #1"
            image="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
            name="Food"
            price={20}
          />
          <DishRow
            key={6}
            id={6}
            description="Description #3Description #3Description #3Description #3"
            image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
            name="Food"
            price={100}
          />
          <DishRow
            key={7}
            id={7}
            description="Description #2Description #2Description #2Description #2Description #2Description #2Description #2Description #2Description #2"
            image="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Food"
            price={30}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
