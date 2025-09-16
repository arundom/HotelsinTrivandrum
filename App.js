import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Fontisto,Ionicons } from "@expo/vector-icons";


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

//<RestaurantsScreen />

export default function App() {
  return (

    <>
     <ThemeProvider theme={theme}>
                   
        {<NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = "restaurant";
                } else if (route.name === "Settings") {
                  iconName = "settings";
                } else if (route.name === "Map") {
                  iconName = "map-marker-alt";
                  return <Fontisto name="map-marker-alt" size={size} color={color} />;
                }
                //<Fontisto name="map-marker-alt" size={24} color="black" />
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
        }
      
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
      
    </>

  );
}
