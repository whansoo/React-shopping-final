
import { TextField, Paper  } from '@mui/material';
import FileBase64 from 'react-file-base64';
// import styled from "styled-components";
// import { TextField, Button, Typography, Paper  } from '@mui/material';




const Form = ({ onChangeField, title, body, price, selectedFile, size, color }) => {
 
    const onChangeTitle = e => {
      onChangeField({ key: 'title', value: e.target.value });
      
    };
    
    const onChangeBody = e => {
      onChangeField({ key: 'body', value: e.target.value });
      
    };
    const onChangePrice = e => {
      onChangeField({ key: 'price', value: e.target.value  });
      
    };
    const onChangeSize = e => {
      onChangeField({ key: 'size', value: e.target.value });
      
    };
    const onChangeColor = e => {
      onChangeField({ key: 'color', value: e.target.value });
      
    };
    // const onChangeImage = e => {
    //   const result = onChangeField({ key: 'selectedFile', value: e.target.value });
    //   setItems([...items, result]);
      
    // };
 
  
  return (
    
    <Paper className='paper' style={{ width: '80%', margin: '10rem auto' }}>
       <TextField style={{ width: '100%' }}
        placeholder="상품 이름 입력"
        onChange={onChangeTitle}
        value={title}
      />
      <TextField style={{ width: '100%' }}
        placeholder="상품 설명 입력"
        onChange={onChangeBody}
        value={body}
      />
      <TextField style={{ width: '33.33%' }}
        placeholder="가격 입력"
        onChange={onChangePrice}
        value={price}
      />
      <TextField style={{ width: '33.33%' }}
        placeholder="Size 입력"
        onChange={onChangeSize}
        value={size || '' }
      />
      <TextField style={{ width: '33.33%' }}
        placeholder="Color 입력"
        onChange={onChangeColor}
        value={color || '' }
      />
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => onChangeField({ key: 'selectedFile', value: base64 })}
        />
      
        {/* <TextField
        placeholder="사진 기입"
        onChange={onChangeImage}
        value={selectedFile}
      /> */}
    <img className="activator" style={{ width: 200, height: 200, display: 'block' }} src={selectedFile} alt='사진'/>
    </Paper>
    
  );
  };


export default Form;
