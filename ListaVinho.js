import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Pressable, Image, Button} from 'react-native';
import { SearchBar } from '@rneui/themed';




export default function ListaVinho({navigation}) {
const handlePress = () => {

      navigation.navigate("carrinho");
  };
const [search, setSearch] = useState("");
const updateSearch = (search) => {
  setSearch(search);};


  const DATA = [
    {
      "id": 1009220,
      "name": "Finca La Daniela Reserva Malbec 2019",
      "description": "Finca La Daniela Reserva é uma linha elaborada pela Bodegas Barberis, uma vinícola familiar movida pela paixão e pela filosofia de produção que une tradição e modernidade que tem o compromisso de produzir de forma mais limitada para garantir a alta qualidade em todos os seus vinhos. A linha Finca La Daniela Reserva é produzida apenas nas safras excepcionais, alcançando, assim, vinhos de extrema elegância e complexidade. Além disto, tem como objetivo expressar o equilíbrio perfeito entre uva, terroir e o envelhecimento em carvalho para montar uma peça única e elegante. Este Malbec é um tinto robusto que esbanja sabor de frutas vermelhas maduras com nuances da barrica, com bom corpo, taninos maduros e redondos e final longo e persistente. Um exemplar para surpreender os apaixonados pela Malbec!",
      "modified": "2020-04-04T19:01:59-0400",
      "thumbnail": {
        "path": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/29608-01.png",
        "extension": "png"
      },
    "price":'R$ 99,90'
    },
    {
      "id": 1010914,
      "name": "Domaine Sainte Léocadie Leukadios Rouge 2017",
      "idade" : 44,
      "description": "Fundada em 2002, a vinícola fica sob a Apelação de Origem de Minervois. Este exemplar tem uma grande complexidade aromática que une aromas mediterrâneos e de frutas negras com sutis notas de menta. Em boca é uma bela concentração de especiarias e notas de frutas em compota, taninos sedosos e um longo final.",
      "modified": "2014-03-05T13:17:50-0500",
      "thumbnail": {
        "path": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/23178-01.png",
        "extension": "png"
      },
      "price":'R$ 179,00'
    },
    
    {
      "id": 1017295,
      "name": "Já Pias",
      "description": "Este rótulo é uma verdadeira raridade para os amantes de um vinho com sabor aveludado e aquela acidez bem suave. Equilibra a fruta vermelha com taninos muito macios.",
      "modified": "2013-09-18T11:15:29-0400",
      "thumbnail": {
        "path": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/24552-01.png",
        "extension": "png"
      },
      "price":'R$ 18,90'
    },
    {
      "id": 1017575,
      "name": "Cabriana D.O. Terra Alta 2017",
      "description": "Cinco gerações da Família Torres trabalharam em Terra Alta. Cabriana é fruto de um profundo conhecimento desta região única estendendo-se entre o Mediterrâneo e as montanhas escarpadas de Els Portas. Uma seleção final dos terroirs mais pobres e dessas vinhas mais velhas mostraram qualidade excepcional. A cabra montesa hispânica (Capra pyrenaica), símbolo emblemático desta área, representa o caráter indomável e identidade única destes vinhedos entre montanhas, bem como a elegância deste vinho.",
      "modified": "2014-11-17T17:46:57-0500",
      "thumbnail": {
        "path": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/25073-01.png",
        "extension": "png"
      },
      "price":'R$ 124,90'
    }
  ]

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
          <Text style={styles.paragraph}>{item.description}</Text>
          <Text style={styles.paragraphsale}> {item.price}  </Text>
        </Pressable>
        <Button onPress={handlePress} color='green' title="Comprar"/>
      </View>
  );

  const ExibirPersonagem = ({ item }) => (
      <Personagem
          item={item}
          evento={() => alert(item.description == "" ? "Personagem sem descrição" : item.description)}
          link={item.thumbnail.path} />
  );

  return (
  
      <SafeAreaView style={styles.container}>
        <View>
          <SearchBar
            lightTheme
            placeholder="Pesquisar"
            onChangeText={updateSearch}
            value={search}/>
        </View>
        <View style={styles.rowContainer}>
        <FlatList
            data={DATA}
            renderItem={ExibirPersonagem}
            keyExtractor={item => item.id}
        />
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,

  },
  paragraph: {
    margin: 12,
    padding: 10,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#c4c4c4',
    borderRadius: 25
  },
  tinyLogo: {
    width: 276,
    height: 500,
    alignSelf: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius:20
    
  },
  paragraphsale: {
    margin: 12,
    padding: 10,
    fontSize: 14,
    color: '#800080',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#c4c4c4',
    borderRadius: 25
  },
  view: {
  margin:20,
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#f2f2f2',
  padding: 25,
  borderRadius: 10,

  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});


