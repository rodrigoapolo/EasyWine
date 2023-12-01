import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import { StyleSheet, View, Image, TextInput, ScrollView } from 'react-native';
import Inicio from './Inicio';
import ListaCategorias from './Categorias';
import Perfil from './Perfil';
import Favoritos from './Favoritos'

export default function Home ({navigation}){
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <View>
            <Inicio navigation={navigation}/>
          </View>
        </TabView.Item>

        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <ListaCategorias navigation={navigation} />
        </TabView.Item>

        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Favoritos navigation={navigation}/>
        </TabView.Item>

        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Perfil navigation={navigation}/>
        </TabView.Item>
      </TabView>

      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: '#F00022',
          height: 4,
        }}
        style={{ backgroundColor: '#5D2029' }} 
        variant="error">
        
        <Tab.Item
          title="Inicio"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'menu', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Categorias"
          titleStyle={{ fontSize: 9 }}
          icon={{ name: 'menu', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Favoritos"
          titleStyle={{ fontSize: 10 }}
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />

        <Tab.Item
          title="Perfil"
          titleStyle={{ fontSize: 11 }}
          icon={{ name: 'person', type: 'ionicon', color: 'white' }}
        />
      </Tab>
    </>
  );
};

