import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Calculadora from './pages/Calculadora';


const AppStack = createStackNavigator();


const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name='Login' component={Login}/>
                <AppStack.Screen name='Calculadora' component={Calculadora}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
