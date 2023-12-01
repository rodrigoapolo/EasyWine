import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import {StyleSheet, View, Image, TextInput,  ScrollView} from 'react-native';


export default function Perfil({navigation}){
return(
<View>
  <View style={styles.avatartContainer}>
    <Text style={styles.nomeavatar}>Rogério</Text>
    <Image style={styles.image} source={require('./assets/avatar-man.png')} />
  </View>

  <View style={styles.containerMenu}>
    <Text style={styles.paragraph}>Meus Pedidos</Text>
    <Text style={styles.textSub}>Histórico e Status dos Pedidos</Text>
    <View style={styles.linha}></View>
  </View>

  <View style={styles.containerMenu}>
    <Text style={styles.paragraph}>Favoritos</Text>
    <Text style={styles.textSub}>Meus produtos Favoritos</Text>
    <View style={styles.linha}></View>
  </View>

  <View style={styles.containerMenu}>
    <Text style={styles.paragraph}>Endereços</Text>
    <Text style={styles.textSub}>Meus endereços de entrega</Text>
    <View style={styles.linha}></View>
  </View>

  <View style={styles.containerMenu}>
    <Text style={styles.paragraph}>Pagamentos</Text>
    <Text style={styles.textSub}>minha carteira</Text>
    <View style={styles.linha}></View>
  </View>

  <View style={styles.containerMenu}>
    <Text style={styles.paragraph}>Meus Dados</Text>
    <Text style={styles.textSub}>minhas informações da conta</Text>
    <View style={styles.linha}></View>
  </View>

  <View style={styles.containerMenu}>
    <Text style={styles.paragraph}>Ajudas</Text>
    <Text style={styles.textSub}>
      Dúvidas, reportar um problema ou sugestão
    </Text>
    <View style={styles.linha}></View>
  </View>

  <View style={styles.containerMenu}>
    <Text style={styles.paragraph}>Compartinhar Perfil</Text>
    <Text style={styles.textSub}>Convide amigo a conhecerem o EasyWine</Text>
    <View style={styles.linha}></View>
  </View>
</View>
)};


const styles = StyleSheet.create({
    image:{
      height: 100,
      width: 100,
      margin: 20,
      borderRadius: 20,
      justifyContent: 'center',
    },
      paragraph: {
    fontSize: 16,
     fontWeight: 'bold',
  },
   textSub: {
    fontSize: 13,
  },
  nomeavatar: {
    fontSize: 25,
  },
    avatartContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },linha: {
    height: 1,
    backgroundColor: 'black'
  },
  containerMenu: {
    marginTop: 10,
    marginStart: 20
  },
   textInput: {
        backgroundColor: '#e9e9e9',
        color: 'black',
        fontSize: 15,
        height: 40,
        width: 300,
        marginTop: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderColor: "black",
        borderRadius: 20,
    },
    container: {
    padding: 10,
  },
    imageInicio:{
      height: 150,
      width: 300,
      margin: 20,
      alignSelf: 'center',
      borderRadius: 20,
    },
    image2Inicio:{
      height: 140,
      width: 140,
      borderRadius: 20,
      margin: 4,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    }, containerCategoria: {
    flex: 10,
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
  },
  logo: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    width: 50,
    height: 60,
  },
  mainCardView: {
    height: 90,
    //alignItems: 'baseline',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    //justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
  },
  texto: {
    alignSelf: 'center',
    fontSize: 23,
  },
});
