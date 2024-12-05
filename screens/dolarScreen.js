import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ActivityIndicator } from 'react-native';

const DolarScreen = () => {
  const [cotacao, setCotacao] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCotacao = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
      const data = await response.json();
      setCotacao(data.USDBRL.bid);
    } catch (error) {
      alert('Erro ao buscar dados!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCotacao();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/dolar.png')} />
      <Text style={styles.description}>O dólar americano está:</Text>
      {loading ? <ActivityIndicator size="large" color="#00ff00" /> : <Text style={styles.value}>R$ {cotacao}</Text>}
      <View style={styles.button}>
        <Button title="Atualizar" onPress={fetchCotacao} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 232,
      height: 200,
      marginBottom: 20,
    },
    description: {
      fontSize: 20,
      color: '#fff',
      marginBottom: 10,
    },
    value: {
      fontSize: 30,
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
      marginTop: 20,
    },
  });

export default DolarScreen;
