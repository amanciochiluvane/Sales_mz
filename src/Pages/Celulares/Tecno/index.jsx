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
            <h2>POP</h2>
        <section className='POP'>
  <Slider {...settings}>
    <div id="card" className='POP7'>
      <h1>POP 7</h1>
      <ul id='espec' type="none">
        <li>Câmera: 8MP</li>
        <li>Bateria: 5.000 mAh</li>
        <li>Espaço: 64 GB</li> 
        <li>RAM: 2GB</li> 
        <li><p className='Price'>7.500 MT</p></li>
        <li><p className="Comprar" ><a href="">Compre</a></p></li>
      </ul>
    </div>


    <div id="card" className='POP7P'>
      <h1>Pop7 Pro</h1>
      <ul id='espec' type="none">
        <li>Câmera: 13MP</li>
        <li>Bateria: 5.000 mAh</li>
        <li>Espaço: 64 GB</li> 
        <li>RAM: 3GB</li> 
        <li><p className='Price'>8.200,00 MT</p></li>
        <li><p className="Comprar" ><a href="">Compre</a></p></li>
      </ul>
    </div>
  </Slider>
</section>

<h2>SPARK</h2>
<section className='SPARK'>
  <Slider {...settings}>
    <div id="card" className='Spark10'>
      <h1>Spark 10 </h1>
      <ul id='espec' type="none">
        <li>Câmera: 50MP</li>
        <li>Bateria: 5.000 mAh</li>
        <li>Espaço: 128 GB</li> 
        <li>RAM: 8GB</li> 
        <li><p className='Price'>10.500,00 MT</p></li>
        <li><p className="Comprar" ><a href="">Compre</a></p></li>
      </ul>
    </div>

    <div id="card" className='Spark10C'>
      <h1>Spark 10C</h1>
      <ul id='espec' type="none">
        <li>Câmera: 16MP</li>
        <li>Bateria: 5.000 mAh</li>
        <li>Espaço: 128 GB</li> 
        <li>RAM: 4GB</li> 
        <li><p className='Price'>9.700,00 MT</p></li>
        <li><p className="Comprar" ><a href="">Compre</a></p></li>
      </ul>
    </div>


    <div id="card" className='Spark10P'>
      <h1>Spark 10 pro </h1>
      <ul id='espec' type="none">
        <li>Câmera: 64MP</li>
        <li>Bateria: 6.000 mAh</li>
        <li>Espaço: 128 GB</li> 
        <li>RAM: 6GB</li> 
        <li><p className='Price'>12.200,00 MT</p></li>
        <li><p className="Comprar" ><a href="">Compre</a></p></li>
      </ul>
    </div>

  </Slider>
</section>

<section className='Camon'>
  <Slider {...settings}>
    <div id="card" className='Camon15'>
      <h1>Camon 15 </h1>
      <ul id='espec' type="none">
        <li>Câmera: 48MP</li>
        <li>Bateria: 5.000 mAh</li>
        <li>Espaço: 64 GB</li> 
        <li>RAM: 4GB</li> 
        <li><p className='Price'>13.000,00 MT</p></li>
        <li><p className="Comprar" ><a href="">Compre</a></p></li>
      </ul>
    </div>

    <div id="card" className='Camon19P'>
      <h1>Camon 19 pro</h1>
      <ul id='espec' type="none">
        <li>Câmera: 64MP</li>
        <li>Bateria: 5.000 mAh</li>
        <li>Espaço: 256 GB</li> 
        <li>RAM: 8GB</li> 
        <li><p className='Price'>22.300,00 MT</p></li>
        <li><p className="Comprar" ><a href="">Compre</a></p></li>
      </ul>
    </div>

    <div id="card" className='Camon 20'>
      <h1>Camon 20</h1>
      <ul id='espec' type="none">
        <li>Câmera: 64MP</li>
        <li>Bateria: 5.000 mAh</li>
        <li>Espaço: 256 GB</li> 
        <li>RAM: 8GB</li> 
        <li><p className='Price'>15.200,00 MT</p></li>
        <li><p className="Comprar" ><a href="">Compre</a></p></li>
      </ul>
    </div>

    <div id="card" className='Camon20P'>
      <h1>Camon 20 pro b</h1>
      <ul id='espec' type="none">
        <li>Câmera: 64MP</li>
        <li>Bateria: 5.000 mAh</li>
        <li>Espaço: 256 GB</li> 
        <li>RAM: 8GB</li> 
        <li><p className='Price'>17.500,00 MT</p></li>
        <li><p className="Comprar" ><a href="">Compre</a></p></li>
      </ul>
    </div>

    <div id="card" className='Camon20pre'>
      <h1>Camon 20 premier</h1>
      <ul id='espec' type="none">
        <li>Câmera: 50MP</li>
        <li>Bateria: 5.000 mAh</li>
        <li>Espaço: 512 GB</li> 
        <li>RAM: 8GB</li> 
        <li><p className='Price'>28.800,00 MT</p></li>
        <li><p className="Comprar" ><a href="">Compre</a></p></li>
      </ul>
    </div>
  </Slider>
</section>

        </div>
    )
}