import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function JBL(){
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
        <div className='JBL2'>
                <h2>Handfree</h2>
                <section className='Handfree'>
                <Slider {...settings}>
                <div id="card" className='T110'>
                <h1>TUNE T110 wired handfree</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>1.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='T205'>
                <h1>TUNE T205 wired handfree</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>1.700,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='A215'>
                <h1>TUNE 215 handfree Bluthoot</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>3.200,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_TUNE_115_BT'>
                <h1>JBL TUNE 115 BT</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>2.600,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_TUNE_175_BT'>
                <h1>JBL TUNE 175 BT Handfree Bluthoot</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>3.000,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='TUNE_125_BT'>
                <h1>TUNE 125 BT Bluetooth handfree</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>3.000,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='TUNE_T205_BT_BLUETOOTH'>
                <h1>TUNE T205 BT BLUETOOTH HANDFREE</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>3.000,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                </Slider>
                </section>


                <h2>Airpod</h2>
                <section className='Airpod'>
                <Slider {...settings}>
                <div id="card" className='JBL_TUNE_215_TWS_AIRPOD'>
                <h1>JBL TUNE 215 TWS AIRPOD</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>5.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_VIBE_200_TWS_AIRPOD'>
                <h1>JBL VIBE 200 TWS AIRPOD</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>5.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_WAVE_300_TWS'>
                <h1>JBL WAVE 300 TWS</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>6.000,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_TUNE_115_TWS_AIRPOD'>
                <h1>JBL TUNE 115 TWS AIRPOD</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>6.300,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_TUNE_130NC_AIRPOD'>
                <h1>JBL TUNE 130NC AIRPOD</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>7.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_TUNE_FLEX_TWS_AIRPOD'>
                <h1>JBL TUNE FLEX TWS AIRPOD</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>8.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                </Slider>
                </section>

                <h2>Column Bluetooth</h2>
                <section className='Column_Bluetooth'>
                <Slider {...settings}>
                <div id="card" className='JBL_GO_3'>
                <h1>JBL GO 3</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>4.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_CLIP_4'>
                <h1>JBL CLIP 4</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>6.000,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_FLIP_6'>
                <h1>JBL FLIP 6</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>9.000,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_CHARGE_4'>
                <h1>JBL CHARGE 4</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>11.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_XTREME_2'>
                <h1>JBL XTREME 2</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>18.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_XTREME_3'>
                <h1>JBL XTREME 3</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>21.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_BOOM_BOX_2'>
                <h1>JBL BOOM BOX 2</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>33.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_BOOM_BOX_3'>
                <h1>JBL BOOM BOX 3</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>40.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                </Slider>
                </section>


                <h2>Party Box</h2>
                <section className='Party_Box'>
                <Slider {...settings}>
                <div id="card" className='Party_Box_One_the_Go_com_micro'>
                <h1>Party Box One the Go com micro</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>30.500,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='Party_Box_110'>
                <h1>Party Box 110</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>35.000,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='Party_Box_310'>
                <h1>Party Box 310</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>48.000,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='Party_Box_710'>
                <h1>Party Box 710</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>66.000,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                </Slider>
                </section>

                <h2>Headphones</h2>
                <section className='Headphones'>
                <Slider {...settings}>
                <div id="card" className='JBL_JR_310_BT_KIDS'>
                <h1>JBL JR 310 Bt KIDS</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>4.300,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_TUNE_500_BT'>
                <h1>JBL TUNE 500Bt</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>4.400,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_TUNE_570'>
                <h1>JBL Tune 570</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>4.700,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_LIVE_660BT'>
                <h1>JBL Live 660bt</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>11.300,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_TUNE_710_BT'>
                <h1>JBL TUNE 710 bt</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>7.000,09 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                <div id="card" className='JBL_TUNE_760_BT'>
                <h1>JBL TUNE 760 bt</h1>
                <ul id='espec' type="none"> 
                    <li><p className='Price'>9.000,00 MT</p></li>
                    <li><p className="Comprar" ><a href="">Compre</a></p></li>
                </ul>
                </div>
                </Slider>
                </section>
        </div>
    )
}