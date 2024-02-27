import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* category card */}
        <CategoryCard imgurl='https://links.papareact.com/gn7' title="Testing" />
        <CategoryCard imgurl='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imgurl='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imgurl='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imgurl='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imgurl='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imgurl='https://links.papareact.com/gn7' title="Testing"/>
      <Text>categories</Text>
    </ScrollView>
  )
}

export default Categories