import React, {useState} from "react";
import { View,Text,TextInput,Button } from "react-native";
import ResultImc from "./ResultImc";

export  default function Form(){

    const [height, setHeight] = useState(null)
    const[weight,setWeight] = useState(null)
    const[messageImc,setMessageImc] = useState("preenchan seu peso e sua altura");
    const[imc,setImc] = useState(null)
    const[textButton,setTextButton] = useState("Calcular IMC")

    function imccalculator(){
        return setImc((weight/(height*height)).toFixed())
    }

    return(
        <View>
            
            <View>
          <Text>Altura</Text>
           <TextInput
           placeholder="Ex.1.75" 
           keyboardType="numeric"/>


           <Text>Peso</Text>
           <TextInput
           placeholder="Ex.55.766" 
           keyboardType="numeric"/> 

           <Button
           title ={textButton}
           
           />
           
             </View>
        </View>
    );
}