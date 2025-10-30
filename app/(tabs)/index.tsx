import { Image } from 'expo-image';
import { StyleSheet, TextInput } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import Sumar from '@/components/Sumar';
import { ThemedView } from '@/components/themed-view';
import { useEffect, useState } from 'react';

export default function HomeScreen() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);

  useEffect (() => {
    if (altura > 0) {
      setImc(peso / (altura * altura));
    } else {
      setImc(0);
    }
  }, [peso, altura]); 

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
            
     <ThemedView style={styles.stepContainer}>
          
          <TextInput keyboardType="numeric" placeholder="Peso (kg)" onChangeText={text => setPeso(Number(text))} />
          <Sumar prevPeso={peso}  setPeso={setPeso} prevAltura={altura}  setAltura={setAltura} nombreVariable="peso" />
          <TextInput keyboardType="numeric" placeholder="Altura (m)" onChangeText={text => setAltura(Number(text))} />
          <Sumar prevAltura={altura} setPeso={setPeso} setAltura={setAltura} nombreVariable="altura" />
         
         <text>
          
          Peso: {peso} kg{"\n"}
          Altura: {altura} m{"\n"}
          IMC: { imc.toFixed(2) } 

         </text>
         
      </ThemedView>     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
