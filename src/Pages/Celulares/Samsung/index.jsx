import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Samsung(){
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

    var settings2 = {
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
            slidesToShow: 2,
            slidesToScroll: 2,
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
        <div className="Samsung">
        <h2>Série A </h2>
            <section className='Serie A'>
            <Slider{...settings}>
                    <div id="card" className='A04E'>
                     <h1>Galaxy A04E</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 13MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 32 GB</li> 
                        <li>RAM: 3GB</li> 
                        <li><p className='Price'>8.100 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='A04'>
                    <h1>Galaxy A04</h1>
                    <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 64 GB</li> 
                        <li>RAM: 4GB</li> 
                        <li><p className='Price'>9.500 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='A04S'>
                    <h1>Galaxy A04S</h1>
                    <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 4GB</li> 
                        <li><p className='Price'>12.200 MT</p></li>
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
                        <li><p className='Price'>14.500 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='A22'>
                    <h1>Galaxy A22</h1>
                    <ul id='espec' type="none">
                        <li>Câmera: 48MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 4GB</li> 
                        <li><p className='Price'>14.500 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='A23'>
                    <h1>Galaxy A23</h1>
                    <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 4GB</li> 
                        <li><p className='Price'>16.500 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='A24'>
                    <h1>Galaxy A24</h1>
                    <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 4GB</li> 
                        <li><p className='Price'>17.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='A34'>
                    <h1>Galaxy A34</h1>
                    <ul id='espec' type="none">
                        <li>Câmera: 48MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 8GB</li> 
                        <li><p className='Price'>23.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='A54'>
                    <h1>Galaxy A54</h1>
                    <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 8GB</li> 
                        <li><p className='Price'>28.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='A73'>
                    <h1>Galaxy A73</h1>
                    <ul id='espec' type="none">
                        <li>Câmera: 108MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 8GB</li> 
                        <li><p className='Price'>32.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>
            </Slider>
            </section>
            
            <h2>Série F </h2>
            <section className='Serie F'>
            <Slider{...settings2}>
            <div id="card" className='F04'>
                     <h1>Galaxy F04</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 13MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 64 GB</li> 
                        <li>RAM: 4GB</li> 
                        <li><p className='Price'>8.600 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
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
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>    
            </Slider>
            </section>

            <h2>Série M </h2>
            <section className='Serie M'>
            <Slider{...settings2}>
            <div id="card" className='M04'>
                     <h1>Galaxy M04</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 13MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 64 GB</li> 
                        <li>RAM: 4GB</li> 
                        <li><p className='Price'>8.800 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='M33'>
                     <h1>Galaxy M33</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 6GB</li> 
                        <li><p className='Price'>16.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>    
            </Slider>
            </section>

            <h2>Série S </h2>
            <section className='Serie S'>
            <Slider{...settings}>
            <div id="card" className='S20Fe'>
                     <h1>Galaxy S20Fe</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 12MP</li>
                        <li>Bateria: 4.500 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 6GB</li> 
                        <li><p className='Price'>30.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='S21Fe'>
                     <h1>Galaxy S21Fe</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 12MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 8GB</li> 
                        <li><p className='Price'>33.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>  

                    <div id="card" className='S22P'>
                     <h1>Galaxy S22 Plus</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 4.500 mAh</li>
                        <li>Espaço: 256 GB</li> 
                        <li>RAM: 8GB</li> 
                        <li><p className='Price'>63.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>    

                    <div id="card" className='S22U'>
                     <h1>Galaxy S22 Ultra</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 108MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 512 GB</li> 
                        <li>RAM: 12GB</li> 
                        <li><p className='Price'>80.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div> 
                      
                    <div id="card" className='S23'>
                     <h1>Galaxy S23 </h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 3.900 mAh</li>
                        <li>Espaço: 128 GB</li> 
                        <li>RAM: 8GB</li> 
                        <li><p className='Price'>53.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='S23P'>
                     <h1>Galaxy S23 Plus </h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 4.700 mAh</li>
                        <li>Espaço: 512 GB</li> 
                        <li>RAM: 8GB</li> 
                        <li><p className='Price'>70.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='S23U'>
                     <h1>Galaxy S23 Ultra </h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 200MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 512 GB</li> 
                        <li>RAM: 12GB</li> 
                        <li><p className='Price'>87.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>
            </Slider>
            </section>

            <h2>Série Z </h2>
            <section className='Serie Z'>
            <Slider{...settings2}>
            <div id="card" className='FP4'>
                     <h1>Z Filp 4</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 12MP</li>
                        <li>Bateria: 3.700 mAh</li>
                        <li>Espaço: 256 GB</li> 
                        <li>RAM: 8GB</li> 
                        <li><p className='Price'>55.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>

                    <div id="card" className='FL4'>
                     <h1>Z Flod 4</h1>
                     <ul id='espec' type="none">
                        <li>Câmera: 50MP</li>
                        <li>Bateria: 5.000 mAh</li>
                        <li>Espaço: 256 GB</li> 
                        <li>RAM: 12GB</li> 
                        <li><p className='Price'>90.000 MT</p></li>
                        <li><p className="Comprar" ><a href="https://wa.me/+258877109499">Compre</a></p></li>
                     </ul>
                    </div>    
            </Slider>
            </section>
        </div>
    )
}