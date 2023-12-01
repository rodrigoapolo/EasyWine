import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  Button,
} from 'react-native';
import { SearchBar } from '@rneui/themed';

export default function ListaVinho({ navigation }) {
  const handlePress = () => {
    navigation.navigate('carrinho');
  };
  const [search, setSearch] = useState('');
  const updateSearch = (search) => {
    setSearch(search);
  };

  const DATA = [
    {
      id: 1,
      name: 'Vinho Carnivor',
      thumbnail: {
        path: 'https://m.media-amazon.com/images/I/61HJAvJu47L._AC_SL1500_.jpg',
        extension: 'png',
      },
      price: 'R$ 99,90',
    },
    {
      id: 2,
      name: 'Vinho Gato Negro',
      thumbnail: {
        path: 'https://m.media-amazon.com/images/I/51Ua1fg4qfL._AC_SL1302_.jpg',
        extension: 'png',
      },
      price: 'R$ 107,00',
    },

    {
      id: 3,
      name: 'Vinho Montes Taita',
      thumbnail: {
        path: 'https://bebidasdosul.com.br/9374-home_default/vinho-montes-taita-750ml.jpg',
        extension: 'png',
      },
      price: 'R$ 75,90',
    },
  ];

  const Personagem = ({ item, evento, link }) => (
    <View style={styles.view}>
      <Pressable onPress={evento}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />
        <Text style={styles.paragraph}>{item.name}</Text>
        <Text style={styles.paragraphsale}> {item.price} </Text>
      </Pressable>
      <View>
        <Button onPress={handlePress} color="green" title="Carrinho 🛒" />
      </View>
    </View>
  );

  const ExibirPersonagem = ({ item }) => (
    <Personagem
      item={item}
      evento={() =>
        alert(
          item.description == '' ? 'Personagem sem descrição' : item.description
        )
      }
      link={item.thumbnail.path}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar
          lightTheme
          placeholder="Pesquisar"
          onChangeText={updateSearch}
          value={search}
        />
      </View>
      <Text style={styles.title}> Favoritos ❤</Text>
      <View style={styles.rowContainer}>
        <FlatList
          data={DATA}
          renderItem={ExibirPersonagem}
          keyExtractor={(item) => item.id}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 800,
  },
  paragraph: {
    margin: 12,
    padding: 10,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#c4c4c4',
    borderRadius: 25,
  },
  tinyLogo: {
    width: 150,
    height: 500,
    alignSelf: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
  },
  paragraphsale: {
    margin: 12,
    padding: 10,
    fontSize: 14,
    color: '#800080',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#c4c4c4',
    borderRadius: 25,
  },
  view: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    margin: 12,
    padding: 10,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 25,
  },
  viewpequena:{}
});
