import styled from "styled-components";
import { useSelector } from 'react-redux';
import { deleteCart } from "../../lib/api/cart";
import { cartlist } from '../../modules/getcart';
import { useDispatch } from "react-redux";
import { mobile } from '../../responsive';
import ClearIcon from '@mui/icons-material/Clear';



const Product = styled.div`
  display: flex;
  justify-content: space-between;
 
`;
const Button = styled.button`
  width: 35px;
  height: 35px;
  margin-top: 70px;
  margin-right: 50px;
  cursor: pointer;
  border: none;
  background-color: white;
  color: black;
  font-weight: 500;
  &:hover {
      transform: scale(1.5);
    }  
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${mobile({width: '120px', height: '150px' })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({fontSize: '13px'})}
`;

const ProductName = styled.span`
    font-weight: bold;
    color: #000000;
`;

const ProductId = styled.span``;



const ProductSize = styled.span`
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
`;

const ProductAmount = styled.div`
  font-size: 18px;
  ${mobile({fontSize: '13px'})}
`;

const ProductPrice = styled.div`
  font-size: 18px;
  color: #fa5400;
  font-weight: normal;
  ${mobile({fontSize: '13px'})}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;






const Cartitem = ({post, loading}) => {
  const dispatch = useDispatch();
  const { userId, selectedFile,  quantity, productId, size, title, color, total } = post
  
  const onRemove = async () => {
    try {
        await deleteCart(post._id);
        dispatch(cartlist(userId, selectedFile,  quantity, productId, size, title, color, total ));
    } catch (e) {
        console.log(e);
    }
};
 



    const { user } = useSelector(
        ({user}) => ({
          user : user.user
        })
      ) 
      if(user._id !== post.userId) {
          return;
          
          
       }else {
    
    return (
        <>

           <Product>
              <ProductDetail>
              <Image src={post.selectedFile} alt='사진' />
                <Details>
                  <ProductName>
                    {post.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>{post.userId}
                  </ProductId>
                  <ProductSize>
                    <b>사이즈:</b> {post.size}
                  </ProductSize>
                  <ProductAmount>수량:{post.quantity}</ProductAmount>
                  <ProductPrice>{post.total.toLocaleString()}원</ProductPrice>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  
                  {/* <ProductAmount><b>수량:</b>{post.quantity}</ProductAmount> */}
                 
                </ProductAmountContainer>
                {/* <ProductPrice>{post.total.toLocaleString()}원</ProductPrice> */}
              </PriceDetail>
              <Button onClick={onRemove}><ClearIcon/></Button>
              </Product>
              <Hr/>
        </>
         )
        }
    }
    
export default Cartitem;