import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import React from 'react';

export default function Carrinho({ navigation }) {
     const handleNavigate = () => {
      navigation.navigate("compraAprovada");
  };
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.paragraph}>Revise os dados da compra </Text>
      
      <Image style={styles.rowContainer} source={require('./assets/branco.png')} />
      <Text style={styles.paragraph}>Vinho Branco Pizzorno  - R$ 59,80 - 1 un.</Text>
      
      <View style={styles.inputView}>
        <TextInput style={styles.textInput} placeholder='Forma de Pagamento * '/>
        <TextInput style={styles.textInput} placeholder='Adicionar Endereço * '/>
      </View>

      <TouchableOpacity style={styles.buyButton} onPress={handleNavigate}> 
        <Text style={styles.textButton}>FINALIZAR COMPRA</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: '30%',
  },
  paragraph: {
    margin: 10,
    fontSize: 13,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginStart: 20,
  },
  textInput: {
    backgroundColor: '#e9e9e9',
    color: 'red',
    fontSize: 15,
    height: 50,
    width: 300,
    marginBottom: 14,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 4,
  },
  
  inputView: {
    display: 'flex',
    alignContent: 'center',
    marginTop: 100,
  },

  buyButton: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 20,
    height: 50,
    width: 300,
    marginTop: 20,
    paddingHorizontal: 10,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4
    }, 

  textButton: {
    alignSelf: 'center',
    color: 'white'
  },

  rowContainer: {
    alignSelf: 'center',
    //justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 20,
    margin: 2,
    
    },
});
