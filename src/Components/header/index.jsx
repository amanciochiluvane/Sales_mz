import menuBarImage from '../../Assets/menu.png';
import '../../App.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Header(){
    const [menu,setMenu]=useState(true);
    const visible='menutools';
    const nonvisble='non';
    const vi='mbi';
    const inv ='mbinon';
    function mudartool(){
        if(menu===true){
            setMenu(false);
        }
        else{
            setMenu(true);
        }
    }

    const scrollToBottom=()=>{
        const element= document.querySelector('.footer');
        element.scrollIntoView({behavior:'smooth'});
    }
    return(
    <div className="header">
        <h1><p className='sales'>Sales</p><p className='mz'>Mz</p></h1>
        <p className={menu?vi:inv} onClick={mudartool}><img  src={menuBarImage} alt="photologo"/></p>

        <div className={menu?visible:nonvisble}>
        <p className='close' onClick={mudartool}>X</p>
        <p><Link className='Link' to ="/Sales_mz">Home</Link></p>
        <p onClick={scrollToBottom}>About us</p>
        <p><Link className='Link' to="/Promotions">Promotions</Link></p>
        </div>
    </div>
    )
}
export default Header