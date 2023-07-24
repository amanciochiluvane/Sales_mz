import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Tablets(){
    var settings = {
        dots: false,
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
              dots: false
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
        <div className='Tablets'>
            <h2>Tablets</h2>
            <section className='Tablets'>
            <Slider{...settings}>
            <div id="card" className='A8'>
                     <h1>A 8Inch</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 8MP</li>
                        <li>Bateria: 5.100 mAh</li>
                        <li>Espaço: 32 GB</li> 
                        <li>RAM: 2GB</li> 
                        <li><p className='Price'>12.000 MT</p></li>
                        <li><p className="Comprar" ><a href="">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='A81'>
                     <h1>A8 10.4Inch</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 8MP</li>
                        <li>Bateria: 7.040 mAh</li>
                        <li>Espaço: 32 GB</li> 
                        <li>RAM: 3GB</li> 
                        <li><p className='Price'>18.500 MT</p></li>
                        <li><p className="Comprar" ><a href="">Compre</a></p></li>
                     </ul>
                    </div> 

                     <div id="card" className='A7'>
                     <h1>A7 Lite 8.7Inch</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 8MP</li>
                        <li>Bateria: 5.100 mAh</li>
                        <li>Espaço: 32 GB</li> 
                        <li>RAM: 3GB</li> 
                        <li><p className='Price'>18.500 MT</p></li>
                        <li><p className="Comprar" ><a href="">Compre</a></p></li>
                     </ul>
                    </div>      
            </Slider>
            </section>
        </div>
    )
}