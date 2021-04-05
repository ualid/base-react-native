import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Right,
  Form, 
  Spinner,
  Text
} from "native-base";
import styles from "./styles";
import {APIService, initAPIService} from "../../services/api.service";
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { signin } from '../../actions/login'
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.2.128:3333/',
});

class Login extends Component {
  state = {email: "123", password: "321", error: "", loading: false}

  handlerText = (name, text)  => {
    this.setState({
        [name]: text
    });
  };
  handleSignInPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
    } else {
      try {
        await this.setState({loading: true});
     
        const responseLogin = await API.post('/sessions',{
          email: "ualid@live.com",//this.state.email,
          password: "123456",//this.state.password,
        });
        
        const paramsLogin = {email:  this.state.email, token: responseLogin.data.token};
        
        this.props.dispatch(signin(paramsLogin));
        initAPIService({...paramsLogin})
        await this.setState({loading: false});
        Actions.home();
      } catch (_err ) {
        await this.setState({loading: false});
        console.log('error ', _err)
        this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
      }
    
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
                onChangeText={text  => this.handlerText("email", text)}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry 
                onChangeText={text => this.handlerText("password", text)}
              />
            </Item>
          </Form>
            {this.state.error.length !== 0 && <Label>{this.state.error}</Label>}
          <Button onPress={this.handleSignInPress}  block style={{ margin: 15, marginTop: 50 }}>
          {!this.state.loading &&
            <Text>Sign In</Text>
          }
          {this.state.loading &&
            <Spinner color="white" />
          }
          </Button>
        </Content>
      </Container>
    );
  }
}


function mapStateToProps(state, props) {
  return {
    ...state,
    ...props
  };
}
 

export default connect(mapStateToProps)(Login);
