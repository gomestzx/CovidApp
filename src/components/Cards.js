import React, {Component} from 'react';
import {View,StyleSheet,Text} from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'

export default class Cards extends Component{
    render(){
        return(
         <View style={{
            ...styles.container, 
            backgroundColor:this.props.bg
         }}>
            <View style={styles.col}>
               <Icon 
                 name={this.props.icon}
                 size={30}
                 color={this.props.bg == "#f1404b" ? "#FFF":"red"}
               />
            </View>
             <Text style={styles.title}>{this.props.title}</Text>
            <Text style={{
                ...styles.number,
                color: this.props.bg == "red" ? "#FFF":"#000",
            }}>
                {this.props.number}
            </Text>
         </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    height:130,
    width:130,
    borderRadius:30,
    padding:15,
    marginLeft:20
  },
  col: {
      flexDirection:"row"
  },
  title:{
      marginTop:30,
      color:"#010101",
      fontWeight:"bold",
      fontSize:12
  },
  number:{
      fontWeight:'bold',
      fontSize:22
  }
})