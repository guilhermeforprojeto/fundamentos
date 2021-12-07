import { useState } from 'react'
import Layout from '../component/Layout'

export default function Integracao() {

    const [codigo, setCodigo] = useState(0)
    const [cliente, setCliente] = useState({})

    async function obterCliente() {
       const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
       const dados = await resp.json()
       setCliente(dados)

       //fetch(`http://localhost:3000/api/clientes/${codigo}`)
       ///     .then(resp => resp.json())
        //    .then(dados => setCliente(dados))
        }

    return (
        <Layout titulo="Intereção com API">
            <div>
                <h4>O async/await é uma nova forma de tratar Promises dentro do nosso código, evitando a criação de cascatas de .then como vimos no post passado. Vale lembrar que continuamos trabalhando com as Promises, mas elas ficam menos visíveis e verbosas.
                    
                </h4>                      
                <input 
                type="number" 
                value={codigo}
                onChange={e => setCodigo(e.target.value)}
                    ></input>
                <button onClick={obterCliente} >Obter Cliente</button>
            </div>
            <ul>
                <li>Codigo: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}