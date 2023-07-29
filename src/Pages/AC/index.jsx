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
        <div className="AC">
            <h2>AC</h2>
<section class="Watch">
<Slider {...settings}>
  <div id="card" class="Watch_3">
    <h1>Watch 3 41mm Sm-R850</h1>
    <ul id="espec" type="none">
      <li><p class="Price">15.000,00 MT</p></li>
      <li><p className="Comprar" ><a href="">Compre</a></p></li>
    </ul>
  </div>

  
 
  

  
  </Slider>
</section>

        </div>
    )
}