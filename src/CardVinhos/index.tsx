import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Vinho } from "../types/vinho";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"

interface CardVinhosProps {
  vinho: Vinho,
}

export default function Vinhos({ vinho }: CardVinhosProps) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Image
          source={{ uri: vinho.image }}
          style={styles.capa}
        />
        <Text style={styles.titulo}> {vinho.name} </Text>
        <Text style={styles.price}> {`R$ ${vinho.price}`} </Text>
        <View style={styles.backgroundiscount}>
          <Text style={styles.discount}> {`${vinho.discount}% OFF`} </Text>
        </View>
        <Text style={styles.sociowine}> SÓCIO {"\n"} WINE </Text>
        <Text style={styles.priceMember}> {`R$ ${vinho.priceMember}`} </Text>
        <Text style={styles.priceNonMember}> {`NÃO SÓCIO R$ ${vinho.priceNonMember}`} </Text>

      </View>
      <TouchableOpacity
        style={styles.areabtn}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("WineDetail", { vinho })}
      >
        <Text style={styles.btn} >Adicionar</Text>
      </TouchableOpacity>

    </View>
  );
}


