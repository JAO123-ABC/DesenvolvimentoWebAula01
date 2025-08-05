import { StyleSheet, Text} from "react-native"

export default ({nome = "Usuario"})=>(
    <Text style = {Formata.textoSaudacao}> Bem Vindo {nome}</Text>

)
    const Formata = StyleSheet.create({

        textoSaudacao:{
            fontSize:18,
            color: '#000',
            fontWeight:'500'
        },
        
    })
    
