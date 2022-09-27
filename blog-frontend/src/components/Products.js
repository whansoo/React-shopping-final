import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";
const Container = styled.div`
    padding: 50px 90px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ padding: 0 })}
`;

const Products = ({ products, loading, showWriteButton, query }) => {
  return (
    <>
    <Container>
       {!loading && products && (
         <div>
          {products.filter((asd) => asd.title.toLowerCase().includes(query)).map(post => (
            <Product post={post} key={post._id}/>
        ))}
          </div>
      )}
     
       {/* {!loading && products && (
         <div>
          {products.map(post => (
            <Product post={post} key={post._id}/>
        ))}
            </div>
      )}
      */}
  
    </Container>
    
    </>
  );
};

export default Products;