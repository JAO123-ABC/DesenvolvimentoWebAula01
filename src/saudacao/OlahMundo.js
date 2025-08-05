import { Text, StyleSheet, View} from "react-native";



export default function xpto(){
    
    return (
        <>
            <Text style={Estilo.textPrincipal}>Olá Mundo do componete!</Text>
            <Text style={Estilo.textoSecundario}> Subtitulo inserido no componete!</Text>
        </>
    )

}

const Estilo = StyleSheet.create({
    textPrincipal: {
        fontSize:25,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'left'
    },

    textoSecundario:{
        fontSize:18,
        color: '#000',
        fontWeight:'500'
    }
})