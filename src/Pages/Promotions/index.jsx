import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Promotions(){
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
            breakpoint: 4024,
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
        <div className="Promotions">
            <h2>Veja aqui, alguns dos nossos produtos em promocao😍</h2>
<section class="Watch">
<Slider {...settings}>
<div id="card" className='A04E'>
                     <h1>Galaxy A04E</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 13MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 32 GB</li> 
                        <li>RAM: 3GB</li> 
                        <li><p className='Price'>7.600 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

  
                    <div id="card" className='A14'>
                    <h1>Galaxy A14</h1>
                    <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 4GB</li> 
                        <li><p className='Price'>13.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>
  
 
  
  <div id="card" class="Watch_4">
    <h1>Watch 4 40Mm Sm-R860</h1>
    <ul id="espec" type="none">
      <li><p class="Price">12.500,00 MT</p></li>
      <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
  </div>

  </Slider>
</section>

        </div>
    )
}