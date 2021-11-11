import styled from "styled-components";
function App() {
  return (
    <>
      <BodySection>
        <SpinImage src="https://avatars.githubusercontent.com/u/93979833?s=200&v=4" />
        <CustomHeadingFont>Make A Difference</CustomHeadingFont>
        <CustomParaFont>
          “Hard work beats talent when talent doesn't work hard,”
          <CustomSpan>- Kevin Durant</CustomSpan>
        </CustomParaFont>

        <ButtonContainer>
          <CustomButton href="https://eatmyurl.ml/15FTJm">
            Register
          </CustomButton>
          <CustomButton href="mailto:support@delta-sjec.tech">
            Email
          </CustomButton>
        </ButtonContainer>
      </BodySection>
    </>
  );
}

const CustomHeadingFont = styled.h1`
  color: white;
  margin: 1%;
  font-weight: 700;
  text-align: center;
`;

const CustomParaFont = styled.p`
  color: white;
  margin: 1%;
  font-style: italic;
  text-align: center;
`;

const CustomSpan = styled.span`
  color: White;
  padding-left: 10px;
  font-style: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CustomButton = styled.a`
  margin: 10px;
  padding: 1rem 0;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 2px;
  width: 11rem;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  display: inline-block;
  background-size: 200% auto;
  background-image: linear-gradient(
    to right,
    #00c6ff 0%,
    #0072ff 51%,
    #00c6ff 100%
  );

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
    transform: scale(1.05);
  }
`;

const BodySection = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: radial-gradient(circle, #232323 0%, black 100%);
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
`;

const SpinImage = styled.img`
  display: flex;
  height: 20vh;
  width: 10vw;
  @media (max-width: 768px) {
    width: 30vw;
  }
  :hover {
    animation: spin 5s linear infinite;
  }
`;

const CodeEditor = styled.iframe`
  height: 40vh;
  width: 50vw;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export default App;
