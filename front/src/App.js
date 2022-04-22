import React, { useEffect } from 'react'
import {Button, Col, Container, Row} from "react-bootstrap"
import Form1 from './components/Form'
import Posts from './components/Posts'
import {EditPost, FetchPost} from "./actions/postAction"
import { useDispatch } from "react-redux";
const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchPost())
       // dispatch(EditPost(false))
    }, [dispatch])
    return (
        <div>
        <Row>
            <Col md={8}>
            <Posts/>
            </Col>
            <Col>
                <Form1/>
            </Col>
        </Row>   
        </div>
    )
}

export default App