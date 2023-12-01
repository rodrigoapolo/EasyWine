import { Text, SafeAreaView, StyleSheet,View,Image,Button } from 'react-native';



export default function CompraAprovada({ navigation }) {
     const handlePress = () => {
       
      navigation.navigate("home");
  };
  
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.viewimage2}>
        <Image style={styles.image2} source={require('./assets/verificar.png')} />
        <Text style={styles.paragraph}>
        Compra realizada com sucesso 🥂
      </Text>
      </View>
      <View style={styles.viewimage2}>
      <Button onPress={handlePress} color='green' title="OK"/>  
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f',
    padding: 0,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:70,
  },
    rowContainer: {
    alignitems: 'center',
    flexDirection: 'row',
    marginTop:5,
  },
  image: {
    height: 35,
    width: 35,
    marginRight: 30,
    marginLeft: 0,
    borderRadius: 20,
  },    image2: {
    height: 300,
    width: 300,
    marginRight: 0,
    marginTop:100,
    marginBottom:50,
    borderRadius: 0,
    alignSelf:'center'
    ,
  },viewimage2: {
    alignitens:'center',
    justifyContent: 'center',
    padding: 8,

  },
});
