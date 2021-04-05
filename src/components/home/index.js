import React, { Component } from "react";
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
import { ListItem} from "react-native-elements";
import {
  FlatList
} from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import APISchoolService from "../../services/schoolService";
import { retriveSchools } from "../../actions/schools";
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  componentWillMount() {
    APISchoolService.get({latitude: "-27.200768", "longitude":"-49.624018"}).then(response => {
     this.props.dispatch(
      retriveSchools({
        ...response
      })
    );
  })
  .catch(error => {
     console.log('error ', error)
  });
  }
  renderItem = ({ item, index }) => {
    const {schools} = this.props
     
    return (
    <ListItem
      title={schools[item].title}
      subtitle={schools[item].address}
      leftAvatar={{
        title: 'A'
      }}
      onPress={() => Actions.profile()}
      bottomDivider
    />
  )};

  keyExtractor = (item, index) =>   this.props.schools[item].id + "_" + index;
  render() {
    const {schools} = this.props;
   
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
            <Title>List</Title>
          </Body>
          <Right />
        </Header>

        <Content>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={Object.keys(schools)}
          renderItem={this.renderItem}
        />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state, props) {
  //onsole.log('state ',state, ' props ', props)
  return {
    ...state,
    ...props
  };
}

export default connect(mapStateToProps)(Home);
