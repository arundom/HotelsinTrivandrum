import React,{useContext} from "react";
import { Searchbar,ActivityIndicator,MD2Colors } from "react-native-paper";
import { FlatList} from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

//margin-top: ${StatusBar.currentHeight}px;


//padding: 16px;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

/*
const RestaurantListContainer = styled.View`
  flex: 1;  
  padding: ${(props) => props.theme.space[3]};
`;

<RestaurantListContainer> </RestaurantListContainer>

*/
export const RestaurantsScreen = () => {

  //const restaurantContext = useContext(RestaurantsContext);
  //console.log(restaurantContext)

  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  console.log(error);

  // Print restaurant names to console
  if (restaurants && Array.isArray(restaurants)) {
    restaurants.forEach((restaurant) => {
      console.log(restaurant.name);
    });
  }
 
  return (
    <SafeArea>

        <SearchContainer>
            <Searchbar />
        </SearchContainer>
    
    {/*
        <RestaurantList
            //data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}]}
            data={restaurantContext.restaurants}
            renderItem={({item}) => (
              <Spacer position="bottom" size="large">        
                  <RestaurantInfoCard restaurant={item} />
              </Spacer>
            )}
            keyExtractor={item => item.toString()}
           // contentContainerStyle={{ padding: 16 }}        
        />      
      */}
      
      {isLoading ? (
        <ActivityIndicator size="large" animating={true} color={MD2Colors.blue300} />
      ) : (
      
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />              
            </Spacer>
          );
        }}
         keyExtractor={(item) => item.name}
         
      />
    )}

  </SafeArea>

  );
};


/*
    
    Code Version 1 : Display one card only 
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});


<SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard/>
    </View>
  </SafeAreaView>

*/