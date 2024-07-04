import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <ImageBackground source={require('./assets/image.png')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0.3)',
              'rgba(255, 255, 255, 0.0)',
              'rgba(255, 255, 255, 0.0)',
              'rgba(255, 255, 255, 0.0)',
              'rgba(255, 255, 255, 0.0)',
              'rgba(255, 255, 255, 0.0)',
              'rgba(255, 255, 255, 0.0)',
              'rgba(255, 255, 255, 0.3)'
            ]}
            locations={[0.0, 0.2, 0.4, 0.5, 0.5, 0.6, 0.8, 1.0]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientHorizontal}
          >
            <LinearGradient
              colors={[
                'rgba(255, 255, 255, 0.3)',
                'rgba(255, 255, 255, 0.0)',
                'rgba(255, 255, 255, 0.0)',
                'rgba(255, 255, 255, 0.0)',
                'rgba(255, 255, 255, 0.0)',
                'rgba(255, 255, 255, 0.0)',
                'rgba(255, 255, 255, 0.0)',
                'rgba(255, 255, 255, 0.3)'
              ]}
              locations={[0.0, 0.2, 0.4, 0.5, 0.5, 0.6, 0.8, 1.0]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.gradientVertical}
            >
              <View style={styles.innerButton}>
                <Text style={styles.buttonText}>Category</Text>
              </View>
            </LinearGradient>
          </LinearGradient>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: '#fff', // Color del borde blanco
    borderWidth: 1, // Grosor del borde
    width: 200, // Ajusta el ancho del botón
    height: 50, // Ajusta la altura del botón
  },
  gradientHorizontal: {
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientVertical: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  icon: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
  },
});
