import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

type FeaturedRow = {
  id: string;
  title: string;
  description: string;
};

const FeaturedRow = ({ id, title, description }: FeaturedRow) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center px-4 justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={1}
          address="Addr "
          genre="d"
          img="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
          lat={1}
          long={1}
          rating="5"
          shortDesc="desc"
          title="Restaurant"
        />
        <RestaurantCard
          id={1}
          address="Addr "
          genre="d"
          img="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
          lat={1}
          long={1}
          rating="5"
          shortDesc="desc"
          title="Restaurant"
        />
        <RestaurantCard
          id={1}
          address="Addr "
          genre="d"
          img="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
          lat={1}
          long={1}
          rating="5"
          shortDesc="desc"
          title="Restaurant"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
