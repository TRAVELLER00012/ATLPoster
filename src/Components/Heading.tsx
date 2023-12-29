import styled from "styled-components"

const HeadingDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const H1 = styled.h1`
    font-size: 6rem;
    text-shadow:5px 1px 2px #fd6f00;
    margin-bottom: 20px;
`
const H3 = styled.h3`
    font-size:1.25rem;
    text-align:center;
    font-weight:400;
    opacity:0.5;
    width:50ch;
    margin-top:0;
`

const YellowButton = styled.div`
    background-color:#fd6f00;
    padding: 20px 30px;
    font-size:1.25rem;
    border-radius:10px;
    margin-top:10px;
    text-align:center;
    cursor:pointer;
`
const Link = styled.div`
    padding-top:5px;
`

const Heading = () => {
  return (
    <>
        <HeadingDiv>
            <H1>The Future</H1>
            <H3><span>Want to use AI in your application,But don't know how to create one? Well, if you are one of them,We got you!</span></H3>
            <H3><span>I am thrilled to introduce my innovative project, an AI Integration Platform designed to streamline the integration of artificial intelligence services into developers' applications. This platform is a testament to the power of collaboration and innovation, embodying a harmonious blend of cutting-edge technologie</span></H3>
            <YellowButton>Start Now At!<br /><Link>https://ai-services-beta.vercel.app/</Link></YellowButton>
        </HeadingDiv>

    </>
  )
}

export default Heading