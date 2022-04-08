import { useEffect, useState } from "react"
import axios from 'axios'



export function Filtro(){

    const [categorias, setCategorias] = useState('')
    const [info, setInfo] = useState([])

    useEffect(()=>{
        if(categorias){
            axios.get(`https://juice-mania.herokuapp.com/juices/${categorias}`)
            .then((res)=>{
                setInfo(res.data)
            })
            .catch(erro =>console.log(erro))
        }   
    }, [categorias])

    console.log(categorias)


    return(
    <>
         <div>
            <input type="search"
            value={categorias}
            onChange={(e)=>setCategorias(e.target.value)}
            />
        </div>

            {info &&(
            <div className="cards">
            {info.map((itens)=>(
                <>
                <img src={itens.linkFoto} alt="teste" key={itens.id}/>
                <div className="texto">
                <h2>{itens.nome}</h2>
                <p>{itens.descricao}</p>
                </div>
                </>
            ))}      
             </div>       
            )}
    </>
}

