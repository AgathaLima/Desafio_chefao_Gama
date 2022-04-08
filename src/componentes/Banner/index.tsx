import { Container } from "./styles"

interface Props {
    img: any
 }

export function Banner({img}: Props){
    return(
        <Container>
            <img src={img} alt="banner" />
        </Container>
    )
}

