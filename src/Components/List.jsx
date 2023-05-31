import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const List = () => {

    const[posts, setposts] = useState([]);

     /**
     *
     */
    const fetchPost = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}posts`)
        .then(res => setposts(res.data))
        .catch ((e) => {
            console.log(e);
        })
    }

    /**
     * 
     */
    useEffect(() => {
        
        return () => {
            fetchPost();
        };
    }, []);

    /**
     * 
     */
    return <div className="main">
        <h3 className="section_title">Latest Post</h3>

        {posts.map((post) => <div key={post.id} className="card">
            <NavLink to={`/post/${post.id}`}>
                <h4 className="card-title">{post.title}</h4>
            </NavLink>
                <p>{post.description}</p>
        </div>)}
    </div>;
}

export default List;

 
