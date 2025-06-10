import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import { SafeAreaView, View } from 'react-native';

//import React from 'react'



const HomeScreen = () => {
  const navigation = useNavigation();
  
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  }
  return (
    <SafeAreaView>
    <View className='px-10 mt-5'>
    
    <CustomButton 
      className='mb-2'
      onPress={() =>router.push ('/products')}>
      Productos 
    </CustomButton>
    
    <CustomButton 
      className='mb-2'
      onPress={() =>router.push ('/profile')}
      color='secondary'> 
      Profile
    </CustomButton>
    
    
    <CustomButton 
      className='mb-2'
      onPress={() =>router.push ('/settings')}
      color='tertiary'> 
      Ajustes
    </CustomButton>

    <Link href="/products" asChild> 
      <CustomButton variant="text-only" color="primary" className='mb-10'>Productos </CustomButton>
    </Link>

  <CustomButton
    onPress={onToggleDrawer}
    > Abrir Menú
  </CustomButton>
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