import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={require('./assets/back.png')} />

          <Text style={styles.textInput}>Detalhes do Produto</Text>

          <Image style={styles.image2} source={require('./assets/fav.png')} />
        </View>

        <View style={styles.imageview}>
          <Image
            style={styles.image3}
            source={require('./assets/winebottle.jpg')}
          />
        </View>

        <View style={styles.descricao}>
          <Text>
            Fundada em 2002, a vinícola fica sob a Apelação de Origem de
            Minervois. Este exemplar tem uma grande complexidade aromática que
            une aromas...
          </Text>

          <View style={styles.rowContainer2}>
            <Text style={styles.paragraph}> Por: R$350,00</Text>
            <Button color="green" title="Comprar" />
          </View>
          <View style={styles.container}></View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 80,
    marginLeft: 20,
    color: '#800080',
  },
  rowContainer: {
    alignitems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  image: {
    height: 28,
    width: 28,
    marginRight: 30,
    marginLeft: 0,
    borderRadius: 20,
  },
  image2: {
    height: 28,
    width: 28,
    marginRight: 0,
    marginLeft: 50,
    borderRadius: 10,
  },
  image3: {
    height: 400,
    width: 300,
    alignitems: 'center',
    borderRadius: 10,
  },
  textInput: {
    color: 'black',
    fontSize: 20,
    height: 30,
    borderColor: 'black',
    borderRadius: 20,
  },
  container: {
    alignitems: 'center',
    marginTop: 50,
  },
  descricao: {
    backgroundColor: 'white',
    marginTop: 50,
    marginRight: 35,
    marginLeft: 35,
    alignSelf: 'center',
    borderRadius: 0,
  },
  rowContainer2: {
    alignitems: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
  imageview: {
    backgroundColor: 'white',
    marginTop: 30,
    alignSelf: 'center',
    borderRadius: 0,
  },
});
