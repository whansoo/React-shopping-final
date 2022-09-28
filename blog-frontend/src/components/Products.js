import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";

const Container = styled.div`
  margin-top: 70px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;
const Products = ({ products, loading, showWriteButton, query }) => {
  return (
    <>
    
       {!loading && products && (
        <Container>
          {products.filter((asd) => asd.title.toLowerCase().includes(query)).map(post => (
            <Product post={post} key={post._id}/>
        ))}
        </Container>
      )}
    </>
  );
};

export default Products;