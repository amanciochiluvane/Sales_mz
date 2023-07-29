import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Watch(){
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
        <div className="Watch">
            <h2>Watch</h2>
<section class="Watch">
<Slider {...settings}>
  <div id="card" class="Watch_3">
    <h1>Watch 3 41mm Sm-R850</h1>
    <ul id="espec" type="none">
      <li><p class="Price">15.000,00 MT</p></li>
      <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
  </div>

  
  <div id="card" class="Watch_4">
    <h1>Watch 4 40Mm Sm-R860</h1>
    <ul id="espec" type="none">
      <li><p class="Price">13.000,00 MT</p></li>
      <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
  </div>

  
  <div id="card" class="Watch_4_Classic">
    <h1>Watch 4 Classic 42mm Sm-R880</h1>
    <ul id="espec" type="none">
      <li><p class="Price">17.500,00 MT</p></li>
      <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
  </div>

  
  <div id="card" class="Watch_4_Classic_46mm">
    <h1>Watch 4 Classic 46mm Sm-R890</h1>
    <ul id="espec" type="none">
      <li><p class="Price">17.800,00 MT</p></li>
      <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
  </div>

 
  <div id="card" class="Watch_5">
    <h1>Watch 5 40Mm Sm-R900</h1>
    <ul id="espec" type="none">
      <li><p class="Price">16.000,00 MT</p></li>
      <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
  </div>

 
  <div id="card" class="Watch_5_44mm">
    <h1>Watch 5 44mm Sm-R910</h1>
    <ul id="espec" type="none">
      <li><p class="Price">20.000,00 MT</p></li>
      <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
  </div>

  
  <div id="card" class="Watch_5_Pro">
    <h1>Watch 5 Pro 45mm Sm-R920</h1>
    <ul id="espec" type="none">
      <li><p class="Price">27.000,00 MT</p></li>
      <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
  </div>
  </Slider>
</section>

        </div>
    )
}