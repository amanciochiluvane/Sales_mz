import menuBarImage from '../../Assets/menu.png';
import '../../App.css'

function Header(){
    return(
    <div className="header">
        <h1><p className='sales'>Sales</p><p className='mz'>Mz</p></h1>
        <p className="mbi"><img src={menuBarImage} alt="photologo"/></p>
        <div className='menutools'>
        <p>Home</p>
        <p>About us</p>
        <p>Promotions</p>
        </div>
    </div>
    )
}
export default Header