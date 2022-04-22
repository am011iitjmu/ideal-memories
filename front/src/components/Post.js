import React from 'react'
import { Button, Card, Col} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { DeletePost, EditPost } from '../actions/postAction';

const Post = ({key,post}) => {
    const {creator,selectedFile,title,message,tags,likeCount,createdAt,_id}=post;
    console.log(_id)
    const dispatch = useDispatch()
    // const HandleDelete=(_id)=>{
    //     dispatch(DeletePost(_id))
    // }
    return (
        <Col key={_id}>
        <Card style={{width:"18rem",margin:"20px 0px",boxShadow:"3px 8px 8px #ddd"}}>
            <Card.Header>{creator}</Card.Header>
            <Card.Body>
                <Card.Title>{title}<Button variant="outline-info" style={{float:"right"}} onClick={()=>{dispatch(EditPost(_id))}}>Edit</Button></Card.Title>
                <Card.Img src={selectedFile} className="my-3"/>
                {tags.map((tag)=>{<span>#{tag}</span>})}
                <Card.Text>{message}</Card.Text>
                <span><Button variant="outline-primary"><i className="fas fa-thumbs-up"></i></Button></span>
                <span style={{float:"right"}}><Button variant="outline-danger" onClick={()=>dispatch(DeletePost(_id))}><i className="fas fa-trash-alt"></i></Button></span>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Post

