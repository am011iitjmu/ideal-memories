import React,{useState,useEffect} from 'react'
import { Button, Card, Form, FormControl } from 'react-bootstrap'
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from "react-redux"
import {CreatePost, EditPost, UpdatePost} from "../actions/postAction"
const Form1 = () => {
    const [postData, setPostData] = useState({creator:"",title:"",message:"",selectedFile:"",tags:""})
    const dispatch = useDispatch()
    const {yes} = useSelector(state => state.edit)
    const post=useSelector((state)=>yes?state.posts.find((p)=>p._id===yes):null)
    useEffect(() => {
        if(post){
            setPostData(post)
        }
    }, [post])

    const SubmitHandler=(e)=>{
        e.preventDefault();
        if(yes){
           dispatch(UpdatePost(yes,postData))
           dispatch(EditPost(null))
        }
        else{
        dispatch(CreatePost(postData))
        }
    }
    return (
        <Card style={{position:"absolute",top:"5%",boxShadow:"2px 8px 10px #ddd"}}>
        <Card.Header>{yes?"Editing the Memory":"Create the Memory"}</Card.Header>
        <Card.Body>
        <Form onSubmit={SubmitHandler}>
        <Form.Group><FormControl type="text" placeholder="Creator" value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/></Form.Group>
            <Form.Group><FormControl type="text" placeholder="Title" value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/></Form.Group>
            <Form.Group><FormControl type="text" as="textarea" row={3} placeholder="Message" value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/></Form.Group>   
            <Form.Group><FormControl type="text" placeholder="Tags" value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/></Form.Group>
            <Form.Group>
           <FileBase  type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
            </Form.Group>     
            <Button type="submit" variant="outline-primary" style={{float:"right"}} >Submit</Button>
        </Form>
        </Card.Body>
        </Card>
    )
}

export default Form1
