import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import { SafeAreaView, View } from 'react-native';

//import React from 'react'



const HomeScreen = () => {
  return (
    <SafeAreaView>
    <View className='px-10 mt-5'>
    
    <CustomButton 
      className='mb-2'
      onPress={() =>router.push ('/tabs/(stack)/products')}>
      Productos 
    </CustomButton>
    
    <CustomButton 
      className='mb-2'
      onPress={() =>router.push ('/tabs/(stack)/profile')}
      color='secondary'> 
      Profile
    </CustomButton>
    
    
    <CustomButton 
      className='mb-2'
      onPress={() =>router.push ('/tabs/(stack)/settings')}
      color='tertiary'> 
      Ajustes
    </CustomButton>

    <Link href="/tabs/products" asChild> 
      <CustomButton variant="text-only" color="primary" className='mb-10'>Productos </CustomButton>
    </Link>
      {/*}
      <Link className="mb-5" href="/products">Productos</Link>
      <Link className="mb-5" href="/profile">Perfil</Link>
      <Link className="mb-5" href="/settings">Ajustes</Link>
      */}
       
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;