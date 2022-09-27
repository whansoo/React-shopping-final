import styled from "styled-components";




const Container = styled.div`
    padding-top: 100px;
    height: 30px;
    background-color: #f5f5f5;
    color: black;
    display: flex;
    align-items: center; //수직 정렬
    justify-content: center; // 가운데 정렬
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <Container >
            오늘만 20%세일!! 지금 이 기회 놓치지 마세요! 지금 바로 주문하세요!!
        </Container>
    )
}

export default Announcement