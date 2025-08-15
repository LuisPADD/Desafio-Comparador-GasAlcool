import React, { Component } from 'react';
import { View, Keyboard, Modal, TextInput, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList, Switch } from 'react-native';

export default class Calcular extends Component {
  render() {
    const {alcool, gasolina, recomendado} = this.props;

    return (
            <View style={styles.container}>

            <View style={styles.header}>
            <Image
            source={require('./src/img/gas.png')}
            />
            </View>

            <View style={styles.ViewCompensa}>
                <Text style={styles.Compensa}>Compensa Usar {recomendado}</Text>
            </View>

            <View style={styles.centerView}>
                
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#FFF', padding: 5}}>Com os Preços:</Text>
                <Text style={styles.alcngas}>Alcool: R${parseFloat(alcool).toFixed(2)}</Text>
                <Text style={styles.alcngas}>Gasolina: R${parseFloat(gasolina).toFixed(2)}</Text>
            </View>
            
            <View style={styles.botaoCalc}>
                <TouchableOpacity style={styles.botao}
                    onPress={this.props.calcN}>
                    <Text style={styles.textCalc}>Calcular Novamente!</Text>
                 </TouchableOpacity>
                  </View>           
            </View>
          
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    botao: {
    height: 50,
    width: 250,
    borderWidth: 3,
    borderColor: '#ff512eff',
    backgroundColor: '#212121',
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 75,
},
botaoCalc:{
            width:100,
            height: 100,
            borderRadius:25,
            paddingTop: 15,
            alignContent: 'center',
},
textCalc: {

    textAlign: 'center',
    fontWeight: 'bold',
    color: "#FF512E",
    fontSize: 18
},
header: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,


},
centerView:{
    padding:25,
    alignItems: 'center'
},
alcngas: {
    color:'#fff',
    fontSize: 14,
    padding: 5
},
Compensa: {
    fontSize: 28,
    color: '#34CE60',
    fontWeight: 'bold', 
    textAlign: 'center',
},
ViewCompensa:{
    marginTop: 15,
    alignItems: 'center',
    justifyContent:'center',
    alignContent: 'center'
}
});