import styled from "styled-components"
import Ai from "../assets/images/ai-idea.png"

const MainDiv = styled.div`
    position:absolute;
    top:20%;
    right:1%;
    background-color:#271111;
    border: 5px solid #fd6f00;
    padding:20px 30px;

    @media (max-width:1024px){
        position:static;
        margin-top:50px;
    }
`
const H1 = styled.h1`
    display:flex;
    align-items:center;
    font-weight:500;
    font-size:1.75rem;
    border-bottom: 2px solid rgba(255,255,255,0.5);
    padding-bottom:10px;
`
const Img = styled.img`
    padding-right:20px;
`
const H3 = styled.h3`
    font-weight:300;
    width:40ch;
    @media (max-width:1024px){
        width:90ch;
    }
    @media (max-width:768px){
        width:60ch;
    }
`


const Feature = () => {
  return (
    <MainDiv>
        <H1><Img src={Ai}/> Effortless AI Integration</H1>
        <H3>Developers seamlessly integrate AI services into their applications using our platform by accessing well-documented APIs. With a user-friendly interface, they effortlessly incorporate functionalities like face detection, image-to-text conversion, object detection, and text similarity, enhancing their projects without the intricacies of developing complete AI models.</H3>
    </MainDiv>
  )
}

export default Feature