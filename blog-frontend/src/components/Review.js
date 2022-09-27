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

const Review = () => {
    return (
        <Container >
            REVIEW CUSTOMER CENTER
        </Container>
    )
}

export default Review