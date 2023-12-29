import styled from "styled-components"

const MainDiv = styled.div`
    position: absolute;
    border: 2px solid rgba(255,255,255,0.5);
    padding: 20px 30px;
    text-transform: uppercase;
    font-size: 2rem;
    transform:rotateZ(270deg);
    top:40%;

    @media (max-width: 1024px) {
        display:none;
    }
`

const AIBoard = () => {
    return (
        <MainDiv>
            Artificial intelligence
        </MainDiv>
    )
}

export default AIBoard