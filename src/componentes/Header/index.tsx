
import { BannerHome } from "../BannerHome";
import { Nav } from "../Nav";
import { Container } from "./style";

export function Header(){
    return(
        <Container>
           <Nav />
           <BannerHome/>
        </Container>
    )
}