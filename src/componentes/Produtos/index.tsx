import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { CardProdutos } from "../CardProdutos";
import { Banner } from "../Banner";
import banner2 from '../img/BANNER_SITE 2.png'


export function Produtos(){

    return(
        <>
        <Nav/>
        <Banner img={banner2} />
        <CardProdutos />
        <Footer/>
        </>
    )
}