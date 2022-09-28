import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

const Button = styled.button`
    font-size: 15px;
    margin-top: 30px;
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    border:none;
    cursor: pointer;
  `;
const Payment = ({effect, deps, total, userId, loading, number}) => {
    const now = new Date();
    const navigate = useNavigate();
	useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
        	document.head.removeChild(jquery);
        	document.head.removeChild(iamport);
        }
    }, []);
 

    const onClickPayment = () => {
        if(window.confirm("결제창으로 넘어갑니다. 결제창으로 넘어 가시겠습니까?")) {
            
    	const { IMP } = window;
    	IMP.init('imp64553381');

    	const data = {
    		pg: 'html5_inicis',
    		pay_method: 'card',
    		merchant_uid: `mid_${new Date().getTime()}`,
    		name: '결제 테스트',
    		amount: total,
    		custom_data: {
                name: '부가정보',
                desc: '세부 부가정보'
    		},
    		buyer_name: '홍길동',
    		buyer_tel: '01012345678',
    		buyer_email: '14279625@gmail.com',
    		buyer_addr: '구천면로 000-00',
    		buyer_postalcode: userId
    	};

    	IMP.request_pay(data, callback);
    }
  
   
    }
    
    const callback = (response) => {
    	const {success, error_msg} = response;

    	if (success){
    		alert('결제 성공');
            navigate(
                `/history`, {
                state: [total, userId, number, now],
                
                }
            )
    	} else {
    		alert(`결제 실패: ${error_msg}`);
    	}
    }
    
    return (
        <>
		<Button onClick={onClickPayment}>결제하기</Button>
        </>
    );
}

    

export default Payment;