import styled from "styled-components";
import { Newsletters } from "../data";
import { mobile } from "../responsive";
import NewsletterItem from "./Newsletteritem";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;


 const Newsletter = () => {
  return (
    <Container>
      {Newsletters.map((item) => (
        <NewsletterItem item={item} key={item.id} />
      ))}
    </Container>
  );
 }
export default Newsletter;