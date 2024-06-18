import GETRequest from "./request/GETRequest";
import POSTRequest from "./request/POSTRequest";
import PUTRequest from "./request/PUTRequest";
import DELETERequest from "./request/DELETERequest";

export default function FetchData(props) {

    if(!props.display) return;

    return(
        <>
            <h3>How to use AXIOS with React</h3>
                <h4>What is AXIOS?</h4>
                    <p>Axios is an HTTP client library thay allows you to make requests to a givent endpoint.</p>
                    <p>This could be an external API or your own backend Node.js server.</p>
                    <p>By making a request, you expect your API to perform an operation according to request you made.</p>
                <h4>How to Set Up Axios with React</h4>
                    <ol>
                        <li>Install Axios with npm</li>
                        <code>
                            <span>npm</span> <span>install</span> axios
                        </code>
                        <li>An API endpoint for making requests</li>
                        Use the JSON Placeholer API to get and change post data.
                    </ol>
                <h4>HTTP methods are supported</h4>
                    <ul>
                        <li>GET <span>/posts</span> </li>
                        <li>GET <span>/posts/1</span> </li>
                        <li>GET <span>/posts/1/comments</span> </li>
                        <li>GET <span>/comments?postid=1</span> </li>
                        <li>POST <span>/posts</span> </li>
                        <li>PUT <span>/posts/1</span> </li>
                        <li>PATCH <span>/posts/1</span> </li>
                        <li>DELETE <span>/posts/1</span> </li>
                    </ul>
                    <h5>Here are examples: retrieving, creating, updating and deleting posts</h5>
                        <GETRequest />
                        <POSTRequest />
                        <PUTRequest />
                        <DELETERequest />
            
            <h3>How to fetch API data in React</h3>
        </>
    );
}