import React from 'react'
import { useEffect } from 'react';
import { useLocation } from "react-router";

function HistoryPage() {
  const {state} = useLocation();
  // const [price, setPrice] = useState('')
  const [total, userId, number, now] = state
    console.log(total)
  //  console.log(user)
   console.log(number)

   useEffect(() => {
    if (total) {
      try {
        localStorage.setItem('total', JSON.stringify(total));
      }catch (e) {
        console.log ('localStorage is not working');
      }
    }
  }, [total]);
   useEffect(() => {
    if (now) {
      try {
        localStorage.setItem('now', JSON.stringify(now));
      }catch (e) {
        console.log ('localStorage is not working');
      }
    }
  }, [now]);
   useEffect(() => {
    if (userId) {
      try {
        localStorage.setItem('userId', JSON.stringify(userId));
      }catch (e) {
        console.log ('localStorage is not working');
      }
    }
  }, [userId]);
   useEffect(() => {
    if (number) {
      try {
        localStorage.setItem('number', JSON.stringify(number));
      }catch (e) {
        console.log ('localStorage is not working');
      }
    }
  }, [number]);
    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center', backgroundColor: '#c8c8c8' }}>
                <h1>History</h1>
            </div>
            <br />

            <table style={{width: '100%', height: '65px'}}>
                <thead>
                    <tr >
                        <th>고객 ID</th>
                        <th>총가격</th>
                        <th>수량</th>
                        <th>결제 날짜</th>
                    </tr>
                </thead>

                <tbody>
                {/* {!loading && state &&(
                     <div>
                      {state.map(item => (
                                <td key={item.id}>
                                <td>{JSON.parse(localStorage.getItem('item.user'))}</td>
                                <td>{JSON.parse(localStorage.getItem('item.total'))}</td>
                                <td>{item.quantity}</td>
                                <td>{item.dateOfPurchase}</td>
                               </td>
        
                        ))}
                      </div>
                )} */}
                            <tr style={{ textAlign: 'center', backgroundColor: 'aqua' }} >
                                <td >{JSON.parse(localStorage.getItem('userId'))}</td>
                                <td>{JSON.parse(localStorage.getItem('total'))}원</td>
                                <td>{JSON.parse(localStorage.getItem('number'))}개</td>
                                <td>{JSON.parse(localStorage.getItem('now'))}</td>
                            </tr>
                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage