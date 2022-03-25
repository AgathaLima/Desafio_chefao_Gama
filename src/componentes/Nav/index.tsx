import {Link} from 'react-router-dom'
import { Container } from "./style";

export function Nav(){
    return(
        <Container>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/missao">Missão</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                </ul>
        </Container>
    )
}