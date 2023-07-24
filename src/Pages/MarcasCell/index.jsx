import './marcascell.css'
import {Link} from 'react-router-dom'

export default function MarcasCell(){
    return(
        <div className="MarcasCell">
        <h1>
         Escolha a sua marca:</h1>
        <div className="Choice">
            <Link to = "/Sales_mz/marcascell/samsung"> <p id='MC'>Samsung</p></Link>
            <Link to="/Sales_mz/marcascell/tecno"><p id='MC' >Tecno</p></Link>
            <p id='MC'>Apple</p>
        </div>
        </div>
    )
}