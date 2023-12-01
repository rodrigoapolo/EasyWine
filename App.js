import { Text, StyleSheet, Button, View,TextInput, ImageBackground, Image, } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React, {useState} from 'react';
import Home from './Home'
import ListaVinho from './ListaVinho'
import Carrinho from './Carrinho'
import Favoritos from './Favoritos'
import CompraAprovada from './CompraAprovada'


const Stack = createNativeStackNavigator();

const Login = ({navigation}) => {

const [email, setEmail] = useState(' ');
const [password, setPassword] = useState('');
 const handleLogin = () => {
      // If ternárioo que faz a logica de login e password  
      email && password ? navigation.navigate("home") : alert("Por favor insira um e-mail ou senha para poder efetuar o login")
 };

  return (
      <View style={styles.container}>
        <View style={styles.mainCardView}>
        <Image style={styles.logo} source={require('./assets/logo-r.png')} />
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} color='#000000'/>
        </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login"  options={{ headerShown: false}} component={Login}  />
        <Stack.Screen name="home"  options={{ headerShown: false}} component={Home}  />
        <Stack.Screen name="listaVinho"  options={{ headerShown: true}} component={ListaVinho}  />
        <Stack.Screen name="carrinho"  options={{ headerShown: true}} component={Carrinho}  />
        <Stack.Screen name="favoritos"  options={{ headerShown: true}} component={Favoritos}  />
        <Stack.Screen name="compraAprovada"  options={{ headerShown: true}} component={CompraAprovada}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5D2029'
 },
 title: {
    fontSize: 24,
    marginBottom: 20,
    color:'black'
 },
 input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
 },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 6
  },
  mainCardView: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    //marginTop: 6,
    //marginBottom: 6,
    //marginLeft: 16,
    //marginRight: 16,
    width: 300,
    height: 350,
  }
});
