import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import Home from './pages/Home';
import Details from './pages/Details';
import Position from './pages/CreateOrphanage/OrphanagePosition';
import Data from './pages/CreateOrphanage/OrphanageData';

import Header from '../src/components/Header';


export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
      >
        <Screen name="Home" component={Home}/>
        <Screen 
        name="Details" 
        component={Details}
        options={{
          headerShown: true,
          header: () => <Header title="Orfanato" showCancel/>
        }}
        />
        <Screen name="Position" component={Position}
          options={{
          headerShown: true,
          header: () => <Header title="Selecione no mapa" />
        }}
        />
        <Screen name="Data" component={Data}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados"/>
          }}     
        />
      </Navigator>
    </NavigationContainer>
  )
}