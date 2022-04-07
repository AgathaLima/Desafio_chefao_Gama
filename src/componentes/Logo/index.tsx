import { Container } from "./style"
import logo from   '../img/logo.png'

export default function Logo(){
    return(
        <Container>
            <img src={logo} alt="logo" />
       </Container>
    )
}