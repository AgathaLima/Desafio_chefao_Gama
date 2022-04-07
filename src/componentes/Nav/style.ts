import styled from 'styled-components'

export const Container = styled.nav`
height: 108px;
color: black;
justify-content: space-between;
display: flex;
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