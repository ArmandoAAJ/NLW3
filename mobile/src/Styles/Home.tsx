import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const CalloutContainer = styled.View`
  width: 200px;
  height: 46px;
  padding-horizontal: 16px;
  background-color: 'rgba(255,255,255, 0.8)';
  border-radius: 16px;
  justify-content: center;
`;

export const CalloutText = styled.Text`
  color: #15c3d6;
  font-family: 'Nunito_700Bold';
`;

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background-color: #FFF;
  border-radius: 20px;
  height: 46px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.Text`
  color: #15c3d6;
  font-family: 'Nunito_700Bold';
`;

export const Button = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;