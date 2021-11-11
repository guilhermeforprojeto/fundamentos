import { useState } from "react";
import Layout from "../component/Layout";

export default function Estado (){
    const [numero, setNumero] = useState(0)

    function incrimentar(){
        setNumero(numero + 1)    
        console.log(numero)

    }

    return(
        <Layout titulo="Componente Estado">
            <span>{numero}</span>
            <br></br>
            <button onClick={incrimentar}>Incrimetar</button>
        </Layout>
    )
}