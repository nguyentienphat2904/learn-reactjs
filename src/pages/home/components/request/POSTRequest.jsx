import axios from "axios";
import React, {useState, useEffect} from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function POSTRequest() {

    const inputStyles = {
        marginRight: "10px",
    };
    
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function createPost() {
        const title = document.getElementById('post-title').value;
        const body = document.getElementById('post-body').value;

        axios
            .post(baseURL, {
                title: title,
                body: body,
            })
            .then((response) => {
                setPost(response.data);
                document.getElementById('post-title').value = "";
                document.getElementById('post-body').value = "";
            });
    }

    if(!post) return(<h4>Can not Post Request</h4>);
    
    return(
        <>
            <h4>Post Request</h4>
            <div>
                <input id="post-title" type="text" placeholder="Enter title" style={inputStyles}/>
                <input id="post-body" type="text" placeholder="Enter body" style={inputStyles}/>
                <button onClick={createPost}>Create Post</button>
                <h4>Title: {post.title}</h4>
                <p>Body: {post.body}</p>
            </div>
        </>
    );  
}