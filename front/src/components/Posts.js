import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Post from "./Post";
const Posts = () => {
   const posts = useSelector(state => state.posts)
   //console.log(posts)
  return (
    <Container>
      <Row>
      {posts.map((post,index)=>(<Post key={index} post={post}/>))}
      </Row>
    </Container>
  );
};

export default Posts;
