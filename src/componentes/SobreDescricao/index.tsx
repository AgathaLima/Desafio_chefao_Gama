import { Container } from "./styles";


     interface Props {
        descricao: string,
        descricao2: string, 
        titulo: string,
        img: any,
      }

export function SobreDescricao( {descricao, descricao2, titulo, img}: Props){

    return (
        <Container>
            <div>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p>{descricao2}</p>
            </div>
            <div>
                <img src={img} alt="img" />
            </div>
        </Container>
    )
}