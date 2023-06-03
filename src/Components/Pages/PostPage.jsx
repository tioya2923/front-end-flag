import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import posts from '../HomePage/PostList';
//import { loadPost } from './ForPage';
import '../Styles/postPage.css';


const PostPage = () => {

    const { postId } = useParams();
    const [post, setPost] = useState([]);
    // const { postlist } = posts()

    // useEffect(() => {
    //     loadPost(postId).then(data => {
    //         console.log(data);
    //         setPost(data);
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // })

    const getProperties = () => {
        fetch (posts[postId])
        .then(response => response.json())
        .then((response) => {
            setPost(response)

            console.log(() => {
                getProperties();
            }, [])
        })
    }

    return (
        <div>
            {posts.map((element, index) => {
                return(
                    <div>
                        {(post) &&
                        <div>{element.desc}</div>
                        }
                    </div>
                )
            })}
            <h1>Only Page</h1>
        </div>
    );
}

export default PostPage;
