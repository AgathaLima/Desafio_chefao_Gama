import {Link} from 'react-router-dom'
import Logo from '../Logo';
import { Container } from "./style";

export function Nav(){
    return(
        <Container>
                <Logo />
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/missao">Produtos</Link></li>
                    <li><Link to="/produtos">A gente</Link></li>
                </ul>
        </Container>
    )
}