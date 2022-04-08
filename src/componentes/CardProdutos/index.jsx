import { Container } from "./style";
import { useState, useEffect } from 'react'
import axios from "axios";


export function CardProdutos(){
    const [ itens, setItens] = useState([])
    const  [text, setText] = useState([])

        useEffect(()=>{
            axios.get(`https://juice-mania.herokuapp.com/juices`)
            .then((res)=>{
                setItens(res.data)
            })
            .catch(erro =>console.log(erro))
        }, [])

    return ( 
        
        <>     
        <Container>
                  {itens.map((card) => {
                   return(
                    
                    <div className="cards" key={card.id}>
                        <img src={card.linkFoto} alt="teste"/>
                        <div className="texto">
                        <h2>{card.nome}</h2>
                        <p>{card.descricao}</p>
                        </div>
                    </div>
                    
                    )
                     })}
             
        </Container>
        </>
    )
}