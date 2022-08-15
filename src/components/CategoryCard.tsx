import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

type CardProps = {
  image: string;
  title: string;
};

const CategoryCard = ({ image, title }: CardProps) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        className="h-20 w-20 rounded"
        source={{
          uri: image,
        }}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        CategoryCard
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
