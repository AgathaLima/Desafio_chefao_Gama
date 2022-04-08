import { Container } from './style'
import ar from '../img/AR.png'
import agua from '../img/ÁGUA.png'
import animais from '../img/ANIMAIS.png'
import pessoas from '../img/PESSOAS.png'

export function Organicos(){
    return(
        <Container>
            <div>
                <h1>Por que orgânicos?</h1>
                <p>Quando você consome produtos orgânicos, você está protegendo futuras gerações! Para o cultivo correto de um fruto orgânico o solo é devidamente preparado, são ricos e balanceados com adubos naturais e longe (bem longe!) de insumos químicos.</p>
                <span>Assim, não há a contaminação do...</span>
            </div>
            <div>
                <img src={ar} alt="ar" />
                <img src={agua} alt="agua" />
                <img src={animais} alt="animais" />
                <img src={pessoas} alt="pessoas" />
            </div>
        </Container>
    )
}