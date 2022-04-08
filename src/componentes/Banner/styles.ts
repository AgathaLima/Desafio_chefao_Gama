import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 50px;
    img{
    width: 100%;
    height: 450px;
    margin: auto;

    @media only screen and (max-width: 800px ) {
        height: 250px;
    }
   
    }
`; 