import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import Announcement from "../Announcement";
import Footer from "../Footer";
import Navbar from "../Navbar";
import React from "react";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchProduct } from '../../lib/api/product';
import { createCart } from '../../modules/cart';
import { useEffect } from 'react';
import { useDispatch} from "react-redux";
import AskSizeModal from './AskSizeModal';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: #FFFAFA;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  margin-left: 200px;
 
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  
`;

const InfoContainer = styled.div` 
 width: 588px;
 display:block;
  /* flex: 1; */
  padding: 0px 50px;
  margin-right: 200px;
`;

const Title = styled.h1`
  font-weight: 200;
  flex: 1;
  padding-top: 100px;
 
  margin: 0;
    font-weight: 600;
    font-size: 38px;
    line-height: 1.2;
    word-break: keep-all;
    word-wrap: break-word;
    overflow-wrap: break-word;
    color: inherit;
    font-family: "Noto Sans KR", "맑은 고딕", Dotum;
`;

const Desc = styled.p`
  margin: 20px 0px;
  border-bottom: 1px solid #c8c8c8;
  padding-bottom: 20px;
  width: 600px;
  text-align:right;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    /* margin: 30px 0 0; */
    line-height: 30px;
    margin-right: .5em;
    color: aqua;
    display: block;
    padding-top: 30px;
    font-family: "Noto Sans KR", "맑은 고딕", Dotum;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
 
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  padding-right: 20px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;


const StyledRadio = styled.label`
& {
    input[type="radio"] {
      display: none;
      & + span {
        display: inline-block;
        margin-right: 10px;
        padding: 0px 15px;
        height: 35px;
        line-height: 33px;
        font-weight: 500;
        text-align: center;
        color: #222222;
        border: 1px solid #9f9f9f;
        background: none;   
        cursor: pointer;
      }
      &:checked {
        & + span {
          color: #fff;
          border: 1px solid #fe1448;
          background: #fe1448;
        }
      }
    }
  }
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  color: gray;
  border-radius: 30px;
  padding: 20px;
 
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
      transform: scale(1.1);
  }
`;

const ButtonModal = styled.button`
     margin-right: 50px;
     border: none;
     cursor: pointer;
     color: black;
     font-size: 15px;
     &:hover{
      background-color: #f8f4f4;
      transform: scale(1.1);
  }
`
const SocialContainer = styled.div`
  display: flex; //수평으로 만듬
  padding-top: 80px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  /* border-radius: 50%; */
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const ProductDetail = () => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
 
  const [cartItems, setCartItems] = useState([]);  
  const params = useParams();
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  
 
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const { user } = useSelector(
    ({user}) => ({
      user : user.user,
    })
  )
 

  useEffect(() => {
    const products = async () => {
      try {
        setProducts(null);

        const response = await fetchProduct(params.id);
        setProducts(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    products();
  }, [params, setProducts]);


  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity >= 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const onClick = e => {
    setSize(e.target.value)
  }
  console.log(size)
 
 

  
   const handleClick = (product) => {
    const { selectedFile, price, title, color} = products;
    const total = quantity * price
   if(!user) {
      alert('로그인을 먼저 하세요.')
   }
    else {
      if(window.confirm("장바구니에 담겼습니다. 장바구니 페이지로 이동 할까요?")) {
        window.location.href = "/cart"
    }
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
    setCartItems(
      cartItems.map((x) =>  //여기서 map은 반복문 역할을 한다 ...exist는 스프레드 문법으로 배열을 펼치고 qty를 더한다.
        x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }
 
   

    
dispatch(createCart({user, selectedFile, quantity,price, size, title, color, total}));
console.log("products" + JSON.stringify(products));
}
   }
if (!products) return null;


//로딩 중이거나 아직 포스트 데이터가 없을 때
// if (loading || !productview) {
  //   return null;
  // }
  
  // const { title, body, selectedFile, price, size, color  } = productview;
 
  
  return (
    <Container>
      <Navbar countCartItems={cartItems.length} />
      <Announcement />
      <Wrapper>
        <ImgContainer>
        <Image src={products.selectedFile} alt='사진'  style={{width:'650px', height:'650px',border: '1px solid teal'}}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{products.title}</Title>
          <Price>{products.price}원</Price>
          <Desc>
          <ButtonModal  onClick={onRemoveClick}>사이즈가이드</ButtonModal >
           {products.body}
          </Desc>
          <FilterContainer>
            <Filter>
            <FilterTitle>Color</FilterTitle>
              {products.color?.map((c) => (
                <FilterColor color={c} key={c} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <StyledRadio>
              <input type="radio" name="item" value="220" onClick={onClick}/>
	            <span>220</span>
              </StyledRadio>
              <StyledRadio>
              <input type="radio" name="item" value="230" onClick={onClick} />
	            <span>230</span>
              </StyledRadio>
              <StyledRadio>
              <input type="radio" name="item" value="240" onClick={onClick}/>
	            <span>240</span>
              </StyledRadio>
              <StyledRadio>
              <input type="radio" name="item" value="250" onClick={onClick}/>
	            <span>250</span>
              </StyledRadio>
              <StyledRadio>
              <input type="radio" name="item" value="260" onClick={onClick}/>
	            <span>260</span>
              </StyledRadio>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
          <SocialContainer>
            <SocialIcon color="000">
            <a href="https://github.com/" title="github"><GitHubIcon/></a>
          </SocialIcon>
          <SocialIcon color="3B5999">
          <a href="https://ko-kr.facebook.com/" title="facebook"><FacebookOutlinedIcon /></a>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <a href="https://www.instagram.com/" title="instagram"><InstagramIcon  /></a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <a href="https://twitter.com/?lang=ko" title="twitter"><TwitterIcon /></a>
          </SocialIcon>
          </SocialContainer>
        </InfoContainer>
        
        <AskSizeModal
        visible={modal}
        onCancel={onCancel}
      />
      </Wrapper>
      <img src="/image/배송안내.jpg" alt='이미지' style={{margin:'0 auto',display:'flex', alignItems:'center', justifyContent:'center' }}/>
      <Footer />
    </Container>
  );
};

export default ProductDetail;