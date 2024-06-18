import axios from "axios";
import React, {useState, useEffect} from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function GETRequest() {

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if(!post) return(<h4>Can not Get Request</h4>);
    
    return(
        <>
            <h4>Get Request</h4>
            <div>
            <h4>Title: {post.title}</h4>
            <p>Body: {post.body}</p>
            </div>
        </>
    );  
}