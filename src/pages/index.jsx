export default function Inicio (){

    const titulo = <h1>Fundamentos NEXT.JS & React</h1>

    function subtitulo() {
        return  <h3>{"Com {} usei Js para deixar tudo maiusculo!".toUpperCase()}</h3>
        
    }


    return (
        <div>
            {titulo}
            {subtitulo()}
            <h2>Começando o curso</h2>
           
        </div>
    )
}