import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import Tags from "../common/Tags";
import SubInfo from "../common/SubInfo";
import { Link } from "react-router-dom";



const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
  padding-top: 40px;

`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;
const HearderBlock = styled.div`
    background: rgb(248,248,248);
    padding: 10px 0;
    border-top: 1px solid rgb(0,0,0);
    font-size: 1.167em;
    font-family: 'Malgun Gothic','맑은 고딕','Nanum Barun Gothic';
    color: rgb(51,51,51);
    
`;


const PostItem = ({ post }) => {
    const {publishedDate, user, tags, title, body, _id} = post; 
return (
  <PostItemBlock>
    <h2 style={{ display: 'block', fontSize: '20px', fontFamily:'futurademregular', fontWeight: '400', color: 'rgb(34,34,34)', 
    textTransform:'uppercase', textAlign: 'left', letterSpacing: '0.1rem'}}>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
    </h2>
    <Tags tags={tags} />
    <p>{body}</p>
    <SubInfo username={user.username} publishedDate={new Date(publishedDate)}/>
  </PostItemBlock>
);
};



const PostList = ({ posts, loading, error, showWriteButton }) => {
    //에러 발생 시
    if (error) {
        return <PostListBlock>에러가 발생했습니다.</PostListBlock>
    }
return (
    <>
    <h2  style={{ display: 'block', fontSize: '20px', fontFamily:'futurademregular', fontWeight: '400', color: 'rgb(34,34,34)', 
    textTransform:'uppercase', textAlign: 'center', letterSpacing: '0.1rem', paddingTop:'50px' }}>CUSTOMER REVIEW CENTER</h2>
    <PostListBlock>
    <WritePostButtonWrapper>
        {showWriteButton && (<Button cyan to='/write'>
        새 글 작성하기
      </Button>
      )}
      
    </WritePostButtonWrapper>
    <HearderBlock>
      <span style={{display: 'inline-block',textAlign:'center', width: '7%'}}>번호</span>
      <span style={{display: 'inline-block',textAlign:'center', width: '10%'}} >구분</span>
      <span style={{display: 'inline-block',textAlign:'center', width: '70%'}}>제목</span>
      <span style={{display: 'inline-block',textAlign:'center', width: '13%'}}>일시</span>
    </HearderBlock>
      
     
      {/* 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
      {!loading && posts && (
        <div>
        {posts.map(post => (
            <PostItem post={post} key={post._id}/>
        ))}
            </div>
      )}
   
  </PostListBlock>
  </>
);
};



export default PostList;

