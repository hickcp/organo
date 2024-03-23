import './CampoTexto.css'
//importa o css do componente

//uma constante jsx
const CampoTexto = (props) => {
    //const de exemplo para usar concatenação
//  const placeholderModificada= `${props.placeholder} ${props.label} 123`
//  console.log(placeholderModificada)

    //let valor = 'Henrique Correa'
    //Exemplo de rook abaixo
    //const [valor, setValor] = useState('Henrique Correa')
    //const aoDigitado = (evento) =>{
    //    setValor(evento.target.value)
    //    console.log(valor)
  //  }

  const aoDigitado = (evento) =>{
    props.aoAlterado(evento.target.value)
  }
    //essa const retorna o html
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder = {props.placeholder} />
        </div>
    )
    }

    //exportado para o App.js importar e renderizar na página.
export default CampoTexto