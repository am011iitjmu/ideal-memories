import Axios from "axios"
//import * as api from "../Api/index.js"
import {CREATE, FETCH_ALL,DELETE,EDIT_POST_BOOLEAN, UPDATE} from "../constants/postConstants"
// export const FetchPost=()=>{
//     const {data}=async()=>{await api.fetchPosts()}
//     const action={type:"FETCH_ALL",payload:data}
//     return action;
// }
export const FetchPost=()=>async(dispatch)=>{
    try{
    //const {data}=await api.fetchPosts();
    const {data}=await Axios.get("http://localhost:5000/posts")
    
    console.log(data)
    dispatch({type:FETCH_ALL,payload:data})
    }
    catch(error){
        console.log(error.message)
    }
}
export const CreatePost=(postData)=>async(dispatch)=>{
    try {
        const {data}=await Axios.post("http://localhost:5000/posts",postData)
        console.log(data)
        dispatch({type:CREATE,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}
export const DeletePost=(id)=>async(dispatch)=>{
    try {
        await Axios.delete(`http://localhost:5000/posts/${id}`)
        dispatch({type:DELETE,payload:id})
    } catch (error) {
        console.log(error.message)
    }
}

export const UpdatePost=(yes,postData)=>async(dispatch)=>{
    try {
        const {data}=await Axios.patch(`http://localhost:5000/posts/${yes}`,postData)
        dispatch({type:UPDATE,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const EditPost=(value)=>async(dispatch)=>{
    try {
       dispatch({type:EDIT_POST_BOOLEAN,payload:value}) 
    } catch (error) {
        console.log(error.message)
    }
}