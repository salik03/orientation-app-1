import { View, Text, TouchableOpacity, Image, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { ShoppingBag } from 'react-native-feather';
import { categories, coffeeItems } from '../constants';
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';


export default function FavouriteScreen(props) {
  const item = props.route.params;
  const [size, setSize] = useState('small');
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        source={item.bgimage} 
        style={{height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
        className="w-full absolute " />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity className=" rounded-full " onPress={()=> navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>
        </View>
        <View 
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: {width: 0, height: 30},
            shadowOpacity: 0.9,
          }}
          className="flex-row justify-center">
          <Image source={item.image} className="h-60 w-60" style={{marginTop: ios? 0:40}} />
        </View>
        
        <View className="px-4 flex-row justify-between items-center">
            <Text style={{color: themeColors.text}} className="text-3xl font-semibold">
              {item.name}
            </Text>
            
            
        </View>
        <View className="px-4 space-y-2">
          <View className="flex-row justify-between">
            <TouchableOpacity 
             onPress={()=> setSize('small')}
             style={{backgroundColor: size=='small'? themeColors.bgblue: 'rgba(0,0,0,0.07)'}} 
             className="p-3 px-8 rounded-full">
              <Text className={size=='small'? "text-white": "text-gray-700"}>{item.stacks1}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=> setSize('medium')}
             style={{backgroundColor: size=='medium'? themeColors.bgblue: 'rgba(0,0,0,0.07)'}}
              className="p-3 px-8 rounded-full">
              <Text className={size=='medium'? "text-white": "text-gray-700"}>{item.stacks2}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=> setSize('large')}
             style={{backgroundColor: size=='large'? themeColors.bgblue: 'rgba(0,0,0,0.07)'}} 
             className="p-3 px-8 rounded-full">
              <Text className={size=='large'? "text-white": "text-gray-700"}>{item.stacks3}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold">About Us</Text>
          <Text className="text-gray-600">
            {item.desc}
          </Text>
        </View>
        
        
      </SafeAreaView>
      <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold">Catch the latest updates, follow us!</Text>
          
        </View>
      <View className={`space-y-3 ${ios? 'mb-6': 'mb-3'}`}>
          <View className="flex-row justify-between items-center px-4 mb-2">
              <View className="flex-row items-center space-x-1">
                
              </View>
              
          </View>

          {/* buy now button 
          
          <View className="flex-row justify-between px-4">
            <TouchableOpacity className="p-4 rounded-full border border-gray-400">
              <ShoppingBag size="30" color="gray" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={{backgroundColor: themeColors.bgLight}} 
              className="p-4 rounded-full flex-1 ml-4">
              <Text className="text-center text-white text-base font-semibold">Buy now</Text>
            </TouchableOpacity>
          </View>*/}
        </View>
        
      
    </View>
  )
}