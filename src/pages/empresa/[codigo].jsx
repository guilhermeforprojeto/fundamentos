import Layout from "../../component/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EmpresaPorCodigo(){
    const router = useRouter()
    
    //Apenas para log 
    useEffect(() => {
        console.log("Aqui o objeto de query    "+ router.query)
        console.log("Aqui o valor do obj de query  "+ router.query.codigo)
    }, [])

    return (

        <Layout titulo="Navegação dinâmica">
            <p>
                Aqui usamos useRouter e useEffect
                para poder pegar o valor da "rota"
                o importe de useRouter traz o query
                que dentro dele tem um objeto com valor 
                de data rota informada, nesse caso 
                http://localhost:3000/empresa/123
                123 é o valor atual da rota
            </p>
            <p>
                Para poder usar o objeto ou valor dele
                dentro da pagina de forma estática 
                entra em ação o 
                const router = useRouter()
                aqui router é uma cost que recebe todos
                atributos de router de forma que podemos
                usar todos eles, exemplo o query
                então com . entranmos nas informações
                router.query.codigo aqui estamos apontando
                para o valor de codigo que esta dentro do objeto
                query informado por router, então temos uma const
                comum que pode ser usada pelo JS

            </p>
            <p>Aquui a baixo temos o uso de router.query.codigo </p>
            <span>Código = {router.query.codigo}</span>
        </Layout>
    )
}