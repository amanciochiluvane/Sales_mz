import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Tecno(){
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
        <div className='Tecno'>
             <h2>POP </h2>
            <section className='POP'>
            <Slider{...settings}>
            <div id="card" className='F04'>
                     <h1>POP 7</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 13MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 64 GB</li> 
                        <li>RAM: 4GB</li> 
                        <li><p className='Price'>8.600 MT</p></li>
                        <li><p className="Comprar" ><a href="">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='F13'>
                     <h1>Galaxy F13</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 6.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 6GB</li> 
                        <li><p className='Price'>11.500 MT</p></li>
                        <li><p className="Comprar" ><a href="">Compre</a></p></li>
                     </ul>
                    </div>    
            </Slider>
            </section>
        </div>
    )
}