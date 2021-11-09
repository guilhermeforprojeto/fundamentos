import Link from 'next/link'


export default function Inicio (){

            const titulo = <h1>Fundamentos NEXT.JS & React</h1>

            function subtitulo() {
                        return  (
                            <>
                        <h3>{"Com {} usei Js para deixar tudo maiusculo!".toUpperCase()}</h3>  

                        <Link href="/estiloso">
                            <button >Estiloso</button>
                        </Link>
                        <Link href="/app">
                            <button >App</button>
                        </Link>
                        <Link href="/jsx">
                            <button >JSX</button>
                        </Link>

                            </>                        
                        )                
            }

    return (
        <div>
            {titulo}
            {subtitulo()}
            <h4>Esse return esta executando 1 função e exibindo uma const</h4>
            
        </div>
    )

    
}