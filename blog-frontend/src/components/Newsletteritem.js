import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  flex: 1;
  margin: 3px;
  position: relative;
`;



const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const NewsletterItem = ({ item }) => {
  return (
    <Container>
      <video src="image/video run.mp4" loop autoPlay muted style={{height: '90%',width:'100%'}}/>  
      <Info>
      </Info>
    </Container>
  );
};

export default NewsletterItem ;