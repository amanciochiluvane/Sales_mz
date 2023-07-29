import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Apple(){
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
        <div className='Apple'>
                        <h2>Apple</h2>
        <section className='AppleI'>
  <Slider {...settings}>
    <div id="card" className='Simple'>
      <h1>Iphone 14</h1>
      <ul id='espec' type="none"> 
        <li><p className='Price'>65.000 MT</p></li>
        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
      </ul>
    </div>


    <div id="card" className='Pro'>
      <h1>Iphone 14 Pro</h1>
      <ul id='espec' type="none">
        <li><p className='Price'>84.000,00 MT</p></li>
        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
      </ul>
    </div>

    <div id="card" className='ProM'>
      <h1>Iphone 14 Pro max</h1>
      <ul id='espec' type="none">
        <li><p className='Price'>92.000,00 MT</p></li>
        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
      </ul>
    </div>
  </Slider>
</section>
        </div>
    )
    
    
}