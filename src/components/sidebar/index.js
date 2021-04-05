import React, { Component } from "react";
import {
  Content,
  Text,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";
import {
  FlatList,
  Image
} from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
import APIMenuService from "../../services/menuService";
import { retriveMenu } from "../../actions/menu";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
  {
    name: "Anatomy",
    route: "home",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
  {
    name: "Header",
    route: "Header",
    icon: "arrow-up",
    bg: "#477EEA",
    types: "11"
  },
  {
    name: "Footer",
    route: "Footer",
    icon: "arrow-down",
    bg: "#DA4437",
    types: "4"
  },
  {
    name: "Accordion",
    route: "NHAccordion",
    icon: "repeat",
    bg: "#C5F442",
    types: "5"
  },
  {
    name: "Actionsheet",
    route: "Actionsheet",
    icon: "easel",
    bg: "#C5F442"
  },
  {
    name: "Badge",
    route: "NHBadge",
    icon: "notifications",
    bg: "#4DCAE0"
  },
  {
    name: "Button",
    route: "NHButton",
    icon: "radio-button-off",
    bg: "#1EBC7C",
    types: "9"
  },
  {
    name: "Card",
    route: "NHCard",
    icon: "keypad",
    bg: "#B89EF5",
    types: "8"
  },
  {
    name: "Check Box",
    route: "NHCheckbox",
    icon: "checkmark-circle",
    bg: "#EB6B23"
  },
  {
    name: "Date Picker",
    route: "NHDatePicker",
    icon: "calendar",
    bg: "#EB6B23"
  },
  {
    name: "Deck Swiper",
    route: "NHDeckSwiper",
    icon: "swap",
    bg: "#3591FA",
    types: "2"
  },
  {
    name: "Fab",
    route: "NHFab",
    icon: "help-buoy",
    bg: "#EF6092",
    types: "2"
  },
  {
    name: "Form & Inputs",
    route: "NHForm",
    icon: "call",
    bg: "#EFB406",
    types: "12"
  },
  {
    name: "Icon",
    route: "NHIcon",
    icon: "information-circle",
    bg: "#bfe9ea",
    types: "4"
  },
  {
    name: "Layout",
    route: "NHLayout",
    icon: "grid",
    bg: "#9F897C",
    types: "5"
  },
  {
    name: "List",
    route: "NHList",
    icon: "lock",
    bg: "#5DCEE2",
    types: "8"
  },
  {
    name: "ListSwipe",
    route: "ListSwipe",
    icon: "code-working",
    bg: "#C5F442",
    types: "3"
  },
  {
    name: "Picker",
    route: "NHPicker",
    icon: "arrow-dropdown",
    bg: "#F50C75"
  },
  {
    name: "Radio",
    route: "NHRadio",
    icon: "radio-button-on",
    bg: "#6FEA90"
  },
  {
    name: "SearchBar",
    route: "NHSearchbar",
    icon: "search",
    bg: "#29783B"
  },
  {
    name: "Segment",
    route: "Segment",
    icon: "menu",
    bg: "#0A2C6B",
    types: "3"
  },
  {
    name: "Spinner",
    route: "NHSpinner",
    icon: "navigate",
    bg: "#BE6F50"
  },
  {
    name: "Tabs",
    route: "NHTab",
    icon: "home",
    bg: "#AB6AED",
    types: "3"
  },
  {
    name: "Thumbnail",
    route: "NHThumbnail",
    icon: "image",
    bg: "#cc0000",
    types: "2"
  },
  {
    name: "Toast",
    route: "NHToast",
    icon: "albums",
    bg: "#C5F442",
    types: "6"
  },
  {
    name: "Typography",
    route: "NHTypography",
    icon: "paper",
    bg: "#48525D"
  }
];

class SideBar extends Component {
  componentWillMount() {
    APIMenuService.get().then(response => {
      console.log('response ', response)
     this.props.dispatch(
      retriveMenu({
        ...response
      })
    );
  })
  .catch(error => {
     console.log('error ', error)
  });
  }

  renderItem = ({item}) => {
    return (
      <ListItem
      button
      noBorder
      onPress={() => Actions[item["route"]]()}
      >
      <Left>
        <Icon
          active
          name={item.icon}
          style={{ color: "#777", fontSize: 26, width: 30 }}
        />
        <Text style={styles.text}>
          {item.name}
        </Text>
      </Left>
   
    </ListItem>
    )
  }
  
  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />
          <FlatList
          keyExtractor={item => item.name}
          data={datas}
          renderItem={this.renderItem}
        />
         
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('state in menu ', state, ' props ', props)
  return {
    ...state,
    ...props
  };
}

export default connect(mapStateToProps)(SideBar);
