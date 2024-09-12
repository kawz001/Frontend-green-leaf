import React from "react";
import {Text, View, Image, TextInput} from 'react-native';
import {style} from "./styles";
import Logo from "../../assets/logo.png";

export default function Login() {
    return (
       <View style={style.container}>
            <View style={style.boxTop}>
                <Image style={style.imageBox} source={Logo}/>
            </View>
            <View style={style.boxMid}>
                <Text>Endereco de email</Text>
                <TextInput></TextInput>
                <Text>Senha</Text>
                <TextInput></TextInput>
            </View>
            <View style={style.boxBottom}>
                <Text>bot</Text>
            </View>
       </View>
    )
        
}