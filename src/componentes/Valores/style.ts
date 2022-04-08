import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: 940px ) {
        flex-direction: column;
    }

    div{
        width: 300px;
        height: 391px;
        margin-bottom: 80px;
        margin-top: 105px;
        @media only screen and (max-width: 940px ) {
        margin: auto;
    }
    }
    p{

        font-family: Lato;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        color: #3A3A3A;

    }
    img{
        height: 140px;
        margin-bottom: 30px;
    }
`