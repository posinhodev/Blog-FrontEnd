import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Single = () => {
    let params = useParams();

    const [post, setpost] = useState( {} );

    const getPost = async(id) => {
        await axios.get(`${process.env.REACT_APP_API_URL}posts/${id}`)
        .then((res) => setpost(res.data))
        .catch(e => console.error(e))
    }

    useEffect(() => {
        return () => {
            getPost(params.id)
        };
    }, [params.id]);

    return <div className="main">
       <div className="card">
            <h4>{post.title}</h4>
            <p>{post.description}</p>
       </div>
       <h4>No comment available</h4>
    </div>
}

export default Single;