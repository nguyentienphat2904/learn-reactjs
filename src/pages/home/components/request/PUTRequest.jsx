import axios from "axios";
import React, {useState, useEffect} from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function PUTRequest() {

    const inputStyles = {
        marginRight: "10px",
    };
    
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function updatePost() {
        const title = document.getElementById('put-title').value;
        const body = document.getElementById('put-body').value;

        axios
            .put(`${baseURL}/1`, {
                title: title,
                body: body,
            })
            .then((response) => {
                setPost(response.data);
                document.getElementById('put-title').value = "";
                document.getElementById('put-body').value = "";
            });
    }

    if(!post) return(<h4>Can not Put Request</h4>);
    
    return(
        <>
            <h4>Put Request</h4>
            <div>
                <input id="put-title" type="text" placeholder="Enter title" style={inputStyles}/>
                <input id="put-body" type="text" placeholder="Enter body" style={inputStyles}/>
                <button onClick={updatePost}>Update Post</button>
                <h4>Title: {post.title}</h4>
                <p>Body: {post.body}</p>
            </div>
        </>
    );  
}