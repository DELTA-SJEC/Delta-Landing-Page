import styled from "styled-components";

function App() {
  return (
    <>
      <CustomNav>
        <SpinImage src="https://cdn.discordapp.com/attachments/801054654174855169/908388422752813118/Group_7.png" />
      </CustomNav>

      <BodySection>
        <BodyLeft>
          <CustomDeltaBack>DELTA</CustomDeltaBack>
          <CustomDelta>DELTA</CustomDelta>
          <CustomHeadingFont>Make A Difference</CustomHeadingFont>
          <CustomParaFont>
            “Hard work beats talent when talent doesn't work hard,”
            <CustomSpan>- Tim Notke</CustomSpan>
          </CustomParaFont>

          <ButtonContainer>
            <CustomButton href="https://eatmyurl.ml/15FTJm">
              Register
            </CustomButton>
            <CustomButton href="mailto:support@delta-sjec.tech">
              Email
            </CustomButton>
          </ButtonContainer>
        </BodyLeft>
        <BodyRight className="rightcont">
          <CustomImg src="./coder.svg"></CustomImg>
        </BodyRight>
      </BodySection>
    </>
  );
}
const CustomImg = styled.img`
  width: 35vw;
  align-self: center;

  @media (max-width: 1280px) {
    width: 60vw;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomNav = styled.div`
  width: 100vw;
  height: 10vh;
`;
const BodyLeft = styled.div`
  display: flex;
  flex-basis: 60vw;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 1280px) {
    width: 100vw;
    flex-basis: 100vw;
  }
`;
const BodyRight = styled.div`
  display: flex;
  flex-basis: 40vw;
  justify-content: top;
  align-items: top;
  overflow: hidden;
  height: 90vh;
  @media (max-width: 1280px) {
    flex-basis: 100vw;
    height: auto;
    margin-top: 10vh;
  }
`;
const CustomDeltaBack = styled.h1`
  font-size: 13rem;
  font-family: "Poppins", "Open sans";
  margin: 0;
  color: #f1f1f1;
  position: relative;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 11rem;
  }
`;
const CustomDelta = styled.h1`
  font-size: 7rem;
  font-family: "Poppins", "Open sans";
  margin: 0;
  text-align: center;
  position: absolute;
  left: 7vw;
  top: 25vh;
  letter-spacing: 0.41rem;
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const CustomHeadingFont = styled.h1`
  margin: 1%;
  font-weight: 700;
  text-align: center;
`;

const CustomParaFont = styled.p`
  margin: 1%;
  font-style: italic;
  text-align: center;
`;

const CustomSpan = styled.span`
  padding-left: 10px;
  font-style: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vh 0;
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
  background-image: linear-gradient(to right, #7f70dd 0%, #367cff 100%);

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
    transform: scale(1.05);
  }
`;

const BodySection = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: black;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  flex-wrap: wrap;
  overflow: hidden;
`;

const SpinImage = styled.img`
  display: flex;
  height: 10vh;
  width: 6vw;
  margin: 1% 2%;
  position: absolute;
  @media (max-width: 768px) {
    width: 17vw;
  }
  :hover {
    animation: spin 5s linear infinite;
  }
`;

export default App;
