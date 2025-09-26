import React from "react";

/*
  import styled from "styled-components/native";
  import { Text , Image, View  } from "react-native";
  import { Card } from "react-native-paper";
*/

import { Text } from "../../../components/typography/text.component";

import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

/*
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};  
`;

// padding: 20px;
// background-color: white;
const RestaurantCardCover = styled(Card.Cover)`
   padding: ${(props) => props.theme.space[3]};  
   background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;


//padding: 16px;
const Title = styled(Text)`  
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
*/

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Aryas Hotel",
    icon= "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    vicinity = "Near St. Mary's School,Pattom Trivandrum",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily=false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
        
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
          <Info>
              
              <Text variant="label">{name}</Text>
              <Section>
              
              <Rating>
                {ratingArray.map((_,i) => (
                <SvgXml key={`star-${i}`} xml={star} width={20} height={20} />
                ))}
              </Rating>

              <SectionEnd>
                {isClosedTemporarily ? (                  
                  <Text variant="error">CLOSED TEMPORARILY</Text>
                ) : (
                  <Text variant="label" style={{ color: "green" }}>
                    OPEN NOW
                  </Text>
                )}
            
                
              
              <Spacer position="left" size="large">
                 {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
            
              <Spacer position="left" size="large">                
                <Icon source={{ uri: icon }} />
              </Spacer>   
              
              </SectionEnd>    

              </Section>
              
              <Address>{vicinity}</Address>
          </Info>
      </RestaurantCard>

  );

};

/* 
  <Text style={styles.title}>{name}</Text>

  <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />     
    </Card>
*/

/*
const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});

<View style={{ paddingLeft: 16 }} />
<View style={{ paddingLeft: 16 }} />

  <Spacer variant="left.medium" />
    {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

  <Spacer variant="left.large" />
    <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />


    <Text variant="label" style={{ color: "red" }}>
       CLOSED TEMPORARILY
    </Text>

    <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />

    <Title>{name}</Title>

*/