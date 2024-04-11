import { View, Text, TouchableOpacity } from 'react-native'
import Currency from 'react-currency-formatter'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectBasketItems, selectBasketItemsWithId } from '../features/BacketSlice';

const DishRow = ({
    id, 
    name, 
    description, 
    price, 
    image
    }) => {
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector((state) => selectBasketItemsWithId(state, id));
    const dispacth = useDispatch();

    const  addItemToBasket = () => {
        dispacth(addItemToBasket({
            id, 
            name, 
            description, 
            price, 
            image
        }))
    }

    const removeItemFromBasket = () => {

        if (!items.lenght > 0) return

        dispacth(removeItemFromBasket({ id }))
    }
  return (
    <>
        <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className=" bg-white border p-4 border-gray-200 " >
      <View className="flex-row" >
            <View className="flex-1 pr-2" >
                <Text className="text-lg mb-1" >{name}</Text>
                <Text className="text-gray-400">{description}</Text>
                <Text>
                    <Currency quantity={price} currency='USD' />
                </Text>
            </View>
            <View>
                <Image 
                    style={{
                        borderWidth: 1,
                        borderColor: "#F3F3F4",
                    }}
                    source={{uri: urlFor(image).url()}}
                    className="h-20 w-20 bg-gray-300 p-4"
                />
            </View>
      </View>
    </TouchableOpacity>

    {isPressed && (
        <View className="bg-white px-4" >
            <View className={`flex-row items-center space-x-2 pb-3 ${isPressed && "border-b-0"} `} >
                <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket} >
                    <MinusCircleIcon 
                        size={40}
                        color={items.length > 0 ? "#00CCBB" : "gray"}
                    />
                </TouchableOpacity>

                <Text>{selectBasketItems.length}</Text>

                <TouchableOpacity onPress={addItemToBasket} >
                    <PlusCircleIcon
                        size={40}
                        color="#00CCBB"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow