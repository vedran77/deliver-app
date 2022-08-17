import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { add, remove, selectBasketItemsWithId } from "../slices/Basket";
import { useDispatch, useSelector } from "react-redux";

type DishRow = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const DishRow = ({ id, name, description, price, image }: DishRow) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(add({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length) return;
    dispatch(remove({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 border-gray-200 ${isPressed && "border-b-0"}`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">{price} EUR</Text>
          </View>

          <View>
            <Image
              source={{
                uri: image,
              }}
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                color={items.length > 0 ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
