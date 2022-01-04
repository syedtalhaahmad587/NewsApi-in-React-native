import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Saved } from '.';



const nav = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>

            <nav.Navigator screenOptions={{ headerMode: 'screen', headerTintColor: 'white', headerTitleAlign: "center", headerStyle: { backgroundColor: 'black' }, }}>
                <nav.Screen options={{ title: 'News Page' }} name="home" component={Home} />
                <nav.Screen options={{ title: 'Saved Items' }} name="saved" component={Saved} />
            </nav.Navigator>

        </NavigationContainer>
    );
}

export default AppNavigation;