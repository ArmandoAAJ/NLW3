import React from 'react';
import { Container, Title} from '../Styles/Header';
import {BorderlessButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';
interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

export default function Header({title, showCancel}: HeaderProps){
  const navigation = useNavigation();

  function handleGoBackHome(){
    navigation.navigate('Home');
  }
  return (
  <Container>
    <BorderlessButton onPress={navigation.goBack}>
      <Feather name="arrow-left" size={24} color="#15b5d6"/>
    </BorderlessButton>
    <Title>
      {title}
    </Title>
    <BorderlessButton onPress={handleGoBackHome}>
      {!showCancel && (
        <Feather name="x" size={24} color="#ff669d"/>
      )}
    </BorderlessButton>
  </Container>
  )
}

