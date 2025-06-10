import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation, useRouter } from 'expo-router';

const StackLayout = () => {
    const navigation = useNavigation();
    const router =useRouter();

    const onHeaderLeftClick = (canGoBack: boolean) => {
        if (canGoBack) {
          router.back();
            return;
        }

        // Si no puedes retroceder, significa que estás en la primera pantalla del Stack
        // y probablemente quieres abrir el Drawer.
        navigation.dispatch(DrawerActions.toggleDrawer()); // <-- IMPORTANTE: toggleDrawer es una función
    };

    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: '#fff',
                },
                headerLeft: ({ tintColor, canGoBack }) => (
                    <Ionicons
                        name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                        size={20}
                        className='mr-5'
                        onPress={() => onHeaderLeftClick(canGoBack)}
                    />
                ),
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Inicio',
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Productos',
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Perfil',
                    animation: 'ios_from_left',
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Ajustes Pantalla',
                }}
            />
        </Stack>
    );
};

export default StackLayout;