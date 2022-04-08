import { Container } from "./style";
import { RiInstagramFill} from 'react-icons/ri'
import { GrFacebook } from 'react-icons/gr'
import logoBranca from '../img/juice_branca 1.png'

export function Footer(){
    return(
        <Container>
            <div>
                <h1>Nossa e-mail</h1>
                <small>contato@juicemania.com.br</small>
                <h1>Receba novidades</h1>
                <small>Assine nossa newsletter <span>aqui</span></small>
            </div>
            <div>
                <img src={logoBranca} alt="LogoBranca" />
                <p><small> 'colocar copy' Grupo 10. Todos os direitos reservados</small></p>
            </div>
            <div>
                <h1>Redes sociais</h1>
                <div className="icons">
                    <GrFacebook />
                    <RiInstagramFill />
                </div>
            </div>
            
        </Container>
    )
}