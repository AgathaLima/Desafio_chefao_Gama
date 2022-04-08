import styled from "styled-components";

export const Container =styled.section`
    display: flex;
    flex-direction: column;

div{ 

    width: 80%;
    margin: auto;
    margin-bottom: 40px;
    text-align: center;
    
    h1{
        font-family: Dosis;
        font-size: 45px;
        font-weight: 700;
        line-height: 52px;
        letter-spacing: 0em;
        text-align: left;
        color: #D91A4D;

        margin-bottom: 40px;
    }
    p{
        font-family: Lato;
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        color:#3A3A3A;

        margin-bottom: 40px;

    }
    span{
        display: block;
        font-family: Lato;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0em;
        color:#3A3A3A;
        text-align: left;
    }

    img{
        margin: 0 3% 0 3%;
        text-align: center;
    }
}
`;