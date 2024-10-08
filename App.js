import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import CartScreen from './screens/CartScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';


const Stack = createNativeStackNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {/* Screens */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />  
          <Stack.Screen name="Cart" 
          component={CartScreen} 
          options={{presentation: "modal", animation: "slide_from_bottom", headerShown: false}}
          />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}
          />  
          <Stack.Screen name="Delivery" component={DeliveryScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}
          />
        </Stack.Navigator>
      </Provider> 
    </NavigationContainer>
  );
}
