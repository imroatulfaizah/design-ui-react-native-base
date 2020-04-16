/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from "react-native";
import {Form, Item, Input, Text, Body, CheckBox, Button, ListItem, Left, Right, Radio} from 'native-base';
import DatePicker from 'react-native-datepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

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
            <Form style={styles.mainForm}>

              <Text style={[styles.label, styles.datadiri]}>Nama Lengkap</Text>
              <Item regular style={[styles.formItems], styles.rounded}>
                <Input placeholder='Nama Lengkap'/>
              </Item>

              <Text style={[styles.label, styles.datadiri]}>Tanggal Lahir</Text>
              <DatePicker placeholder="Tanggal Lahir" style={styles.tanggal}></DatePicker>
              
              <Text style={[styles.label, styles.datadiri]}>Alamat</Text>
              <Item regular style={[styles.formItems], styles.rounded}>
                <Input placeholder='Alamat'/>
              </Item>

              <Text style={[styles.label, styles.datadiri]}>Jenis Kelamin</Text>
              <RadioForm style={styles.tanggal}
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}      
            />
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
     
      position: 'relative',
      top: '5%',
      alignSelf: 'center',
      
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
      paddingLeft: 30,
      paddingRight:0,
      marginTop: 15,
      
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
