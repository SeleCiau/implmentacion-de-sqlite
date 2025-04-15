import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { obtenerLecturas, eliminarLectura, actualizarLectura } from '../lib/database';
import { styles } from '../styles/styles';

const Historial = () => {
  const [lecturas, setLecturas] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    cargarLecturas();
  }, []);

  const cargarLecturas = () => {
    obtenerLecturas((data) => {
      setLecturas(data);
    });
  };

  const eliminar = (id: number) => {
    Alert.alert(
      'Confirmación',
      '¿Estás seguro de que deseas eliminar esta lectura?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: () => {
            eliminarLectura(id)
              .then(() => cargarLecturas()) // Carga nuevamente las lecturas después de eliminar
              .catch((error) => console.error(error));
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  const actualizar = (id: number, ph: number, turbidez: number) => {
    Alert.alert(
      'Actualizar Lectura',
      '¿Deseas actualizar esta lectura?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Actualizar',
          onPress: () => {
            actualizarLectura(id, ph, turbidez)
              .then(() => cargarLecturas()) // Carga nuevamente las lecturas después de actualizar
              .catch((error) => console.error(error));
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Historial de Lecturas</Text>
      <FlatList
        data={lecturas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {`${new Date(item.fecha).toLocaleString()} | pH: ${item.ph} | Turbidez: ${item.turbidez}`}
            </Text>
            <View style={{ marginTop: 10 }}>
              <Button
                title="Eliminar"
                onPress={() => eliminar(item.id)}
                color="#FF6347"
              />
              <Button
                title="Actualizar"
                onPress={() => actualizar(item.id, item.ph, item.turbidez)}
                color="#4CAF50"
                style={{ marginTop: 10 }}
              />
            </View>
          </View>
        )}
      />
      <View style={{ marginTop: 20 }}>
        <Button title="Volver" onPress={() => router.back()} color="#757575" />
      </View>

      {/* Pie de página con los integrantes del equipo */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Integrantes del equipo: Canche Gomez Diego, Ciau Tuz Selena, Martin Arceo Yesenia,Moo Dzul Luis</Text>
      </View>
    </View>
  );
};

export default Historial;
