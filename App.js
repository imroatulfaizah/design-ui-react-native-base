/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Dimensions} from "react-native";
import {Form, Item, Input, Text, Body, CheckBox, RadioEdit, RadioNodeList, Button, ListItem, Left, Right, Radio, Grid, Col, Row} from 'native-base';
import DatePicker from 'react-native-datepicker';
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

  function App(){
    var radio_props = [
      {label: 'Laki-laki', value: 0 },
      {label: 'Perempuan', value: 1 }
    ];
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>

        <View style={styles.middle}>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.datadiri]}>Data Diri</Text>
            <View style={{height: SCREEN_HEIGHT * 0.005, width: SCREEN_WIDTH * 0.02, backgroundColor: '#1DDCAF', paddingLeft: 40, width: 50, marginLeft: 30,
          height: 3}}/>

            <Form style={styles.mainForm}>

              <Text style={[styles.label, styles.datadiri]}>Nama Lengkap</Text>
              <Item regular style={[styles.formItems, styles.rounded, styles.field]}>
                <Input placeholder='Nama Lengkap'/>
              </Item>

              <Text style={[styles.label, styles.datadiri]}>Tanggal Lahir</Text>
              <DatePicker style={[styles.tanggal, styles.field]} customStyles={{
                dateInput: {
                borderColor:'transparent',alignItems:'flex-start', borderWidth: 0.5, fontSize: 12
                },
                placeholderText: {
                  
                  fontSize: 16,
                  color: 'black'
                }
          }} placeholder="Tanggal Lahir"/>
              <Text style={[styles.label, styles.datadiri]}>Alamat</Text>
              <Item regular style={[styles.formItems, styles.rounded, styles.field]}>
              <Input placeholder='Alamat'/>
              </Item>

              <Text style={[styles.label, styles.datadiri]}>Jenis Kelamin</Text>
              
            <Grid style={[styles.radiobut]}>
                <Row>
                  <Col>
            <ListItem selected={false} >
            <Left style={{flex:1}}>
            <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}                
              />
            </Left>
            <Body style={{flex:5}}>
            <Text>Laki-laki</Text>
            </Body>
          </ListItem>
                  </Col>
                  <Col>
                  <ListItem selected={true}>
            <Left style={{flex:1}}>
            <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
                
              />
            </Left>
            <Body style={{flex:5}}>
            <Text>Perempuan</Text>
            </Body>
          </ListItem>
                  </Col>
                </Row>
            </Grid>
            </Form>
          </View>
          <View style={styles.Button}>
                <Button block style={styles.mainBtn}>
                  <Text style={styles.btnText}>simpan</Text>
                </Button>
              </View>
        </View>
        <View style={styles.bottom}></View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    top: {
      position: 'relative',
      backgroundColor: '#ffffff',
      paddingRight: 12.7,
      paddingLeft: 12.7,
      height: 200,
    },
    field: {
      borderTopStartRadius: 10,
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomStartRadius: 10,
      borderTopEndRadius: 10,
      borderColor:'#000',
      borderWidth: 0.5,
    },
    radiobut: {
      paddingTop: 10,
      paddingLeft: 10,
    },
    middle: {
      width: '100%',
      height: '100%',
      flex: 1,
      position: 'absolute',
      zIndex: 2,
      backgroundColor: 'transparent',
      paddingLeft: 18,
      paddingRight: 18,
      
    },
    textContainer: {
      color: '#FCFDFF',
      fontFamily: "Cochin",
      fontSize: 24,
      marginBottom: 10,
      position: 'relative',
      top: '10%',
      alignSelf: 'center',
      
    },
    label: {
      color: '#FCFDFF',
      fontFamily: "Cochin",
      fontSize: 15,
      paddingLeft: 30,
      position: 'relative',
      top: '5%',
      
      
    },
    formArea: {
      alignSelf: 'center',
      width: '100%',
      backgroundColor: '#ffffff',
      borderRadius: 15,
      top: '10%',
      paddingBottom: 105,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderTopStartRadius: 20,
      borderBottomEndRadius: 15,
      borderBottomWidth: 2,
      borderTopWidth: 2,
      borderColor: '#E8E8E8',
    },
    datadiri: {
      top: 0,
      color: '#2D3057',
      marginTop: 15,
      marginRight: 220,
      textDecorationColor: '#1DDCAF',
      fontWeight: 'bold',
      
    },
    nama: {
      top: 0,
      color: '#2D3057',
    },
    tanggal: {
      paddingLeft: 7,
      paddingRight:0,
      marginTop: 5,
      width: '84%',
      marginLeft: 30,
      height: 50,
      paddingTop: 5,
      borderColor: 'transparent',
      fontSize: 10,
      fontWeight:'bold',
      
    },
    formItems: {
      marginTop: 10,
    },
    Input: {
      fontFamily: "Cochin",
      fontSize: 10,
    },
    rounded: {
      marginTop: 3,
      borderWidth: 30,
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 50,
    },
    loginAs: {
      paddingLeft: 46.6,
      display: 'flex',
      flexDirection: 'row',
      marginTop: 15,
      marginBottom: 20,
      alignItems: 'center',
    },
    loginText: {
      color: '#2D3057',
      fontSize: 10,
      fontFamily: "Cochin",
      fontWeight: 'bold',
      textAlign: 'left',
    },
    cboxText: {
      fontFamily: "Cochin",
      fontSize: 10,
    },
    Button: {
      padding: 30.8,
      borderRadius: 15,
      paddingTop: 50,
      
    },
    mainBtn: {
      backgroundColor: '#1DDCAF',
      borderTopStartRadius: 10,
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomStartRadius: 10,
      borderTopEndRadius: 10,
    },
    btnText: {
      color: '#ffffff',
      fontFamily: "Cochin",
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default App;
