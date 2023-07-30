import './marcascell.css'
import {Link} from 'react-router-dom'

export default function MarcasCell(){
    return(
        <div className="MarcasCell">
        <h1>
         Escolha a sua marca:</h1>
        <div className="Choice">
            <Link to = "/marcascell/samsung"> <p id='MC'>Samsung</p></Link>
            <Link to="/marcascell/tecno"><p id='MC' >Tecno</p></Link>
            <Link to="/marcascell/apple" ><p id='MC'>Apple</p></Link>
            
        </div>
        </div>
    )
}