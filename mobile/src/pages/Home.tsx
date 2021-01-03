import React from 'react';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons'
import mapMarker from '../images/map-marker.png';
import 
{ Container, CalloutContainer, CalloutText, Footer, FooterText,Button } 
from '../Styles/Home';

export default function Home() {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const navigation = useNavigation();

  function handleNavigateToDetails(){
    navigation.navigate('Details');
  }

  function handleNavigateToPosition(){
    navigation.navigate('Position');
  }

  return (
    <Container>
      <MapView
       provider={PROVIDER_GOOGLE}
       style={{width: width, height: height}}
       initialRegion={{
         latitude:-26.4404992,
         longitude:-53.5134208,
         latitudeDelta:0.008,
         longitudeDelta:0.008,
       }}
       >
         <Marker
         calloutAnchor={{
           x: 3.1,
           y: 0.9
         }}
          icon={mapMarker}
          coordinate={{
            latitude:-26.4404992,
            longitude:-53.5134208,
          }}
         >
           <Callout tooltip onPress={handleNavigateToDetails}> 
             <CalloutContainer>
               <CalloutText>
                 Lar das meninas
               </CalloutText>
             </CalloutContainer>
           </Callout>
         </Marker>
       </MapView>
       <Footer>
         <FooterText>
           2 orfatnatos encontrados
         </FooterText>
         <Button onPress={handleNavigateToPosition}>
           <Feather name="plus" size={20} color="#FFF"/>
         </Button>
       </Footer>
    </Container>
  );
}

