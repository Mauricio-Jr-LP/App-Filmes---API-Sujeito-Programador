import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';

import Detalhes from '../Detalhes';

export default function Filmes({ data }){
  const [visibleModal, setVisibleModal] = useState(false);

  return(
    <View>
      
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>

        <Image
        source={{ uri: data.foto}}
        style={styles.capa}
        />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={ () => setVisibleModal(true) }>
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Modal  transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={ () => setVisibleModal(false) } />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#1b1b1b',
    margin: 15,
    elevation: 2,
    borderRadius: 15
  },
  capa:{
    height: 250,
    zIndex:2,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  titulo:{
    padding: 15,
    fontSize: 18,
    color: '#FF0043'
  },
  areaBotao:{
    alignItems: 'flex-end',
    marginTop: -55,
    zIndex: 9
  },
  botao:{
    width: 100,
    backgroundColor: '#FF0043',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  botaoTexto:{
    color: '#FAFAFA ',
    textAlign: 'center'
  }
});