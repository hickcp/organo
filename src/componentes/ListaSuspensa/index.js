import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value ={props.valor}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
//Para cada item em itens, dentro do map, ele retorna um option do item correspondente,
//assim gerando uma lista dinamica.
//{props.itens.map(item => <option key={item}>{item}</option>)}

//Pode ser feito dessa maneira também:
////{props.itens.map(item => { retun <option key={item}>>{item}</option> })}

//A chave é necessária para o react saber quando ele tem que redenrizar
export default ListaSuspensa