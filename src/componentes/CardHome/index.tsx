import batidos from '../img/batidos.png'
import cha from '../img/cha.png'
import detox from '../img/DETOX.png'
import matinais from '../img/MATINAIS.png'
import milk from '../img/MILK-SHAKE.png'
import apres from '../img/APRESENTACAO.png'
import { Container } from './style'

export function CardHome(){
    return(
        <Container>
        <img src={apres} alt="apresentação" />
        <h1>Conheça nossos produtos</h1>
        <img src={batidos} alt="batidos" />
        <img src={matinais} alt="matinais" />
        <img src={milk} alt="milk" />
        <img src={cha} alt="cha" />
        <img src={detox} alt="detox" />
        </Container>
    )
}