import styled from "styled-components";
import Footer from "../components/Footer";
import ProductList from "../components/product/ProductList";
import Stylea from "../components/Style";
import { mobile } from "../responsive";



const Container = styled.div`

`;

const FilterContainer = styled.div`
    display:flex; //수직 -> 수평
    justify-content: space-between; //filter 사이 공간 여백 왼쪽 끝과 오른쪽 끝
    margin-top: 100px;
`;
const Filter = styled.div`
margin:20px;

`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({fontSize:'15px' })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option`
    
`;
const ShopList = () => {


     return (
        <Container>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select >
                        <Option disabled selected >
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select >
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>220</Option>
                        <Option>230</Option>
                        <Option>240</Option>
                        <Option>250</Option>
                        <Option>260</Option>    
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (ase)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <ProductList/>
            <Stylea/>
            <Footer/>
        </Container>
     )

}

export default ShopList