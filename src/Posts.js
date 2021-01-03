import React from 'react';
import Post from './Post';

const postData = require("./post_data.json");

function PostList(data) {
    let postcontents = postData["posts"];
    const postItems = postcontents.map((item) =>
        <li>{<Post title={item["title"]} />}</li>
    );
    return (
        <ul>
            {postItems}
        </ul>
    );
}

function Posts() {
    return (
        <div> {PostList(postData)} </div>
    )
}

export default Posts;
