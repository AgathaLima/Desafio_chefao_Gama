import { Promocionais } from "../Promocionais";
import { Container } from "./styles";

export function Main(){
    return(
        <>
        <Container>
            <div className="blocos">
            <div className="img">IMG</div>
            <div><img src=""/>
            <h1>Título</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur, suscipit qui impedit ipsa dolorem optio sint dolorum magnam, ab cupiditate incidunt laborum dignissimos, minima inventore assumenda neque placeat alias.</p>
            </div>
            </div>
            <div className="blocos">
            <div><img src=""/>Hello</div>
            <div className="img">IMG</div>
            </div>   
            <div className="blocos">        
            <div className="img">IMG</div>
            <div><img src=""/>Hello</div>
            </div> 
            {/* <div className="blocos">
            <div><img src=""/>hello</div>
            <div className="img">IMG</div>
            </div> */}   
        </Container>
        <Promocionais />
        </>
    )
}