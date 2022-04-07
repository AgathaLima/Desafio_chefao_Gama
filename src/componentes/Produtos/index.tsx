import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { CardProdutos } from "../CardProdutos";

export function Produtos(){
    return(
        <>
        <Nav/>
        <CardProdutos categoria="Batidos" titulo="Praia vermelha" dados="dados aqui"  />
        <Footer/>
        </>
    )
}