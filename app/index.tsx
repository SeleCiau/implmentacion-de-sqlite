import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { initDatabase, insertarLectura } from '../lib/database';
import { styles } from '../styles/styles'; // Asegúrate de que esta ruta sea correcta

const Index = () => {
  const [ph, setPh] = useState<string>('');
  const [turbidez, setTurbidez] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    initDatabase();
  }, []);

  const guardarLectura = () => {
    if (!ph || !turbidez) {
      Alert.alert("Campos incompletos", "Por favor, completa ambos campos (pH y Turbidez)");
      return;
    }

    const fecha = new Date().toISOString();
    insertarLectura(parseFloat(ph), parseFloat(turbidez), fecha);
    setPh('');
    setTurbidez('');
  };

  const irAHistorial = () => {
    router.push('/historial');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoreo de Calidad del Agua</Text>

      <Image
        source={{ uri: 'https://cdn-icons-png.freepik.com/512/11330/11330419.png' }}
        style={styles.image}
      />

      <Text style={styles.label}>pH del agua:</Text>
      <TextInput
        value={ph}
        onChangeText={setPh}
        keyboardType="decimal-pad"
        placeholder="Ej: 7.4"
        style={styles.input}
      />

      <Text style={styles.label}>Turbidez:</Text>
      <TextInput
        value={turbidez}
        onChangeText={setTurbidez}
        keyboardType="decimal-pad"
        placeholder="Ej: 5.2"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Guardar Lectura" onPress={guardarLectura} color="#4CAF50" />
        </View>
        <View style={styles.button}>
          <Button title="Ver Historial de Lecturas" onPress={irAHistorial} color="#4CAF50" />
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={{ textAlign: 'center', fontSize: 12, color: '#555' }}>
          Integrantes del equipo: Canche Gomez Diego, Ciau Tuz Selena, Martin Arceo Yesenia, Moo Dzul Luis
        </Text>
      </View>
    </View>
  );
};

export default Index;
