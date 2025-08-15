import React, { Component } from 'react';
import { Alert, View, Image, StyleSheet, TouchableOpacity, FlatList, Text, TextInput, Button, Modal } from 'react-native';
import Calcular from './Calcular';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcool: '',
      gasolina: '',
      modalVisible: false,
      recomendado: '',
    };
    this.calcular = this.calcular.bind(this);
    this.calcNovo = this.calcNovo.bind(this);

  }

  calcular() {
    if (this.state.alcool === '') {
      Alert.alert('Atenção', 'Preencha o campo alcool');
      return;
    }
    if (this.state.gasolina === '') {
      Alert.alert('Atenção', 'Preencha o campo gasolina');
      return;
    }


    const alcool = parseFloat(this.state.alcool)
    const gasolina = parseFloat(this.state.gasolina)
    const result = alcool / gasolina;


    if(result < 0.7){
    this.setState({recomendado: 'Alcool'})
    }else{
    this.setState({recomendado: 'Gasolina'})
    }

    






    this.setState({ modalVisible: true })
  }

  calcNovo(visible) {
    this.setState({ modalVisible: visible })
  }


  render() {
    return (
      <View style={styles.container}>




        <View style={styles.header}>
          <Image
            source={require('./src/img/logo.png')}
          />
          <Text style={styles.textHeader}>Qual a melhor opção?</Text>
        </View>





        {/*Inputs*/}
        <View style={styles.inputs}>
          <Text style={styles.textos}>Alcool (preço por litro):</Text>
          <TextInput
            backgroundColor='#fff'
            borderWidth={1}
            borderRadius={5}
            margin={5}
            fontSize={18}
            keyboardType='numeric'
            onChangeText={(texto) => this.setState({ alcool: texto })}

          />
          <Text style={styles.textos}>Gasolina (preço por litro):</Text>
          <TextInput
            backgroundColor='#fff'
            borderWidth={1}
            borderRadius={5}
            margin={5}
            fontSize={18}
            keyboardType='numeric'
            onChangeText={(texto) => this.setState({ gasolina: texto })}
          />


        </View>

        <View style={styles.botao}>
          {/*botao*/}
          <Button
            title='Calcular'
            color="#FF512E"
            onPress={this.calcular}
          />
        </View>


        <View style={styles.modalView}>

          <Modal
            animationType="slide" visible={this.state.modalVisible}>
            <View style={styles.ViewModal}>
              <Calcular 
              alcool={this.state.alcool}
              gasolina={this.state.gasolina}
              recomendado={this.state.recomendado}
              calcN={() => this.calcNovo(false)} />
            </View>
          </Modal>


        </View>






      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',

  },
  header: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 25,
    color: '#FFF',
    padding: 5,
    fontWeight: 'bold',
    marginTop: 20
  },
  textos: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 15
  },
  inputs: {
    padding: 10

  },
  botao: {
    padding: 15,
  },
  ViewModal: {
    flex: 1,
    backgroundColor: '#212121'

  }

});
