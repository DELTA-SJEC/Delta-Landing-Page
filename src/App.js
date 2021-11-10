import styled from "styled-components";

function App() {
  return (
    <>
      <BodySection>
        <SpinImage src="https://avatars.githubusercontent.com/u/93979833?s=200&v=4" />
        <CustomHeadingFont>
          Visual primitives for the component age.
        </CustomHeadingFont>
        <CustomParaFont>
          Use the best bits of ES6 and CSS to style your apps without stress 💅🏾
        </CustomParaFont>

        <ButtonContainer>
          <CustomButton href="https://google.com">Hello 01</CustomButton>
          <CustomButton href="https://google.com">Hello 01</CustomButton>
        </ButtonContainer>

        <CodeEditor
          src="https://replit.com/@vigneshshettyin/MundaneFrivolousPython?lite=true"
          scrolling="no"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </BodySection>
    </>
  );
}

const CustomHeadingFont = styled.h1`
  color: white;
  margin: 1%;
  text-align: center;
`;

const CustomParaFont = styled.p`
  color: white;
  margin: 1%;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CustomButton = styled.a`
  display: inline-block;
  text-decoration: none;
  border-radius: 3px;
  padding: 0.5rem 0;
  text-align: center;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

const BodySection = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  width: 40vw;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export default App;
