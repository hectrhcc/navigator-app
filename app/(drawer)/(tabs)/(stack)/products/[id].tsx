import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
//import React from 'react'



const ProductScreen = () => {
    const {id} = useLocalSearchParams();
    const navigation = useNavigation();
   // console.log(id);    
const  product = products.find((p) => p.id === id);

useEffect(() => {
  navigation.setOptions({
    title: product ? product.title : 'Producto',
  });
}
, [ product]);

if (!product){
     return <Redirect href='/' />
}
  return (
    <View className='px-5 mt-10'>
      <Text className='font-work-black text-2xl '>{product.title}</Text>
      <Text className=' '>{product.description}</Text>
      <Text className='font-work-black'>{product.price}</Text>
    
    </View>
  )
}

export default ProductScreen;