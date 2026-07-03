import { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HEXAGRAMS } from './hexagrams';

export default function App() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * HEXAGRAMS.length));
  const opacity = useRef(new Animated.Value(1)).current;
  const hexagram = HEXAGRAMS[index];

  const cast = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setIndex(Math.floor(Math.random() * HEXAGRAMS.length));
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity, alignItems: 'center' }}>
        <Text style={styles.symbol}>{hexagram.symbol}</Text>
        <Text style={styles.name}>
          {index + 1}  {hexagram.name.toUpperCase()}
        </Text>
        <Text style={styles.desc}>{hexagram.description}</Text>
      </Animated.View>

      <Pressable onPress={cast} style={({ pressed }) => [styles.cast, pressed && styles.castPressed]}>
        <Text style={styles.castText}>cast</Text>
      </Pressable>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  symbol: {
    fontSize: 100,
    lineHeight: 110,
    color: '#e8e0d0',
    textAlign: 'center',
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888880',
    letterSpacing: 2,
    marginTop: 12,
  },
  desc: {
    fontSize: 12,
    color: '#505050',
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 19,
    marginTop: 8,
  },
  cast: {
    marginTop: 28,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  castPressed: {
    opacity: 0.6,
  },
  castText: {
    color: '#888880',
    fontSize: 13,
    letterSpacing: 1,
  },
});
