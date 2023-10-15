import Detail from "./components/left-box/Detail";
import Languages from "./components/left-box/Languages";
import Profile from "./components/left-box/Profile";
import Skills from "./components/left-box/Skills";
import Description from "./components/left-box/description";
import Education from "./components/right-box/Education";
import Projects from "./components/right-box/Projects";
import styled from "styled-components";

function App() {
  return (
    <PremResume>
      <Left>
        <Profile />
        <Detail />
        <Description />
        <Skills />
        <Languages />
      </Left>
      <Right>
        <Projects />
        <Education />
      </Right>
    </PremResume>
  );
}

export default App;

const PremResume = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  width: 595px;
  height: 842px;
  margin: 25px 0px;
  box-shadow: 0px 0px 15px #808080;
  
  @media screen and (max-width:655px){
    display: flex;
    padding: 20px;
    flex-direction: column;
    width: auto;
    height: auto;
    margin: 10px;
  }
  
  `

const Left = styled.div`
  width: 34%;
  background-color: rgb(228,228,228);
  padding: 20px;
  font-size: 14px;
  
  @media screen and (max-width:655px){
    width: auto;
    background-color: rgb(239,239,239);
    margin-bottom:50px;
  }
  `

const Right = styled.div`
  width:55%;
  
  @media screen and (max-width:655px){
    width: auto;
  }
  `