import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import SwipeButton from 'rn-swipe-button';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Saiba mais sobre o IFAL 
        </Text>
        <SwipeButton
          disabled={false}

          swipeSuccessThreshold={70}
          height={45}

          width={330}

          title="Arraste o botão para saber"

          onSwipeSuccess={() => {
            alert('O campus Palmeira dos Índios foi inaugurado em 2 de agosto de 1993 e é um centro de referência de ensino técnico profissionalizante na região do agreste, atuando junto aos sistemas estaduais, municipais e outras agências de formação profissional.');
          }}

          railFillBackgroundColor="#e688a1"
          railFillBorderColor="#e688ff"
          thumbIconBackgroundColor="#ed9a73"
          thumbIconBorderColor="#ed9aff"
          railBackgroundColor="#bbeaa6"
          railBorderColor="#bbeaff"
        />
      </View>
      <Image
          source={{
            uri:
              'https://www2.ifal.edu.br/campus/palmeira/comunicacao/arquivos/logos-do-ifal-vertical.png/@@images/ac3e97aa-6806-4523-bc47-7bf3c0950b0f.png',
          }}
          style={styles.logoifal}
          />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,

  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'white'
  },
  logoifal: {
    width: 200,
    height: 200,
    left: 70,
    bottom: 240,
  },
});