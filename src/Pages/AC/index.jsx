import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function AC(){
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
<div id="card" class="Hisense">
    <h1>Hisense</h1>
    <ul id="espec" type="none">
        <li>12000Btu</li>
        <li><p class="Price">26.000,00 MT</p></li>
        <li><p class="Comprar"><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
</div>



<div id="card" class="AC_GREE_R410">
    <h1>AC GREE R410</h1>
    <ul id="espec" type="none">
        <li>9000BTU</li>
        <li><p class="Price">24.500,00 MT</p></li>
        <li><p class="Comprar"><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
</div>


<div id="card" class="AC_GREE_R22">
    <h1>AC GREE R22</h1>
    <ul id="espec" type="none">
        <li>24000BTU</li>
        <li><p class="Price">43.000,00 MT</p></li>
        <li><p class="Comprar"><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
</div>

<div id="card" class="AC_DEPOINT_R410">
    <h1>AC DEPOINT R410</h1>
    <ul id="espec" type="none">
        <li>9000 btu</li>
        <li><p class="Price">22.500,00 MT</p></li>
        <li><p class="Comprar"><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
</div>

<div id="card" class="Mozpoint">
    <h1>Mozpoint</h1>
    <ul id="espec" type="none">
        <li>9000btu</li>
        <li><p class="Price">20.000,00 MT</p></li>
        <li><p class="Comprar"><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
</div>

<div id="card" class="Spj_ac_r410">
    <h1>Spj ac r410</h1>
    <ul id="espec" type="none">
        <li>9000btu</li>
        <li><p class="Price">20.500,00 MT</p></li>
        <li><p class="Comprar"><a href="https://wa.me/+258877109499">Compre</a></p></li>
    </ul>
</div>


 
  </Slider>
</section>

        </div>
    )
}