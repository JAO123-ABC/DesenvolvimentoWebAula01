import {Text, StyleSheet} from 'react-native';

export default function({somaA, somaB,subA, subB}){
    function soma(a,b){
        return a+b;
    }

    function subtrai(x,y){
        return x-y;
    }

    return(
        <>
        <Text style={Estilo.texto}> 
            0 resultado da soma de {somaA} + {somaB} é:
            <Text style={Estilo.resultado}> {soma(somaA, somaB)}</Text>
        </Text>

        <Text style={Estilo.texto}> 
            0 resultado da SUBTRAÇÃO de {subA} - {subB} é:
            <Text style={Estilo.resultado}> {subtrai(subA, subB)}</Text>
        </Text>

    </>
     )
}

const Estilo = StyleSheet.create({
    texto: {
        fontSize: 20,
    },

    resultado:{
        fontSize: 25,
        fontWeight:"bold"
    }
})