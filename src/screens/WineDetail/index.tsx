import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Vinho } from "../../types/vinho";
import styles from "./styles"

export default function WineDetail() {

  const navigation = useNavigation();
  const route = useRoute<any>();
  const vinho = route.params?.vinho as Vinho;

  return (

    <View style={styles.container} >

      <ScrollView>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("WineList")}>
          <Feather
            style={styles.left}
            name="chevron-left"
            size={20}
            color='black'
          />
        </TouchableOpacity>

        <Image source={require('../../images/logowine.png')} style={styles.wineimg} />

        <Image
          source={{ uri: vinho.image }}
          style={styles.rotulo}
        />

        <Text style={styles.titulo}> {vinho.name} </Text>

        <View style={styles.subtitle}>
          <Image
            source={{ uri: vinho.flag }}
            style={styles.flag}
          />
          <Text style={styles.country}> {vinho.country} </Text>
          <Text style={styles.type}> {vinho.type} </Text>
          <Text style={styles.classification}> {vinho.classification} </Text>
          <Text style={styles.size}> {vinho.size} {vinho.volume} </Text>
        </View>

        <Text style={styles.description}>Descrição</Text>

        <Text style={styles.text}> {vinho.sommelierComment} </Text>
      </ScrollView>
      <View style={styles.footer} >

        <View style={{ flexDirection: 'column' }} >
          <View style={styles.backgroundiscount}>
            <Text style={styles.discount}> {`${vinho.discount}% OFF`} </Text>
          </View>
          <Text style={styles.price}> {`R$ ${vinho.price}`} </Text>
          <Text style={styles.priceMember}> {`R$ ${vinho.priceMember}`} </Text>
          <Text style={styles.priceNonMember}> {`PREÇO NÃO-SÓCIO R$ ${vinho.priceNonMember}`} </Text>
        </View>

        <TouchableOpacity
          style={styles.areabtn}
          activeOpacity={0.8}>
          <Text style={styles.btn} >Adicionar</Text>
        </TouchableOpacity>

      </View>


    </View>

  );
}


