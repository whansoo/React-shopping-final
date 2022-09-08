import React from 'react';



export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  //각각 가격을 계산 하기 위한 연산이다.
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.2;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  //cartItems이 0개면 장바구니에 물건을 담으라고 메시지를 적는다.
  //cartItems가 추가가 될때 마다 map을 사용하여 item이름과 -,+버튼들 그리고 가격 까지 생기게 만든다.이는 계속 하나의 아이템들이 생길 때 마다 반복문 map으로 인해 생기게 된다.
  return (
    <aside className="block col-1">
      <h2>CartItems</h2>
      <div>
        {cartItems.length === 0 && <div>장바구니에 물건을 담아주세요!</div>}  
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.price}원
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">상품가격</div>
              <div className="col-1 text-right">{itemsPrice}원</div>
            </div>
            <div className="row">
              <div className="col-2">세금</div>
              <div className="col-1 text-right">{taxPrice}원</div>
            </div>
            <div className="row">
              <div className="col-2">배송비</div>
              <div className="col-1 text-right">
                {shippingPrice}원
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>총 상품 가격</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice}원</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('결제 창으로 넘어갑니다!')}>
                결제하기
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}




// export default function Orders() {
//     return <aside>
//         <div className="empty">
//             <div className="title">You don't have any orders</div>
//             <div className="subtitle">Click on a + to add an order</div>
//         </div>
//     </aside>
// }