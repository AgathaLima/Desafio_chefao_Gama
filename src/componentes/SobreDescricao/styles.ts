import styled from 'styled-components';

export const Container =styled.section`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1200px){
        flex-direction: column;
    }

    div{
        display: flex;
        flex-direction: column;
        width: 100%;

        margin-top: 97px;
        margin-bottom: 80px;

        img{
            width: 25vw;
        }

        @media only screen and (max-width: 1200px) {
                img{
                    width: 80%;
                    margin: auto;
                }
            }

        h1{
            margin-left: 135px;
            margin-bottom: 40px;
            color: #D91A4D;
            font-family: Dosis;
            font-size: 45px;
            font-weight: 700;
            line-height: 52px;
            letter-spacing: 0em;
            text-align: left;
        }

        @media only screen and (max-width: 1200px) {
                h1{
                    margin: auto;
                    margin-bottom: 5%;
                }
            }
            

        p{
            color: #3A3A3A;
            margin-left: 135px;
            font-family: Lato;
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;
            letter-spacing: 0em;
            text-align: left;
        }

        @media only screen and (max-width: 1200px) {
                p{
                   padding: 5px;
                }
            }

            
        @media only screen and (max-width: 400px) {
                p{
                font-size: 16px;
                   margin: auto;
                

                }
            }

    }

`;