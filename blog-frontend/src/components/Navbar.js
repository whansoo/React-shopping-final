import { Search } from '@mui/icons-material';
import { Badge } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from "../responsive";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../modules/user';
import { useEffect } from 'react';



const Container = styled.div`
    width: 100%;
    height: 100px;
    ${mobile({ height: "50px" })}
    position: fixed;
    top: 0;
    z-index: 9;
    background-color: #f5fafd;
    border-bottom: 1px solid #c8c8c8;
`

const Wrapper = styled.div`
    padding: 10px 20px;   //아래위,좌우 여백
    display: flex; //수직을 수평으로 만듬
    align-items: center;  //Wrapper로 감싼 것들을 모두 수평 맞춤 (수직기준으로 센터:수평)
    justify-content: space-between; //글과 글 사이 여백
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`    //박스안에 input을 가운데로 맞춤
    border: 0.5px solid lightgray;
    display: flex;       //flex로 수평을 만듬
    align-items: center; //가운데 정렬
    margin-left: 25px; //EN하고 왼쪽에서 떨어짐
    padding: 5px;
`
const Input = styled.input`
    border:none;
    ${mobile({ width: "50px" })}
`
const Center = styled.div`
   flex: 1; //flex를 2로하면 양쪽보다 2배 너비 넓어짐
   text-align: center;
   ${mobile({ display: "none" })}
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
   flex: 1;
   display: flex; //수직 -> 수평으로 바꿈
   align-items: center; //수직 가운데 정렬 (수평 맞춤)
   justify-content: flex-end; //맨 오르쪽으로 이동
   ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = ({countCartItems, onChange}) => {
  const { user } = useSelector(
    ({user}) => ({
      user : user.user
    })
  )
  useEffect(() => {
    if (countCartItems) {
      try {
        localStorage.setItem('countCartItems', JSON.stringify(countCartItems));
      }catch (e) {
        console.log ('localStorage is not working');
      }
    }
  }, [countCartItems]);


    const dispatch = useDispatch();
   
      const onLogout = () => {
          dispatch(logout());
      }
      const onClick = () => {
      
      if(!user) {
        alert('로그인을 먼저 하세요.')
      }

        else if(user._id === '6310a06ea26bd4f134f3441d') {
            
            window.location.href = "/form"
        }
         else {
            return  (
                alert('관리자만 접근 가능합니다')
            )
           }
         }
    const handleClick = () => {
      
       if(!user) {
          alert('로그인을 먼저 하세요.')
       }
        else {
            window.location.href = "/cart"
          }
        }
        
     
  return (
    <Container>
       <Wrapper>
           <Left>
            <Language>EN</Language>
            <SearchContainer>
                 <Input onChange={onChange}/>
                 <Search style={{color:'gray', fontSize:19}}/>
            </SearchContainer>
           </Left>
           <Center><Logo><Link to='/' >Just Do it</Link></Logo></Center>
           <Right>
             <MenuItem><Link to='/shop'>SHOP</Link></MenuItem>
             {user ? ( <MenuItem><Link to='/' onClick={onLogout}>LOGOUT</Link></MenuItem>)
              : (
             <MenuItem><Link to='/login'>LOGIN</Link>    
             &nbsp;&nbsp;&nbsp;&nbsp;<Link to='/register'>REGISTER</Link></MenuItem>
             )}
             <MenuItem><Link to='/post'>REVIEW</Link></MenuItem>
             <MenuItem><FileUploadIcon onClick={onClick}/></MenuItem>
             <MenuItem>
          
                  
                <Badge badgeContent={countCartItems} color='primary'>
                  
                        <ShoppingCartOutlinedIcon onClick={handleClick} />                      
                   
                </Badge>
                 
             </MenuItem>
           </Right>
       </Wrapper>
    </Container>
  )
}

export default Navbar