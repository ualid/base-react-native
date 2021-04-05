import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ProfileScreen1 from './screen1';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
export default class Profile extends Component {
  render() {
    return (
  
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>

        <Content>
        <ProfileScreen1 />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(47,44,60,1)',
  },
});
