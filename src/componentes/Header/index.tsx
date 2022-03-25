import { ImagemHeader } from "../ImagemHeader";
import { Nav } from "../Nav";
import { Container } from "./style";

export function Header(){
    return(
        <Container>
           <Nav />
           <ImagemHeader />
        </Container>
    )
}