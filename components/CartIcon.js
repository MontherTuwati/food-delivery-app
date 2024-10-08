import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../features/cartSlice'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ShoppingCartIcon } from 'react-native-heroicons/solid'

const CartIcon = () => {
    const items = useSelector(selectCartItems);
    const navigation = useNavigation();

    if (items.length === 0) return null;

    const {params:{title}} = useRoute();

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Cart')} 
      className='bg-[#00CCBB] mx-5 p-3 py-2 rounded-full justify-between flex-row items-center shadow-lg'> 
        <View className='rounded-full p-1'>
            <ShoppingCartIcon color='white' size={30}/>
        </View>
        
        <View className='items-center'>
            <Text className='text-white font-extrabold text-md'>View Cart</Text>
            <Text className='text-white font-extrabold text-lg'>{title}</Text>
        </View>  
        <View className='bg-[#01A296] p-2 px-4 rounded-full'>
            <Text className='text-white font-extrabold text-lg'>{items.length}</Text>    
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CartIcon