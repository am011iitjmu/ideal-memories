import { CREATE, DELETE, FETCH_ALL,EDIT_POST_BOOLEAN, UPDATE} from "../constants/postConstants"
export const postReducer=(posts=[],action)=>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...posts,action.payload]
        case DELETE:
            return (posts.filter((post)=>post._id !== action.payload))      
        case UPDATE:
            return (posts.map((post)=>post._id===action.payload._id?action.payload:post))  
        default:
            return posts    
    }

}

export const editReducer=(edits={yes:null},action)=>{
    switch(action.type){
        case EDIT_POST_BOOLEAN:
            return {yes:action.payload}
        default:
            return edits    
    }
}