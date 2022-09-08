import React from "react";
import styled from "styled-components";
// import Button from "../common/Button";
// import {useState} from 'react';
// import FileBase from 'react-file-base64';

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  width: 80%;
  margin: 3rem auto;
  button + button {
    margin-left: 0.5rem;
  }
`;
const Button = styled.button`
 
  padding: 8px 30px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  color: gray;
  font-weight: 500;
  &:hover {
      background-color: #c8c8c8;
      transform: scale(1.1);
    }
`
/* TagBox에서 사용하는 버튼과 일치하는 높이로 설정한 후 서로 간의 여백 지정 */
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({onCancel, onPublish, isEdit }) => {
    
   
    return (
        <WriteActionButtonBlock>
            <StyledButton cyan onClick={onPublish}>
                상품 {isEdit ? '수정' : '등록'}
            </StyledButton>
           <StyledButton onClick={onCancel}>취소</StyledButton>
        </WriteActionButtonBlock>
    )
}

export default WriteActionButtons;  