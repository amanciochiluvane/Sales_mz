import email from '../../Assets/mobile/ei.png';
import insta from '../../Assets/mobile/logo-instagram.jpg';
import sapp from '../../Assets/mobile/logo-whatsapp.png';


export default function footer(){
    return(
       <div className="footer">
            <h1 className="footerlogo" ><p className='sales'>Sales</p><p className='mz'>Mz</p></h1>

            
               <h2 className="Us">About Us</h2> 
               <p className="about">
               Somos uma loja online especializada na venda de eletrônicos de última geração. Oferecemos uma ampla variedade de produtos de alta qualidade, desde smartphones e tablets até laptops e acessórios. Nosso objetivo é proporcionar a melhor experiência de compra para nossos clientes, garantindo produtos de primeira linha e um atendimento excepcional.
               
            </p>
            
                <h2 className="contact">Informações de Contacto </h2>
                
                <div className='cont'>
                <p><a href="https://wa.me/+258877109499"><img className='whatsapp' src={sapp}/></a></p>
                <p ><a id="Links" href="mailto:herminionino380@gmail.com"><img className='email' src={email} /></a></p>
                <p ><a id="Links" href="https://instagram.com/store_salesmz?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><img className='insta' src={insta} /></a></p>
                </div>
                
            
                <h3>
                <div>(Copyright) <h1><p className='sales'>Sales</p><p className='mz'>Mz</p></h1> - Todos os direitos reservados.</div>
                </h3>
                
       </div>
    )
}