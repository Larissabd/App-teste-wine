import React, { useState, useEffect } from 'react';
import { FlatList, Text, TextInput, View, Image, ActivityIndicator } from 'react-native';
import styles from "./styles"
import api from "../../services/api"
import Vinhos from "../../CardVinhos/index"
import { Vinho } from "../../types/vinho";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function WineList() {

  const navigation = useNavigation();

  const [vinhos, setVinhos] = useState([]);
  const [loading, setIsLoading] = useState(true);


  async function getWine() {
    try {
      const response = await api.get('products?page=1&limit=10');
      setVinhos(response.data.items);
    } finally {
      setIsLoading(false);
    }

  }
  useEffect(() => {
    getWine()
  }, []);


  function renderItem({ item }: { item: Vinho }) {
    return <Vinhos vinho={item} />
  }


  if (loading) {
    return (
      <View style={styles.load} >
        <ActivityIndicator color="purple" size={40} />
      </View>
    )
  }

  return (
    <View>
      <View style={styles.header} >
        <Image source={require('../../images/winename.png')} style={styles.wine} />
        <Image source={require('../../images/logowine.png')} style={styles.logo} />
      </View>

      <TextInput
        placeholder="         O que você está procurando?"
        style={styles.input}
      />
      <Feather
        style={{ left: 25 }}
        name="search"
        size={20}
        color='black'
      />

      <Text style={styles.produtos}> 10 produtos encontrados </Text>

      <FlatList
        style={styles.background}
        data={vinhos}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={renderItem}

      />

    </View>

  );
}





