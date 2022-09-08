import styled from "styled-components";
import Announcement from "../Announcement";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useSelector } from 'react-redux';
import Cartitem from './cartitem';
import Payment from "../../payment/index";
import { mobile } from "../../responsive";
const Container = styled.div`
   
`;

const Wrapper = styled.div`
  padding: 20px;
  margin: 0 200px;
  ${mobile({ margin: 0 })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({ fontSize: '18px' })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({display: 'none' })}
`;

const TopTexts = styled.div`
 ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  /* border-radius: 10px; */
  padding: 20px;
  height: 50vh;
  
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  font-size: 25px;
  
`;

const SummaryItem = styled.div`

  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;


const Cart = ({products, loading}) => {

  const { user } = useSelector(
    ({user}) => ({
      user : user.user
    })
    ) 

  const number = !loading && products &&(  
    products.filter((post) => post.userId === user._id).reduce((acc, cur) => {
     return (acc += cur.quantity);
   }, 0)
  )
 const total = !loading && products &&(  
   products.filter((post) => post.userId === user._id).reduce((acc, cur) => {
    return (acc += cur.total);
  }, 0)
  
  
 )
 console.log(total)
  return (  
<Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>장바구니</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
          {!loading && products &&(
         <div>
          {products.map(post => (
            <Cartitem post={post} key={post._id} />
        ))}
            </div>
      )}   
         
           </Info>
           <Summary>
            <SummaryTitle>주문 요약</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>수수료</SummaryItemText>
              <SummaryItemPrice>없음</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>할인쿠폰</SummaryItemText>
              <SummaryItemPrice>없음</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>배송비</SummaryItemText>
              <SummaryItemPrice>무료</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>합계</SummaryItemText>
              <SummaryItemPrice>  
                {!loading && products &&(
                  <div>
             {products.filter((post) => post.userId === user._id).reduce((acc, cur) => {
                  return (acc += cur.total);
                }, 0)
                .toLocaleString()}원
                </div>
               )}
               </SummaryItemPrice>
                
            </SummaryItem>
            <Payment total={total} userId={user._id} loading={loading} number={number}/>
          </Summary> 
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>

            );
  }




export default Cart;