import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Inicio() {
  const navigation = useNavigation();// cria o navigate aqui

    return(
        <ImageBackground
        source={require('../../imagens/papellparede.jpeg')} 
        style={styles.imageBackground}>
        <View style={styles.innerContainer}>
          <View style={styles.info}>
            <Text style={styles.name}>Sorriso Conectado</Text>
            <Text style={styles.local}>Avenida 24 de outubro - centro, 012</Text>
          </View>
          
          <View style={styles.imageContainer}>
            <Image
              source={require('../../imagens/marca.jpeg')} 
              style={styles.image}/>
          </View>
          
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profissionais')}>
              <Text style={styles.buttonText}>AGENDA</Text>
              
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Comprovantes')}>
              <Text style={styles.buttonText}>COMPROVANTES</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    innerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    info: {
      alignItems: 'center',
      marginBottom: 20,
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
    },
    local: {
      fontSize: 15,
      color: '#000',
      marginBottom: 30,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 50,
    },
    image: {
      width: 175, 
      height: 175,
      borderRadius: 90,
    },
    buttons: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginVertical: 15,
    },
    buttonText: {
      fontSize: 16,
      color: '#000',
      fontWeight: 'bold',
    },
  });