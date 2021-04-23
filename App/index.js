import React, { useCallback, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Dashboard from "./Dashboard";
import Home from "./Home";
import Profile from "./Profile";


const Stack = createStackNavigator();

export default function Index({ navigation }) {

    return (

        <NavigationContainer>
            <Stack.Navigator
                headerMode='none'
            >
                {/* <Stack.Screen name="Splash" component={Splash} /> */}

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Dashboard" component={Dashboard} />

            </Stack.Navigator>
        </NavigationContainer >
    );
}
