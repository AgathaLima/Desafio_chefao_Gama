import styled from 'styled-components'

export const Container = styled.nav`
height: 108px;
color: black;
justify-content: space-between;
display: flex;
font-family: Dosis;
font-size: 22px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: left;



ul{
    padding: 40px;
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-evenly;
    width: 40%;
}

a   {
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover{
        color:#7fa663;
        font-size: l;
    }

    }

`;