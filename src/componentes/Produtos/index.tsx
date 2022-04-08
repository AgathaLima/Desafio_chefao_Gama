import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { CardProdutos } from "../CardProdutos";
import { Banner } from "../Banner";
import banner3 from '../img/Bannerprodutos (1).png'


export function Produtos(){

    return(
        <>
        <Nav/>
        <Banner img={banner3} />
        <CardProdutos />
        <Footer/>
        </>
    )
}