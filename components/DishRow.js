import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const DishRow = ({id, name, description, price, image}) => {

    const[isPressed, setIsPressed] = useState(false);

  return (
    <>
    <TouchableOpacity 
        onPress={() => setIsPressed(!isPressed)} 
        className={`flex-row items-center bg-white border p-3 border-gray-200 rounded-2xl mx-1 mb-3 shadow-2xl
        ${isPressed && 'border-b-0'}`}
    >
        <View className='flex-row'>
            <View className='flex-1 pr-2'>
                <Text className='text-lg mb-1'>{name}</Text>
                <Text className='text-gray-400'>{description}</Text>
                <Text className='text-green-500'>${price}</Text>           
            </View>
            <View>
                <Image
                    stlye={{
                        borderWidth: 1,
                        borderColor: '#F3F3F4',
                    }}
                    source={{uri: urlFor(image).url()}}
                    className='h-20 w-20 bg-gray-300 p-4 rounded-xl'
                />
            </View>
        </View>
    </TouchableOpacity>
    {isPressed && (
        <View className='bg-whte px-4'>
            <View className='flex-row items-center space-x-2 pb-3'>
                <TouchableOpacity>
                    <MinusCircleIcon 
                        color='#00CCBB' 
                        size={40}
                    />
                </TouchableOpacity>
                <Text>0</Text>
                <TouchableOpacity>
                    <PlusCircleIcon 
                        color='#00CCBB' 
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow