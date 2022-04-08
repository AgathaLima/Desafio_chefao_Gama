import styled from 'styled-components'

export const Container = styled.footer`
    height: 320px;
    width: 100%;
    background-color: #7FA663;
    margin-top: 85px;
    display: flex;
    font-family: Dosis;
    padding: 2%;

    @media only screen and (max-width: 665px) {
       display: block;
        font-size: small;
        text-align: center;
}

    div{
        color: white;
        margin: auto;
        display: flex;
        flex-direction: column;

}

@media only screen and (max-width: 665px) {
       img{
           width: 60%;
           height: 80px;
           margin: 6% auto;
       }
        span{
            
            color: #F2B705;
            font-weight: bolder;
        }
    }
    .icons{
        display: block;
        svg{
            padding: 2px;
            font-size: 30px;
        }
    }
`;