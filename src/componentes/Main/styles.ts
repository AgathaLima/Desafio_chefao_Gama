import styled from 'styled-components'

export const Container = styled.main`
    
    background-color: white;
    margin: 0 auto;
        
    .blocos{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-bottom: 75px;
    }

    .img{
        width: 50%;
        height: 640px;
        background-color: black;
        color: white;
    }
    div{
        text-align: center;
        width: 50%;
        height: 640px;
        background-color: red;

        h1{
            justify-content: center;
            align-items: center;
        }
        p{
            justify-content: center;
            align-items: center;
        }
    
    }

    `;