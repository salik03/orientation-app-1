import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon,ArrowRightIcon } from 'react-native-heroicons/outline';
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function ChapterCard({item}) {
  const navigation = useNavigation();
  return (

      <View 
        style={{
          borderRadius: 40, 
          backgroundColor: themeColors.bggray, 
          height: ios? height*0.4 : height*0.50, 
          width: width*0.65,
        }} 
        >
        <View 
        style={{
          shadowColor: 'black',
          shadowRadius: 30,
          shadowOffset: {width: 0, height: 40},
          shadowOpacity: 0.8,
          marginTop: ios? -(height*0.08): 15,
        }}
        className="flex-row justify-center">
          <Image 
            source={item.image} 
            className="h-40 w-40" 
          />
        </View>
          <View className={`px-5 flex-1 justify-between ${ios? 'mt-5': ''}`}>
            <View className="space-y-3 mt-3">
              <Text className="text-3xl text-black font-semibold z-10">
                {item.name}
              </Text>
            </View>
            <View style={{
              backgroundColor: ios? themeColors.bgDark: 'transparent',
              shadowColor: themeColors.bgDark,
              shadowRadius: 25,
              shadowOffset: {width: 0, height: 40},
              shadowOpacity: 0.8,
            }} className="flex-row  items-center space-x-10 mb-5">
              <Text className="px-4 text-black font-bold text-lg" >Learn More</Text>
              <TouchableOpacity 
              onPress={()=> navigation.navigate('Product', {...item})}
              style={{
                shadowColor: 'black',
                shadowRadius: 40,
                shadowOffset: {width: -20, height: -10},
                shadowOpacity: 1,
              }} className="p-4 bg-white rounded-full">
                <ArrowRightIcon size="35" strokeWidth={2} color={themeColors.bgblack} />
              </TouchableOpacity>
            </View>
            
            
          </View>

      </View>
    
  )
}