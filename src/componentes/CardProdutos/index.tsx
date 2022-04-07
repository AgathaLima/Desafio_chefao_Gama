import { Container } from "./style";

interface Props {
    categoria: string,
    titulo: string,
    dados: string,
}

export function CardProdutos({categoria, titulo, dados}: Props){
    return (
        
        <Container>
        <h1>{categoria}</h1>
        <div>
            <h4>{titulo}</h4>
            <p>{dados}</p>
        </div>
        </Container>
        
    )
}