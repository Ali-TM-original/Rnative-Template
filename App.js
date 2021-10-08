import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,
  Settings,
  HomeStack,
  SettingsStack,
  Account,
  login,
  Register,
} from "./src/screens"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const homestackcomp = createNativeStackNavigator();
const settingsstackcomp = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const LoginStack = createNativeStackNavigator();

const HOMESTACK=({navigation, route})=>{
  return(
    <homestackcomp.Navigator initialRouteName="Home">
      <homestackcomp.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <homestackcomp.Screen name="Home-Stack" component={HomeStack} options={{headerShown:false}}/>
    </homestackcomp.Navigator>
  )
}

const SETTINGSSTACK=()=>{
  return(
    <settingsstackcomp.Navigator initialRouteName="Settings" >
      <settingsstackcomp.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
      <settingsstackcomp.Screen name="Settings-Stack" component={SettingsStack} options={{headerShown:false}}/>
    </settingsstackcomp.Navigator>
  )
}

const TABNAVIGATOR=()=>{
  return(
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HOMESTACK} options={{headerShown: false}}/>
      <Tab.Screen name="Settings" component={SETTINGSSTACK} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

const DRAWERNAVIGATION=()=>{
  return(
    <Drawer.Navigator initialRouteName="tabs">
      <Drawer.Screen name="tabs" component={TABNAVIGATOR} options={{headerShown: false}}/>
      <Drawer.Screen name="Account" component={Account} options={{headerShown: false}}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator initialRouteName="Login" >
        <LoginStack.Screen name="Home-Drawer" component={DRAWERNAVIGATION} options={{headerShown:false}}/>
        <LoginStack.Screen name="Login" component={login} options={{headerShown:false}}/>
        <LoginStack.Screen name="Register" component={Register} options={{headerShown:false}}/>
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}