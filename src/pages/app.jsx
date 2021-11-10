import Cabecalho from "../component/Cabecalho"
import Link from 'next/link'
import Layout from "../component/Layout"

export default function App(){
    const explica = "<Cabecalho title='Titulo: aprenda next.js'></Cabecalho>"
    
    return (
        <Layout titulo="Esta tem um  Layout!">
        <Cabecalho title='Titulo: aprenda next.js'></Cabecalho>
        <h3>Esse titulo acima foi rendereziado pelo componente <br></br>cabecalho.jsx enviado via props no app.jsx  </h3>
        
        <h5>{explica}</h5>
        <br></br>
        <Link href="/">
                <button >Voltar</button>
        </Link>
       </Layout>
        
    ) 
}