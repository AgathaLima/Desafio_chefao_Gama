import { Container } from "./styles";
import { Banner } from "../Banner";
import { SobreDescricao } from "../SobreDescricao";
import bannerSobre from '../img/bannerSobre.png'
import logo from '../img/logo.png'
import sobre1 from '../img/sobre1.png'
import sobre2 from '../img/sobre2.png'
import sobre3 from '../img/sobre3.png'
import sobre4 from '../img/sobre4.png'
import amazonia from   '../img/amazonia.png'
import tartaruga from   '../img/tartaruga.png'
import { Valores } from "../Valores";
import { Organicos } from "../Organicos";

export function AGente(){
    return(
        <Container>
        <Banner img={bannerSobre} />
            <SobreDescricao titulo="A gente" 
            descricao="Hellooo Maniacs! A Juice Mania veio para oferecer saúde com um leve toque de frescor. Nossas lojas contam com um cardápio variado e saudável. Oferecemos batidos orgânicos, fresquinhos feitos na hora." descricao2=""
            img={logo}/>
            <Banner img={sobre1} />
             <Valores />
            <Banner img={sobre2}/>
            <SobreDescricao titulo="Compromisso" 
            descricao="Apresentamos ações voltadas para #sustentabilidade. Priorizamos a integridade do meio ambiente aliado ao Desenvolvimento Sustentável."
            descricao2 ="Desde o recebimento da matéria prima até o batido, a Juice Mania zela pelo seu bem-estar e o natural. Com nossas embalagens biodegradáveis e frutas de origem 100% orgânicas, firmamos o compromisso com o planeta. Parte da nossa renda é destinada as famílias carentes do interior da Amazônia." 
            img={amazonia}/>
            <Banner img={sobre3}/>
            <SobreDescricao titulo="Nossa Causa" 
            descricao="Ajudar pequenos agricultores: Grande parte dos produtos orgânicos é originada de pequenos núcleos familiares que têm na terra sua única forma de sustento. Ao manter o solo fértil e saudável, o cultivo orgânico dá ao homem o que plantar, revitalizando as propriedades rurais."

            descricao2= "Restaurar a Biodiversidade: Para nós, uma agricultura sustentável é aquela que gera biodiversidade ao resgatar o equilíbrio ecológico das fazendas, exercendo impacto social e econômico positivo sobre a comunidade. Esse é o jeito Juice de ser uma empresa amiga da Biodiversidade."
            img={tartaruga}/>
            <Banner img={sobre4}/>
            <Organicos />
    </Container>
    )
    
}