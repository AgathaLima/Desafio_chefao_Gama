import visao from '../img/Visão.png'
import valores from '../img/Valores.png'
import missao from '../img/Missão.png'
import { Container } from './style'

export function Valores(){
    return(
        <Container>
            <div>
            <img src={missao} alt="missao" />
            <p>Conscientizar as pessoas a importância do consumo sustentável, proporcionando a cada gole uma experiência memorável.</p>
            </div>
            <div>
            <img src={visao} alt="visao" />
            <p>Sermos referência do mercado orgânico e batidos naturais no Brasil.</p>
            </div>
            <div>
            <img src={valores} alt="valores" />
            <p>Valorização à vida, paixão pelo que fazemos, compromisso com a sustentabilidade e cuidado no processo.</p>
            </div>
        </Container>
    )
}