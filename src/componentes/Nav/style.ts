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

@media only screen and (max-width: 750px) {
font-size: 16px;
font-weight: 400;
line-height: 25px;

}

@media only screen and (max-width: 750px) {
font-size: 10px;
font-weight: 400;
line-height: 20px;

}



ul{
    padding: 3%;
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