import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cel from '../../Assets/mobile/c.c.png';
import tb from '../../Assets/mobile/TB.png';
import tv from '../../Assets/mobile/TVs.png';
import JBL from '../../Assets/mobile/JBL.png';
import RL from '../../Assets/mobile/RL.png';
import Lap from '../../Assets/mobile/Lap.png';

function main(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 2024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return(
        <div className="main">
            <h2>
            Olá! <br></br>
                Em que podemos ajudar?
            </h2>

            <section className="Scroll">
                <Slider{...settings}>
                <div id="card">
                 <img src={cel} alt="photcelphone"/>
                 <h3>Celulares</h3>
                 <p>Descubra os smartphones 
                    de última geração que oferecemos,
                    mantendo você conectado 
                    e atualizado.</p>
                </div>
                <div id="card">
                <img src={tb} alt="phototablet"/>
                <h3>Tablets</h3>
                <p>
                Navegue pelo mundo digital com 
                nossos tablets versáteis. 
                Nossos tablets permitem que você trabalhe,
                estude e divirta-se onde quer que esteja
                </p>
                </div>
                
                <div id="card">
                <img src={tv} alt="Phototv" />
                <h3>TVs</h3>
                <p>Experimente a emoção de uma
                experiência cinematográfica em
                sua própria casa com as nossas
                TVs de alta definição
                </p>
                </div>

                <div id="card">
                <img src={JBL} alt="PhotoJBL" />
                <h3>JBL</h3>
                <p>Desfrute da qualidade sonora 
                  superior com nossos 
                  dispositivos de som JBL.
                </p>
                </div>

                <div id="card">
                <img src={RL} alt="PhotoRL" />
                <h3>Relogios</h3>
                <p>Descubra nossa coleção de relógios 
                  sofisticados que combinam 
                  estilo e funcionalidade.
                </p>
                </div>

                <div id="card">
                <img src={Lap} alt="PhotoLap" />
                <h3>Computadores</h3>
                <p>Explore nossa seleção de
                  laptops de última geração, 
                  projetados para atender 
                  às suas necessidades 
                  de computação. 
                </p>
                </div>
                </Slider>
            </section>
        </div>
    )
}
export default main;