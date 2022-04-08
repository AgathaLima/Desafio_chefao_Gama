import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
font-family: Dosis;
color: #fff;
margin-top: 10%;

h2{
    
    text-align: center;
    margin-bottom: 20%;
}

.cards{

    text-align: center;
    background-color: #D91A4D;
    width: 550px;
    height: 25%;
    display: flex;
    margin-bottom: 70px;
    border-radius: 50px;

    @media only screen and (max-width: 570px){
            width: 80%;
            
            border-radius: 30px;

    }
    @media only screen and (max-width: 375px){
            width: 70%;
           border-radius: 40px;
    }
}

.texto{
    display: block;
    padding: 10%;
    @media only screen and (min-width: 375px){
            width: 40%;
            padding: 1% ;
    }
}

img{
    align-items: flex-start;
    height: 100%;
    width: 50%;
    @media only screen and (max-width: 570px){
            width: 50%;
    }
}


`;