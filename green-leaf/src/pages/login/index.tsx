import React from "react";
import {Text, View, Image, TextInput, Button} from 'react-native';
import {style} from "./styles";
import Logo from "../../assets/logo.png";

export default function Login() {
    return (
       <View style={style.container}>
            <View style={style.boxMid}>
                <View style={style.form}>
                    <Text>Endereco de email</Text>
                    <TextInput style={style.input}></TextInput>
                    <Text>Senha</Text>
                    <TextInput style={style.input} secureTextEntry></TextInput>
                    <Button title="Log in"></Button>
                    <View style={style.options}>
                        <Text>Criar conta</Text>
                        <Text>Esqueci minha senha</Text>
                    </View>
                </View>
                
            </View>
       </View>
    )
        
}