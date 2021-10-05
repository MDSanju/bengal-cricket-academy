import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const ServicePosts = () => {
    // use state hook
    const [posts, setPosts] = useState([]);
    // array slice method for showing only 4 data from 9 data
    const fourPosts = posts.slice(0, 4);

    // use effect hook and fetch data
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="row row-cols-1 row-cols-md-2 g-4 mx-0" style={{width: '80%'}}>
            {/* array map */}
            {
                fourPosts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
        </div>
    );
};

export default ServicePosts;