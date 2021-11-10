
import Navegador from '../component/Navegador'

export default function Inicio (){
    return(
        <div><h3>{"Com {} usei Js para deixar tudo maiusculo!".toUpperCase()} </h3>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '10vh',            

        }}>Os botões dessa pagina usam Estilo dentro das divs</div><br></br>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '40vh',

        }}> 
            <Navegador texto="Layout da pagina" destino="/estiloso"></Navegador><br></br>
            <Navegador texto="App" destino="/app" cor='#8b008b'></Navegador><br></br>
            <Navegador texto="JSX" destino="/jsx" cor='#8a2be2'></Navegador><br></br>
           
        </div>           
        </div>             
    )                          
                
}