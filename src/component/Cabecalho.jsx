export default function Cabecalho(props){
    //props é somente leitura!
    
   
    return (
        <header>
            <h1>{props.title}</h1>
            <h5>Propis é somente leitura</h5>
        </header>
    )
}