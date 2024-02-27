import { SafeAreaView, View, Image, Text, TextInput, ScrollView,  } from "react-native";
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import GlobalStyles from "../GlobalStyles";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="bg-white pt-5" >
       {/* header */}
       <View className="flex-row pb-3 items-center mx-4 space-x-2" >
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className=" flex-1 " >
            <Text className="font-bold text-gray-400 text-xs" > Deliver Now! </Text>
            <Text className="font-bold items-center text-xl" >
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB"/>
       </View>

       {/* search */}
       <View className="flex-row items-center space-x-2 pb-2 mx-4" >
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 p-3" >
          <MagnifyingGlassIcon size={20} color='gray' />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
       </View>

       {/* body */}
       <ScrollView 
        className="bg-gray-100" 
        contentContainerStyle={{
          paddingBottom: 100,
        }}
       >
        {/* categories */}
        <Categories />

        {/* featured */}
        <FeaturedRow 
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />

        {/* Tasty Discounts */}
        <FeaturedRow 
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />

        {/* offers near you */}
        <FeaturedRow 
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
       </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen;