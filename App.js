import React, { useState, useEffect, Component } from "react";
import { StyleSheet, Text, View, TextInput, Button,ScrollView } from "react-native";

export default class App extends React.Component {
  state = {
    textvalue: "",
    newarray:[]
  };
  updateState = val => {
    this.setState({
      textvalue: val
    });
  };
  updateStatewitharray=(e)=>{
     if(this.state.textvalue.trim()==="")
     {
       return;
     }
     else{
      this.setState(prevState=>({
           newarray:prevState.newarray.concat(prevState.textvalue),
           textvalue:''
    


      }))
    }


  }
  pressItemDeleted=(i)=>{

    this.setState(prevState=>({
      newarray:prevState.newarray.filter((item,index)=>{
        return    !index===i
      }),
      textvalue:''



 }))

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>

        <TextInput
          style={{
            height: 50,
            width: 300,
            borderColor: "black",
            borderWidth: 1
          }}
          onChangeText={this.updateState}
          value={this.state.textvalue}
        />

        <Button title="Add" onPress={this.updateStatewitharray}></Button>

        <Text>
           {this.state.newarray.map((item,i)=>{

   
           
           
          return  <View  onPress={()=>{this.pressItemDeleted(i)}}  key ={i}><View style={styles.liststyle} >{item}<Text></Text></View>{"\n"}</View>
           })}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "flex-start"
  },
  liststyle:{
     padding:"10",
    backgroundColor:"#eee",
    width:"100%"



  }
});
