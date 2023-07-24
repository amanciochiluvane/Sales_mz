import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'

function main(){
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        speed:2000,
        
        
        responsive: [
          {
            breakpoint: 2024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return(
        <div className="main">
            <div className='ask'> 
            <h2>
            <p>Olá!</p> 
                Em que podemos ajudar?
            </h2>
            </div>
            <section className="Scroll">
                <Slider{...settings}>
               
                  <Link to="/Sales_mz/marcascell"> <div id="card" className='Cel'></div></Link>

                  <Link to ="/Sales_mz/tablets"><div id="card" className='TB'>
                </div></Link>
                
                
                <div id="card" className='TV'>
                </div>

                <div id="card" className='JBL'>
                </div>

                <div id="card" className='RL'>
                </div>

                <div id="card" className='LAP'>
                </div>

                <div id="card" className='Ac'>
                </div>
                </Slider>
            </section>
        </div>
    )
}
export default main