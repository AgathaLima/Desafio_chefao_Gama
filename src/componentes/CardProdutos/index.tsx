import { Container } from "./style";
import { useState, useEffect } from 'react'
import axios from "axios";

// interface Props {
//     categoria: string,
//     titulo: string,
//     dados: string,
// {categoria, titulo, dados}: Props
// }

export function CardProdutos(){
    const [ itens, setItens] = useState([])

        useEffect(()=>{
            axios.get('https://juice-mania.herokuapp.com/juices')
            .then((res)=>{
                setItens(res.data)
            })
            .catch(erro =>console.log(erro))
        }, [])
        
        console.log(itens)
    return (
        <Container>
                 {itens.map((card) => {
                   return(
                    <>
                    <h1>{card.categoria}</h1>
                    <div>
                        <h4>{card.nome}</h4>
                        <p>{card.descricao}</p>
                    </div>
                    </>
                    )
           })} 
        </Container>
        
    )
}