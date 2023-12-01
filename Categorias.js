import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const styles = StyleSheet.create({
  container: {
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
//    justifyContent: 'left',
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

const data = [
  { key: 'Tintos' },
  { key: 'Brancos' },
  { key: 'Suaves' },
  { key: 'Rosés' },
];

export default function ListaCategorias({navigation}){

 const handlePress = () => {
      navigation.navigate("listaVinho");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.mainCardView}>
          <Image style={styles.logo} source={require('./assets/tinto.png')} />
          <Text style={styles.texto}> Tintos</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View style={styles.mainCardView}>
          <Image style={styles.logo} source={require('./assets/rose.jpg')} />
          <Text style={styles.texto}> Rosés</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View style={styles.mainCardView}>
          <Image style={styles.logo} source={require('./assets/branco.png')} />
          <Text style={styles.texto}> Brancos</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View style={styles.mainCardView}>
          <Image style={styles.logo} source={require('./assets/importado.png')} />
          <Text style={styles.texto}> Importados</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View style={styles.mainCardView}>
          <Image style={styles.logo} source={require('./assets/nacional.png')} />
          <Text style={styles.texto}> Nacionais</Text>
        </View>
      </TouchableOpacity>

        <TouchableOpacity onPress={handlePress}>
        <View style={styles.mainCardView}>
          <Image style={styles.logo} source={require('./assets/suave.png')} />
          <Text style={styles.texto}> Suaves</Text>
        </View>
      </TouchableOpacity>

        <TouchableOpacity onPress={handlePress}>
        <View style={styles.mainCardView}>
          <Image style={styles.logo} source={require('./assets/tinto.png')} />
          <Text style={styles.texto}> Secos</Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};



//export default function App() {
//}
