import { Container } from "./style";
import { useState, useEffect } from 'react'
import teste from '../img/teste.png'
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
             <h1>Batidos</h1>
                 {itens.map((card) => {
                   return(
                    <>
                    <div key={card.id}>
                        <img src={teste} alt="teste"/>
                        <div className="texto">
                        <h4>{card.nome}</h4>
                        <p>{card.descricao}</p>
                        </div>
                    </div>
                    </>
                    )
           })} 
        </Container>
        
    )
}