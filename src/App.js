import React from "react";
import
{View,
Text,
Image,
StyleSheet,
SafeAreaView,
StatusBar,
Pressable,
Linking,
 } from "react-native";

const linkingGithub = 'https://github.com/JunioG';
const colorGithubNIckName = '#4F565E';
const colorGithubFont = '#C9D1D9';
const colorGithub ='#1E2327';
const imageProFileGithub = 'https://avatars.githubusercontent.com/u/92962517?v=4';


const App = () => {
    const handlePressGoToGithub = async () => {
        console.log ('verificando o link');
        const res = await Linking.canOpenURL(linkingGithub);        
        if (res) {
            console.log ('link aprovado');
            console.log ('abrindo o link .....');
            await Linking.canOpenURL(linkingGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle= "ligth-content"/>            
            <View style={style.content}>
              <Image style={style.avatar} 
              source={{uri: imageProFileGithub}}
              />
              <Text accessibilitylabel=" Nome:Junio argolo Gonçalves" style={[style.defaultText, style.name]}>
                Junio Argolo Gonçalves
              </Text>
              <Text accessibilitylabel="Nickname: JunioG" style={[style.defaultText, style.nickName]}>
                junioG
              </Text>
              <Text accessibilitylabel="Descriçao: Estudante de Análise e Desenvolvimento de Sistemas | Estacio | 3º Semestre | Dio campus expert | #CompartilhandoConhecime" style={[style.defaultText, style.texdescri]}>
              Estudante de Análise e Desenvolvimento de Sistemas | Estacio | 3º Semestre | Dio campus expert | #CompartilhandoConhecimento.
              </Text>
              <Pressable onPress={handlePressGoToGithub}>
              <View style={style.Button}>
                <Text style={[style.defaultText, style.textButton]}>
                    Open as Github 
                </Text>
              </View>
              </Pressable>
            </View>            
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { //column
        backgroundColor:colorGithub,
        flex: 1, // expande para a tela interira
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar:{
        width:200,
        height:200,
        borderRadius:100,
        borderColor: 'white',    
        borderWidth:2,
    },
    content:{
        alignItems: 'center',
        padding:20,
    },
    defaultText:{
        color:'white',
    },
    name: {
        marginTop:20,
        fontWeight:'bold',
        fontSize:30,
        color: colorGithubFont,
    },
    nickName:{
        fontSize:20,
        color: colorGithubNIckName,
    },
    texdescri:{
        fontWeight:'bold',
        fontSize:15,
        color: colorGithubFont,
    },
    Button:{
        marginTop:20,
        backgroundColor:colorGithubNIckName,
        borderRadius:10,
        padding:20,
    },
    textButton:{
        fontWeight:'bold',
        fontSize:16,
    },
});