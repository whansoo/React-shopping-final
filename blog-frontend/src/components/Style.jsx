import styled from "styled-components";
import { Style } from "../data";
import { mobile } from "../responsive";
import StyleItem from "./Styleitem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;


 const Stylea = () => {
  return (
    <Container>
      {Style.map((item) => (
        <StyleItem item={item} key={item.id} />
      ))}
    </Container>
  );
 }
export default Stylea;