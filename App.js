import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

//import { NavigationContainer } from "@react-navigation/native";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/*
// Below code is for Navigation setup
const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
*/

export default function App() {
  return (

    <>
     <ThemeProvider theme={theme}>
             <RestaurantsScreen />
        
        {/*<NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      */}
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
      
    </>

  );
}
