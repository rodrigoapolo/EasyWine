import { Text, SafeAreaView, TouchableOpacity, StyleSheet,Button, Image, TextInput, ImageBackground, View } from 'react-native';
import React from 'react';

export default function Inicio({navigation}) {
  const handlePress = () => {
      navigation.navigate("listaVinho");
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput 
          style={styles.textInput}
          placeholder="Pesquisa Vinho, marca..."
          placeholderTextColor="grey"
          clearButtonMode="always"
        />
      </View>

      <Text style={styles.paragraph}>
        Novidades da Semana 🔥
      </Text>

    <TouchableOpacity onPress={handlePress}>
      <View>
        <Image
          style={styles.image}
          source={require('./assets/promo5.png')}
        />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.rowContainer}>
       <Image
        style={styles.image2}
        source={require('./assets/promo1.jfif')} />
       <Image
        style={styles.image2}
        source={require('./assets/promo2.jpg')} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={handlePress}>
      <View>
       <Image
        style={styles.image}
        source={require('./assets/promo3.webp')} />
      </View>

       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding: 20,
  },
  paragraph: {
    margin: 10,
    fontSize: 13,
    fontWeight: 'bold',
    marginStart: 20,
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
    image:{
      height: 150,
      width: 300,
      margin: 20,
      borderRadius: 20,
    },
    image2:{
      height: 150,
      width: 147,
      borderRadius: 20,
      margin: 4,
      
    },
    rowContainer: {
        flexDirection: 'row',
        marginStart: 16,
       
    },

});

